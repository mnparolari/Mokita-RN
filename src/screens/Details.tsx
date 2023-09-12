import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header/Header'

const Details = ({ product }: { product: string }) => {
    return (
        <>
            <Header title={product} />
            <Text>Details</Text>
        </>
    )
}

export default Details

const styles = StyleSheet.create({})