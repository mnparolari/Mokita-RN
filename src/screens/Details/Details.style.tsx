import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: colors.background,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        borderRadius: 10,
    },
    detail: {
        fontFamily: 'EncodeRegular',
        marginHorizontal: 30,
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
        paddingTop: 10
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