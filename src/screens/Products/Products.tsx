import { FlatList, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './Products.style'
import allProducts from '../../data/products'
import { Card, Header, SearchInput } from '../../components'
import { Navigation, Product } from '../../models'
import { Route } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Feather';



const Products = ({ navigation, route }: { navigation: Navigation, route: Route<string, { category?: string } | undefined> }) => {
    const [arrProducts, setarrProducts] = useState<Product[]>([]);
    const [keyword, setkeyword] = useState('');
    const { category } = route.params || {};

    useEffect(() => {
        if (category) {
            const products = allProducts.filter(p => p.category === category)
            const productsFiltered = products.filter(p => p.title.includes(keyword))
            setarrProducts(productsFiltered)
        } else {
            const productsFiltered = allProducts.filter(p => p.title.includes(keyword))
            setarrProducts(productsFiltered)
        }
    }, [category, keyword]);


    return (
        <View style={styles.container}>
            <View style={styles.containerIcon}>
                <Icon name='arrow-left' size={30} onPress={() => navigation.goBack()} style={styles.backIcon} />
                <Header title={category?.toUpperCase()} />
            </View>
            <SearchInput onSearch={setkeyword} />
            <View style={styles.listContainer}>
                <FlatList data={arrProducts} numColumns={3} renderItem={({ item }) => (
                    <TouchableOpacity style={styles.containerCard}onPress={() => navigation.navigate('Details', { product: item })}>
                            <Card style={styles.card}>
                                <Image style={styles.image} source={{ uri: item.images }}/>
                                <Text>{item.title}</Text>
                            </Card>
                    </TouchableOpacity>)}
                    keyExtractor={item => item.id.toString()} />
            </View>
        </View>
    )
}

export default Products
