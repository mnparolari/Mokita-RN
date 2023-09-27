import { Image, View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from './CartItem.style'
import Feather from '@expo/vector-icons/Feather'
import { Card } from '../../../../components'
import { Product } from '../../../../models'

const CartItem = ({ productCart }: { productCart: Product }) => {
    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <View >
                    <Image style={styles.image} source={{ uri: productCart.images }} />
                </View>
                <View style={styles.titleContainer}>
                    <Text>Título: {productCart.title}</Text>
                    <Text>Banda: {productCart.band}</Text>
                    <Text>Cantidad: {productCart.stock}</Text>
                    <Text>Precio: {productCart.price}</Text>
                    <View style={styles.btnContainer}>
                        <Pressable style={styles.deleteIcon}>
                            <Feather name='trash-2' size={30} color={'#fff'} />
                        </Pressable>
                    </View>
                </View>
            </Card>
        </View>
    )
}

export default CartItem