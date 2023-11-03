import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: colors.background,
    },
    categoryContainer: {
        paddingTop: 40
    },
    socialContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    socialContent: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    socialIconContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    socialIcon: {
        paddingLeft: 20,
        paddingRight: 20,
        color: colors.quaternary
    },
    socials: {
        fontFamily: 'EncodeLight',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        color: '#fff'
    },
    informationContainer: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pressableInformation: {
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#DF9D72ff', 
        borderRadius: 8,
        paddingLeft: 20,
        paddingRight: 20,
    },
    textVersion: {
        fontFamily: 'EncodeLight', 
        textAlign: 'center', 
        marginBottom: 5
    }
})

export default styles