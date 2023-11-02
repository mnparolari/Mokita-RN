import { FlatList, TouchableOpacity, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './Products.style';
import { Header, Loading, SearchInput } from '../../components';
import { Navigation, Product } from '../../models';
import Feather from '@expo/vector-icons/Feather';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useGetProductsByCategoryQuery } from '../../services/shopApi';

const Products = ({ navigation }: { navigation: Navigation }) => {
    const category = useSelector((state: RootState) => state.shop.categorySelected);
    const [keyword, setkeyword] = useState('');
    const { data, isLoading } = useGetProductsByCategoryQuery(category);
    const [productsFiltered, setProductsFiltered] = useState<Product[]>([]);

    useEffect(() => {
        if (data) {
            const dataArray = Object.values(data);
            const filteredProducts = dataArray.filter((p) => {
                const lowerCaseName = p.title.toLowerCase();
                const lowerCaseBand = p.band.toLowerCase();
                return lowerCaseName.includes(keyword.toLowerCase()) || lowerCaseBand.includes(keyword.toLowerCase());
            });
            setProductsFiltered(filteredProducts);
        }
    }, [data, keyword]);


    return (
        <View style={styles.container}>
            <Header title={category?.toUpperCase()} />
            <View style={styles.iconContainer}>
                <Feather name='arrow-left' size={30} onPress={() => navigation.goBack()} style={styles.backIcon} />
                <SearchInput onSearch={setkeyword} />
            </View>
            <View style={styles.listContainer}>
                {isLoading ? (
                    <Loading />
                ) : (
                    <FlatList data={productsFiltered} horizontal={true} showsHorizontalScrollIndicator={false} renderItem={({ item }) => (
                        <TouchableOpacity style={styles.cardContainer} onPress={() => {
                            navigation.navigate('Details', { product: item })
                        }}>
                            <View style={styles.card}>
                                <Image style={styles.image} source={{ uri: item.images }} />
                            </View>
                        </TouchableOpacity>)}
                        keyExtractor={item => item.id.toString()} />
                )}
            </View>
        </View>
    )
}

export default Products
