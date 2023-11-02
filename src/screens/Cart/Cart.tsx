import { FlatList, Pressable, Text, View, SafeAreaView, Image } from 'react-native';
import React, { useState } from 'react';
import styles from './Cart.style';
import CartItem from './components/CartItem/CartItem';
import { Navigation, ProductCart } from '../../models';
import { Header, Loading } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { removeAll, removeItem } from '../../features/Cart/CartSlice';
import { useGetOrdersQuery, usePostOrderMutation } from '../../services/shopApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import useModal from '../../hooks/useModal';
import { MyModal } from '../../components';

const Cart = ({ navigation }: { navigation: Navigation }) => {
    const { items, total, user, updatedAt } = useSelector((state: RootState) => state.cart)
    const dispatch = useDispatch();
    const [triggerPost] = usePostOrderMutation()
    const { modalVisible, toggleModal } = useModal();
    const [isLoading, setIsLoading] = useState(false);
    const { refetch } = useGetOrdersQuery(user ? user : "")


    const handleDeleteToCart = (product: ProductCart) => {
        dispatch(removeItem(product));
        const storageKeyToRemove = `isDisabled_${product.id}`;
        AsyncStorage.removeItem(storageKeyToRemove);
    }

    const renderItem = ({ item }: { item: ProductCart }) => (
        <CartItem productCart={item} onDelete={handleDeleteToCart} />
    );

    const confirmBuy = () => {
        setIsLoading(true); 
        const id = uuid.v4();
        triggerPost({ id, total, items, user, updatedAt });
        setTimeout(() => {
            setIsLoading(false); 
            toggleModal(); 
            setTimeout(() => {
                dispatch(removeAll()); 
                refetch();
            }, 2000); 
        }, 3000); 
    };

    return (
        <SafeAreaView style={styles.container}>
            <Header title='CARRITO DE COMPRAS' />
            {items.length === 0 ? (
                <View style={styles.notProductContainer}>
                    <Image source={{ uri: 'https://i.ibb.co/kXVtgs3/shoppinh-Cart-Empty.png' }} style={{ width: 350, height: 200 }} />
                    <Text style={styles.notProductTitle}>¡No tenes productos seleccionados!</Text>
                </View>
            ) : (
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1 }}>
                        {isLoading ? (
                            <Loading />
                        ) : (
                            <FlatList data={items} keyExtractor={item => item.id.toString()} renderItem={renderItem} />
                        )}
                    </View>
                    <View style={styles.completedBuy}>
                        <View style={styles.totalContainer}>
                            <Text style={styles.total}>{`Total: $${total}`}</Text>
                        </View>
                        <Pressable onPress={confirmBuy} style={styles.buyButton}>
                            <Text style={{ color: '#fff', fontFamily: 'EncodeMedium', fontSize: 15 }}>Comprar</Text>
                        </Pressable>
                    </View>
                </View>
            )}
            <MyModal
                title="Compra existosa"
                message="Tu compra fue realizada de forma existosa. Podes revisar tu órden de compra en el ícono del listado"
                modalVisible={modalVisible}
                setModalVisible={toggleModal}
            />
        </SafeAreaView>
    )
}

export default Cart
