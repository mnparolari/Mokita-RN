import { Image, View, Text, Pressable } from 'react-native';
import React from 'react';
import styles from './CartItem.style';
import Feather from '@expo/vector-icons/Feather';
import { Card } from '../../../../components';
import { CartItemsProps } from '../../../../models';


const CartItem: React.FC<CartItemsProps> = (props) => {

    const {productCart, onDelete} = props;

    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <View>
                    <Image style={styles.image} source={{ uri: productCart.images }} />
                </View>
                <View style={styles.titleContainer}>
                    <Text style={{width: 150, fontFamily: 'EncodeRegular', fontSize: 15}}>Título: {productCart.title}</Text>
                    <Text style={{width: 150, fontFamily: 'EncodeRegular', fontSize: 15}}>Banda: {productCart.band}</Text>
                    <Text style={{fontFamily: 'EncodeRegular', fontSize: 15}}>Cantidad: {productCart.quantity}</Text>
                    <Text style={{fontFamily: 'EncodeRegular', fontSize: 15}}>Precio: {productCart.price}</Text>
                    <View style={styles.btnContainer}>
                        <Pressable style={styles.deleteIcon} onPress={() => onDelete(productCart)}>
                            <Feather name='trash-2' size={20} color={'#fff'} />
                        </Pressable>
                    </View>
                </View>
            </Card>
        </View>
    )
}

export default CartItem