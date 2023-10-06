import { FlatList, Pressable, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import styles from './Cart.style'
import CartItem from './components/CartItem/CartItem'
import { Navigation, ProductCart } from '../../models'
import { Header } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { removeItem } from '../../features/Cart/CartSlice'
import { usePostOrderMutation } from '../../services/shopApi'
import Feather from '@expo/vector-icons/Feather'

const Cart = ({ navigation }: { navigation: Navigation }) => {
    const cart = useSelector((state: RootState) => state.cart.items);
    const total = useSelector((state: RootState) => state.cart.total);
    const dispatch = useDispatch();
    const [triggerPost] = usePostOrderMutation()

    const handleDeleteToCart = (product: ProductCart) => {
        dispatch(removeItem(product))
    }

    const renderItem = ({ item }: { item: ProductCart }) => (
        <CartItem productCart={item} onDelete={handleDeleteToCart} />
    );

    const confirmBuy = () => {
        triggerPost({ total, cart, user: "UserLogged" })
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header title='CARRITO DE COMPRAS' />
            {cart.length === 0 ? (
                <View style={styles.notProductContainer}>
                    <Feather size={64} name='alert-triangle' color='#e2382f' />
                    <Text style={styles.notProductTitle}>No tenes productos seleccionados</Text>
                </View>
            ) : (
                <View>
                    <View>
                        <FlatList data={cart} keyExtractor={item => item.id.toString()} renderItem={renderItem} />
                    </View>
                    <View style={styles.completedBuy}>
                        <Pressable onPress={confirmBuy}>
                            <Text>Confirmar</Text>
                            <View>
                                <Text>{`Total: $${total}`}</Text>
                            </View>
                        </Pressable>
                    </View>
                </View>
            )}
        </SafeAreaView>
    )
}

export default Cart
