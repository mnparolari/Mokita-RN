import { FlatList, View, Text, Image } from 'react-native';
import React, { useState } from 'react';
import styles from './Orders.style';
import { Header, Loading } from '../../components';
import { useGetOrdersQuery } from '../../services/shopApi';
import { OrdersCart } from '../../models';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { ListItem } from '@rneui/themed';
import { Avatar } from '@rneui/themed';

const Orders = () => {
    const user = useSelector((state: RootState) => state.cart.user);
    const { data, isLoading } = useGetOrdersQuery(user ? user : "");
    const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

    if (isLoading) {
        return (
            <View style={styles.container}>
                <Header title="ÓRDENES DE COMPRA" />
                <Loading />
            </View>
        );
    }

    const toggleItemExpansion = (itemId: string) => {
        setExpandedItems((prevState) => ({
            ...prevState,
            [itemId]: !prevState[itemId],
        }));
    };

    if (data) {
        const ordersArray = Object.values(data);

        const renderItem = ({ item }: { item: OrdersCart }) => {
            return (
                <ListItem.Accordion
                    content={
                        <>
                            <ListItem.Content>
                                <ListItem.Title style={styles.accordionTextBold}>ID de compra:</ListItem.Title>
                                <ListItem.Subtitle>{item.id}</ListItem.Subtitle>
                                <ListItem.Subtitle><Text style={styles.accordionTextBold}>Fecha de compra:</Text> {item.updatedAt}</ListItem.Subtitle>
                            </ListItem.Content>
                        </>
                    }
                    isExpanded={expandedItems[item.id]}
                    onPress={() => toggleItemExpansion(item.id)}
                    containerStyle={[styles.accordionContainer, { borderBottomWidth: expandedItems[item.id] ? 0 : 1 }]}

                >
                    <ListItem containerStyle={[styles.listItemAccordion, { borderTopWidth: expandedItems[item.id] ? 0 : 1 }]}>
                        <View style={styles.listItemContainer}>
                            {item.items.map((l, i) => {
                                if (i % 3 === 0) {
                                    return (
                                        <View
                                            key={i}
                                            style={styles.listItemContainerContent}
                                        >
                                            {item.items.slice(i, i + 3).map((product, j) => (
                                                <View
                                                    key={j}
                                                    style={{
                                                        flexDirection: 'row',
                                                        flex: 1 / 3,
                                                        marginVertical: 5
                                                    }}
                                                >
                                                    <Avatar
                                                        title={product.band}
                                                        source={{ uri: product.images }}
                                                        size={42}
                                                        rounded
                                                    />
                                                    <ListItem.Content style={{ marginHorizontal: 2 }}>
                                                        <ListItem.Subtitle>${product.price}</ListItem.Subtitle>
                                                        <ListItem.Subtitle>x{product.quantity}</ListItem.Subtitle>
                                                    </ListItem.Content>
                                                </View>
                                            ))}
                                        </View>
                                    );
                                }
                                return null;
                            })}
                        </View>
                        <View style={styles.totalContainer}>
                            <ListItem.Subtitle style={styles.accordionTextBold}>Total: ${item.total}</ListItem.Subtitle>
                        </View>
                    </ListItem>
                </ListItem.Accordion>
            );
        }

        return (
            <View style={styles.container}>
                <Header title="ÓRDENES DE COMPRA" />
                {ordersArray.length > 0 ? (
                    <FlatList
                        style={styles.ordersContainer}
                        data={ordersArray}
                        renderItem={renderItem}
                        keyExtractor={(item) => (item.id ? item.id.toString() : '')}
                    />
                ) : (
                    <View style={styles.notOrdersContainer}>
                        <Image source={{ uri: 'https://www.alphabroder.com/img/empty-box_2.png' }} style={{ width: 350, height: 200 }} />
                        <Text style={styles.notOrdersTitle}>¡No tenes órdenes generadas!</Text>
                    </View>
                )}
            </View>
        );
    }
}

export default Orders
