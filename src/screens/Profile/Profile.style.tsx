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
        width: 250,
        height: 250
    },
    cameraButton: {
        backgroundColor: colors.quaternary,
        width: 150,
        height: 30,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    textButton: {
        textAlign: 'center',
        color: '#fff'
    },
    confirmButton: {
        backgroundColor: colors.quaternary,
        width: 200,
        height: 50,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    }
})

export default styles