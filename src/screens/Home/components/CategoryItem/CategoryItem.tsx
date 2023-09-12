import { Pressable, Text } from 'react-native'
import React from 'react'
import { Card } from '../../../../components'
import styles from './CategotyItem.style'
import { CategoryItemProps} from '../../../../models'

const CategoryItem: React.FC<CategoryItemProps> = ({ category, setCategorySelected }) => {
    
    return (
        <Pressable onPress={() => setCategorySelected(category)}>
            <Card style={styles.cardContainer}>
                <Text style={styles.text}>{category.toUpperCase()}</Text>
            </Card>
        </Pressable>
    )
}

export default CategoryItem

