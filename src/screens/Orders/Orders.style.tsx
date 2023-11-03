import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: colors.background,
        fontFamily: 'EncodeRegular',
    },
    notOrdersContainer: {
        width: '100%',
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 40
    },
    notOrdersTitle: {
        fontSize: 21,
        color: '#000',
        marginTop: 30
    },
    ordersContainer: {
        paddingTop: 40
    },
    accordionContainer: {
        backgroundColor: '#DED7B3ff', 
        marginHorizontal: 5, 
        borderTopStartRadius: 5, 
        borderTopEndRadius: 5, 
        marginVertical: 5, 
        borderColor: '#2F7864ff', 
        borderWidth: 1,
    },
    accordionTextBold: {
        fontWeight: 'bold'
    },
    listItemAccordion: {
        backgroundColor: '#DED7B3ff', 
        marginHorizontal: 5, 
        borderBottomEndRadius: 5, 
        borderBottomStartRadius: 5, 
        marginVertical: 5, 
        borderColor: '#2F7864ff', 
        borderWidth: 1
    },
    listItemContainer: {
        flexDirection: 'column', 
        flex: 1, 
        width: '100%' 
    },
    listItemContainerContent: {
        flexDirection: 'row', 
        flex: 1, 
        width: '100%'
    },
    totalContainer: {
        marginTop: 'auto'
    }
})

export default styles