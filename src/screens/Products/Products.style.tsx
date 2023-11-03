import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: colors.background,
    },
    listContainer: {
        fontFamily: 'EncodeLight',
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 15,
        paddingTop: 15,
        textAlign: 'center',
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 40
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
        height: 400,
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