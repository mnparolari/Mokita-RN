import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
        padding: 35,
        gap: 20,
    },
    locationContainer: {
        width: 200,
        height: 200,
        borderWidth: 2,
        padding: 10,
        borderColor: colors.secondary,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default styles