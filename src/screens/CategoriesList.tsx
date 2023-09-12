import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header/Header'

const CategoriesList = ({ category }: { category: string }) => {
    return (
        <>
            <Header title={category} />
            <View style={styles.container}>
                <Text>Categories List</Text>
            </View>
        </>
    )
}

export default CategoriesList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    }
})