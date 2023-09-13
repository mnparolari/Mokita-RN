import { StyleSheet } from 'react-native'
import { colors } from '../colors'

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
        width: '100%',
        padding: 50
    },
    text: {
        fontSize: 25,
        fontFamily: 'EncodeLight'
    }
})

export default styles