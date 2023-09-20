import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: colors.background,
        padding: 5
    },
    listContainer: {
        flex: 1,
        fontFamily: 'EncodeLight',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        textAlign: 'center',
    },
    cardProduct: {
        flex: 1,
        width: 150,
        textAlign: 'center',
        padding: 5,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    divider: {
        height: 2,
        backgroundColor: 'gray',
        marginVertical: 10
    },
    containerIcon: {
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginHorizontal: 15
    },
    backIcon: {
        padding: 5
    },
    containerCard: {
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    card: {
        width: 100,
        height: 100,
        marginHorizontal: 10,
        marginVertical: 30
    }, 
    image: {
        width: 100,
        height: 100,
    }
})

export default styles