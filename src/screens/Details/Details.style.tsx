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
    detail: {
        fontFamily: 'EncodeRegular',
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
        justifyContent: 'center', 
        alignItems: 'center', 
        marginHorizontal: 30
    },
    backIcon: {
        padding: 5
    }
})

export default styles