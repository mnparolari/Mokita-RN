import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
        width: '100%',
        padding: 40
    },
    text: {
        fontSize: 25,
        fontFamily: 'EncodeLight',
        textAlign: 'center'
    }
})

export default styles