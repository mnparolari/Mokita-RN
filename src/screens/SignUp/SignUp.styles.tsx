import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
        padding: 35,
    },
    loginContainer: {
        width: '100%',
        paddingHorizontal: 50,
        paddingVertical: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.quaternary,
        borderRadius: 50,
        fontFamily: 'EncodeLight'
    },
    input: {
        marginVertical: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 10,
        width: 230,
        height: 17,
        fontSize: 15, 
        fontFamily: 'EncodeRegular',
        textAlign: 'center'
    },
    button: {
        backgroundColor: colors.secondary,
        width: '100%',
        height: 50,
        borderRadius: 10,
        marginBottom: 15,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        marginTop: 45,
        color: '#fff',
        fontFamily: 'EncodeRegular', 
        fontSize: 15
    },
    buttonsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageLogo: {
        width: 300,
        height: 75
    },
    passwordContainer: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    inputPassword: {
        marginVertical: 15,
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 10,
        width: 185,
        height: 17,
        fontSize: 15, 
        fontFamily: 'EncodeRegular',
        textAlign: 'center'
    },
})

export default styles