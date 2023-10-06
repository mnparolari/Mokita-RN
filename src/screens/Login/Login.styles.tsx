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
        width: '100%',
        height: 30,
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: colors.secondary,
        width: '100%',
        height: 50,
        borderRadius: 10,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        marginTop: 45,
        color: '#fff'
    },
    buttonsContainer: {
        justifyContent: 'center',
        alignItems: 'center', 
    },
    imageLogo: {
        width: 300,
        height: 75
    }
})

export default styles