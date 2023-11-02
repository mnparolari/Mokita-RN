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
        alignItems: 'center',
        borderRadius: 5
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 5
    },
    titleContainer: {
        width: '100%',
        marginHorizontal: 10, 
        color: '#fff',
        paddingTop: 10,
        paddingBottom: 10,
    },
    btnContainer: {
        marginTop: 15,
    },
    deleteIcon: {
        backgroundColor: '#dc544c',
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        width: 30,
        height: 30,
        borderRadius: 5,
    }
})

export default styles