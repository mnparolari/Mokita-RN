import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: colors.background,
        padding: 5,
    },
    listContainer: {
        flex: 1,
        fontFamily: 'EncodeLight',
        padding: 15,
        textAlign: 'center',
    },
    divider: {
        height: 2,
        backgroundColor: 'gray',
        marginVertical: 10
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    backIcon: {
        backgroundColor: colors.quaternary,
        color: '#fff',
        marginTop: 10,
        marginLeft: 35,
        borderRadius: 5
    },
    cardContainer: {
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    card: {
        width: 320,
        height: 320,
        marginHorizontal: 10,
        marginVertical: 10,
        justifyContent: 'center', 
        alignItems: 'center',
    }, 
    image: {
        width: 350,
        height: 350,
        borderRadius: 10
    }
})

export default styles