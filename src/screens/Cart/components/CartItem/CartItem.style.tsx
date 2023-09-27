import { StyleSheet } from 'react-native'
import { colors } from '../../../../constants/colors'

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    card: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    image: {
        width: 150,
        height: 150,
    },
    titleContainer: {
        marginRight: 20
    },
    btnContainer: {
        marginTop: 15
    },
    deleteIcon: {
        backgroundColor: '#dc544c',
        color: '#fff',
        padding: 5,
        alignItems: 'center'
    }
})

export default styles