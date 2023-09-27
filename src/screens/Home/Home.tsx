import { FlatList, SafeAreaView, View } from 'react-native'
import React from 'react'
import { CategoryItem } from './components'
import { Header } from '../../components'
import styles from './Home.style'
import { Navigation } from '../../models';
import { useGetCategoriesQuery } from '../../services/shopApi'


const Home = ({ navigation }: { navigation: Navigation }) => {

    const { data, isLoading } = useGetCategoriesQuery()

    return (
        <SafeAreaView style={styles.container}>
            <Header title='LA CASA DEL VINILO' />
            <View>
                {!isLoading && (
                <FlatList data={data} keyExtractor={category => category} renderItem={({ item }) => <CategoryItem category={item} navigation={navigation} />} />
                )}
            </View>
        </SafeAreaView>
    )
}

export default Home