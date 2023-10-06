import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.quaternary,
    },
    image: {
        width: 300,
        height: 75,
        marginTop: 25
    }
});

export default styles