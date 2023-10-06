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
        flex: 5,
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    detail: {
        fontFamily: 'EncodeRegular',
        marginHorizontal: 30,
        marginVertical: 5
    },
    description: {
        fontSize: 25,
        fontFamily: 'EncodeRegular',
        marginVertical: 5
    },
    price: {
        fontSize: 17,
        fontWeight: 'bold',
        fontFamily: 'EncodeRegular',
    },
    containerIcon: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center',
    },
    backIcon: {
        backgroundColor: colors.quaternary,
        color: '#fff',
        marginRight: '90%',
        marginVertical: 5,
        borderRadius: 5
    }
})

export default styles