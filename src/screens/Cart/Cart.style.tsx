import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: colors.background,
    },
    completedBuy: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 35
    },
    notProductContainer: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',

    },
    notProductTitle: {
        fontSize: 21,
        color: '#e2382f',
        marginTop: 10
    }
})

export default styles