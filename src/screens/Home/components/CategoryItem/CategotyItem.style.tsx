import { StyleSheet } from 'react-native'
import { colors } from '../../../../constants/colors'

const styles = StyleSheet.create({
    cardContainer: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    text: {
        position: 'absolute',
        left: 30,
        bottom: 70,
        color: colors.secondary,
        fontWeight: '500',
        fontFamily: 'EncodeMedium',
        textAlign: 'center',
        fontSize: 21,
        letterSpacing: 2
    }
})

export default styles