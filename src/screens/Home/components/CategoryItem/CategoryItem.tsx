import { Pressable, Text } from 'react-native'
import React from 'react'
import { Card } from '../../../../components'
import styles from './CategotyItem.style'
import { Navigation } from '../../../../models'

const CategoryItem = ({ category, navigation }: {category: string, navigation: Navigation}) => {

    return (
        <Pressable onPress={() => navigation.navigate('Products', { category })}>
            <Card style={styles.cardContainer}>
                <Text style={styles.text}>{category.toUpperCase()}</Text>
            </Card>
        </Pressable>
    )
}

export default CategoryItem

