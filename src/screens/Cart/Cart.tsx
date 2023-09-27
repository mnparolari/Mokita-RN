import { FlatList, Pressable, Text, View } from 'react-native'
import React from 'react'
import styles from './Cart.style'
import cart from '../../data/cart'
import CartItem from './components/CartItem/CartItem'
import { Product } from '../../models'
import { Header } from '../../components'

const Cart = () => {

    const renderItem = ({ item }: { item: Product }) => (
        <CartItem productCart={item} />
    );

    return (
        <View style={styles.container}>
            <Header title='CARRITO DE COMPRAS' />
            <View>
                <FlatList data={cart} keyExtractor={item => item.id.toString()} renderItem={renderItem} />
            </View>
            <View style={styles.completedBuy}>
                <Pressable>
                    <Text>Confirmar</Text>
                    <View>
                        <Text>{`Total: $5000`}</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    )
}

export default Cart
