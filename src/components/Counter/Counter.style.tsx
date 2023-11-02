import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        padding: 5
    },
    counterContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
    },
    counterButtons: {
        backgroundColor: colors.quaternary,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginHorizontal: 20
    },
    signsContainer: {
        width: '30%',
        height: 55,
        borderColor: colors.secondary,
        borderWidth: 2,
        borderRadius: 2,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    signs: {
        fontSize: 25,
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        padding: 10,
    },
    btnConfirm: {
        backgroundColor: colors.quaternary,
        width: '50%',
        height: 50,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        color: '#fff'
    },
    btnDisabled: {
        backgroundColor: 'gray',
        width: '50%',
        height: 50,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        color: '#fff'
    },
    confirm: {
        color: '#fff',
        fontFamily: 'EncodeMedium', 
        fontSize: 15
    },
    disabledButton: {
        backgroundColor: 'gray'
    },
    pressedButton: {
        backgroundColor: colors.quaternary,
    }
})

export default styles