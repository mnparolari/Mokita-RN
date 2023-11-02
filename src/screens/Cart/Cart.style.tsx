import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: colors.background,
        fontFamily: 'EncodeRegular'
    },
    completedBuy: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 25
    },
    buyButton: {
        width: 100,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.quaternary,
        padding: 10,
        borderRadius: 5,
        marginVertical: 10
    },
    notProductContainer: {
        width: '100%',
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    notProductTitle: {
        fontSize: 21,
        color: '#000',
        marginTop: 30
    },
    totalContainer: {
        marginVertical: 10
    },
    total: {
        fontSize: 25,
        fontFamily: 'EncodeRegular'
    }
})

export default styles