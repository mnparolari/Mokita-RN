import { FlatList, View } from 'react-native'
import React from 'react'
import dataCategories from '../../data/dataCategories'
import { CategoryItem } from './components'
import { Header } from '../../components'
import styles from './Home.style'
import { CategorySelectedProps } from '../../models'


const Home = (props: CategorySelectedProps) => {
    return (
        <View style={styles.container}>
            <Header title='HOME' />
            <FlatList data={dataCategories} keyExtractor={category => category} renderItem={({ item }) => <CategoryItem category={item} setCategorySelected={props.setCategorySelected}/>} />
        </View>
    )
}

export default Home