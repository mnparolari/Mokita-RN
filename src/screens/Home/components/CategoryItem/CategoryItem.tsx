import { Pressable, Text } from 'react-native'
import React from 'react'
import { Card } from '../../../../components'
import styles from './CategotyItem.style'
import { Navigation } from '../../../../models'
import { useDispatch } from 'react-redux'
import { setCategorySelected } from '../../../../features/Shop/ShopSlice'
import { AppDispatch } from '../../../../store'

const CategoryItem = ({ category, navigation }: { category: string, navigation: Navigation }) => {

    const dispatch = useDispatch<AppDispatch>()

    return (
        <Pressable onPress={() => {
            dispatch(setCategorySelected(category))
            navigation.navigate('Products', { category })
        }}>
            <Card style={styles.cardContainer}>
                <Text style={styles.text}>{category.toUpperCase()}</Text>
            </Card>
        </Pressable>
    )
}

export default CategoryItem

