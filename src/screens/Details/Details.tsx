import { Text, View, Image } from 'react-native'
import React from 'react'
import { Header } from '../../components'
import styles from './Details.style'
import { Navigation, Product } from '../../models'
import { Route } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Feather';

const Details = ({ route, navigation }: { navigation: Navigation, route: Route<string, { product?: Product } | undefined> }) => {
    const { product } = route.params || {};
    return (
        <View style={styles.container}>
            <View style={styles.containerIcon}>
                <Icon name='arrow-left' size={30} onPress={() => navigation.goBack()} style={styles.backIcon} />
                <Header title={product?.title.toUpperCase() + ' - ' + product?.band.toUpperCase()} />
            </View>
            <Image style={styles.image} source={{ uri: product?.images }} />
            <Text style={styles.detail}>Detalle del producto: {product?.detail}</Text>
            <Text style={styles.detail}>Descripción: {product?.description}</Text>
            <Text style={styles.detail}>Género: {product?.gender}</Text>
            <Text style={styles.detail}>Tipo de producto: {product?.type}</Text>
            <Text style={styles.price}>Precio: ${product?.price}</Text>
            <Text style={styles.price}>Stock: {product?.stock}</Text>
        </View>
    )
}

export default Details