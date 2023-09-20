import {StyleSheet} from 'react-native'
import { colors } from '../../constants/colors'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10
    },
    input: {
        color: '#fff',
        backgroundColor: colors.secondary,
        borderRadius: 8,
        padding: 10,
        borderWidth: 1,
        borderColor: colors.secondary,
        width: '80%',
        fontSize: 20, 
        fontFamily: 'EncodeRegular'
    }
})

export default styles