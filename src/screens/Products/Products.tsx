import { FlatList, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './Products.style'
import allProducts from '../../data/products'
import { Header, SearchInput } from '../../components'
import { Product } from '../../models'

const Products = ({ category }: { category: string }) => {
    const [arrProducts, setarrProducts] = useState<Product[]>([]);
    const [keyword, setkeyword] = useState('');

    useEffect(() => {
        if (category) {
            const products = allProducts.filter(p => p.category === category)
            const productsFiltered = products.filter(p => p.title.includes(keyword))
            setarrProducts(productsFiltered)
        } else {
            const productsFiltered = allProducts.filter(p => p.title.includes(keyword))
            setarrProducts(productsFiltered)
        }
    }, [category, keyword])


    return (
        <View style={styles.container}>
            <Header title={category.toUpperCase()} />
            <SearchInput onSearch={setkeyword} />
            <View style={styles.listContainer}>
                <FlatList data={arrProducts} renderItem={({ item }) => <View><Text>{item.title}</Text></View>} keyExtractor={item => item.id.toString()} />
            </View>
        </View>
    )
}

export default Products
