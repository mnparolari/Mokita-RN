import { FlatList, SafeAreaView, View, Button} from 'react-native'
import React from 'react'
import dataCategories from '../../data/dataCategories'
import { CategoryItem } from './components'
import { Header } from '../../components'
import styles from './Home.style'
import { Navigation } from '../../models'


const Home = ({ navigation }: { navigation: Navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Header title='HOME' />
            <View>
                <FlatList data={dataCategories} keyExtractor={category => category} renderItem={({ item }) => <CategoryItem category={item} navigation={navigation} />} />
            </View>
        </SafeAreaView>
    )
}

export default Home