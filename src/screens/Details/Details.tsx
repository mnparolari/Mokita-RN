import { Text, View, Image } from 'react-native'
import React from 'react'
import { Header, Counter } from '../../components'
import styles from './Details.style'
import { Navigation, Product } from '../../models'
import { Route } from '@react-navigation/native'
import Feather from '@expo/vector-icons/Feather'

const Details = ({ route, navigation }: { navigation: Navigation, route: Route<string, { product?: Product } | undefined> }) => {
    const { product } = route.params || {};

    return (
        <View style={styles.container}>
            <Header title={product?.title.toUpperCase() + ' - ' + product?.band.toUpperCase()} />
            <View style={styles.containerIcon}>
                <Feather name='arrow-left' size={30} onPress={() => navigation.goBack()} style={styles.backIcon} />
            </View>
            <Image style={styles.image} source={{ uri: product?.images }} />
            <Text style={styles.detail}>Detalle del producto: {product?.detail}</Text>
            {/* <Text style={styles.detail}>Descripción: {product?.description}</Text> */}
            <Text style={styles.price}>Precio: ${product?.price}</Text>
            <Text style={styles.price}>Stock: {product?.stock}</Text>
            <View>
                <Counter stock={product?.stock} initial={1} />
            </View>
        </View>
    )
}

export default Details