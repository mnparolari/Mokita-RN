import { Animated, Easing, Image, Text, View } from 'react-native'
import React from 'react'
import styles from './Header.style'
import RotatingVinyl from '../Animation/RotatingVinyl'
import { colors } from '../../constants/colors'

const Header = ({ title }: { title: string | undefined }) => {
    return (
        <View style={styles.container}>
            <RotatingVinyl containerStyle={{
                width: 900,
                backgroundColor: colors.quaternary,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
            }}
                imageStyle={{
                    width: 150,
                    height: 150,
                }}
                imageSource='https://firebasestorage.googleapis.com/v0/b/npm-la-casa-del-vinilo.appspot.com/o/rpmLogo.png?alt=media&token=a4e5ad4e-9f9f-4334-821d-756ce415f42c' />
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

export default Header

