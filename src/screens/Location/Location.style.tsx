import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: colors.background,
        gap: 20,
    },
    locationContainer: {
        alignItems: 'center',
    },
    iconContainer: { 
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    backIcon: {
        backgroundColor: colors.quaternary,
        color: '#fff',
        marginTop: 10,
        marginHorizontal: 10,
        borderRadius: 5
    },
    confirmButton: {
        backgroundColor: colors.quaternary,
        width: 70,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
})

export default styles