import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: colors.background,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        flex: 1,
        width: '90%',
        height: '90%',
        resizeMode: 'contain'
    },
    title: {
        fontSize: 25,
        fontFamily: 'EncodeRegular',

    },
    description: {
        fontFamily: 'EncodeRegular',
    },
    price: {
        fontSize: 17,
        fontWeight: 'bold',

        fontFamily: 'EncodeRegular',
    }
})

export default styles