import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 10,
        width: 180,
        height: 40,
        fontSize: 15, 
        fontFamily: 'EncodeRegular',
        textAlign: 'center'
    },
    search: {
        marginHorizontal: 25
    },
    clear: {
        marginLeft: 5,
        marginRight: 10
    }
})

export default styles