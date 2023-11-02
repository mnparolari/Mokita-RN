import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: colors.background,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 150
    },
    cameraButton: {
        backgroundColor: colors.quaternary,
        width: 50,
        height: 40,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginHorizontal: 10
    },
    confirmButton: {
        backgroundColor: colors.quaternary,
        width: 50,
        height: 40,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginHorizontal: 10
    },
    addresButton: {
        backgroundColor: colors.quaternary,
        width: 70,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    addresContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
    },
    personalDataContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    dataContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        marginTop: 55,
        marginHorizontal: 50,
        paddingVertical: 10,
    },
    buttonsCameraContainer: {
        flexDirection: 'row'
    },
    logOutContainer: {
        alignItems: 'flex-end',
    },
    logOutIcon: {
        backgroundColor: colors.quaternary,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginHorizontal: 10
    },
    
})

export default styles