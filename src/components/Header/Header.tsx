import { Animated, Easing, Image, Text, View } from 'react-native'
import React from 'react'
import styles from './Header.style'
import RotatingVinyl from '../Animation/RotatingVinyl'

const Header = ({ title }: { title: string | undefined }) => {
    return (
        <View style={styles.container}>
            <RotatingVinyl />
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

export default Header

