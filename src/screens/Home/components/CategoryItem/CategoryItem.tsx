import { Pressable, Text, Image, View } from 'react-native';
import React from 'react';
import styles from './CategotyItem.style';
import { Navigation } from '../../../../models';
import { useDispatch } from 'react-redux';
import { setCategorySelected } from '../../../../features/Shop/ShopSlice';
import { AppDispatch } from '../../../../store';


const CategoryItem = ({ category, navigation }: { category: string, navigation: Navigation }) => {

    const dispatch = useDispatch<AppDispatch>()

    return (
        <Pressable onPress={() => {
            dispatch(setCategorySelected(category))
            navigation.navigate('Products', { category })
        }}>
            <View style={styles.cardContainer}>
                <Image style={{ width: 350, height: 350, borderRadius: 10, }} source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/npm-la-casa-del-vinilo.appspot.com/o/disco.jpg?alt=media&token=a37167dd-5ac6-48eb-99bb-96e1f696707c&_gl=1*1om11d8*_ga*MTQwMjQwODYyNC4xNjk0NDg2Njg1*_ga_CW55HF8NVT*MTY5NzExNTY5MS4yNi4xLjE2OTcxMTY5NzAuNDUuMC4w' }} />
                <Text style={styles.text}>{category.toUpperCase()}</Text>
            </View>
        </Pressable>
    )
}

export default CategoryItem

