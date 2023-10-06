import { Alert, Image, Pressable, Text, View } from 'react-native'
import React from 'react'
import styles from './Profile.style'
import { Header } from '../../components'
import * as ImagePicker from 'expo-image-picker'
import { useDispatch, useSelector } from 'react-redux'
import { setCameraImage } from '../../features/Auth/AuthSlice'
import { RootState } from '../../store'
import { usePostProfileImageMutation } from '../../services/shopApi'
import { Navigation } from '../../models'

const Profile = ({navigation}: {navigation: Navigation}) => {
    const image = useSelector((state: RootState) => state.auth.imageCamera);
    const { localId } = useSelector((state: RootState) => state.auth);
    const [triggerSaveProfileImage, result] = usePostProfileImageMutation()
    const name = useSelector((state: RootState) => state.auth.name);
    const surname = useSelector((state: RootState) => state.auth.surname);
    const user = useSelector((state: RootState) => state.auth.user);
    const dispatch = useDispatch();

    const verifyCameraPermissions = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync()
        if (!granted) {
            return false
        }
        return true
    }

    const pickImage = async () => {
        const isCameraOk = await verifyCameraPermissions()
        if (isCameraOk) {
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [9, 16],
                base64: true,
                quality: 0.4,
            })
            if (!result.canceled) {
                console.log(result.assets)
                dispatch(setCameraImage(`data:image/jpeg;base64,${result.assets[0].base64}`))
            }
        }
    }

    const confirmImage = () => {
        triggerSaveProfileImage({ image, localId })
        if (result.isSuccess) {
            Alert.alert('Imagen cargada correctamente');
        }
        console.log(result)
    }

    return (
        <View style={styles.container}>
            <Header title='PERFIL' />
            <View style={styles.imageContainer}>
                {image ? (
                    <Image source={{ uri: image }} resizeMode='cover' style={styles.image} />
                ) : (
                    <Image source={{ uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' }} resizeMode='cover' style={styles.image} />
                )}
                <Pressable style={styles.cameraButton} onPress={pickImage}>
                    <Text style={styles.textButton}>Tomar foto de perfil</Text>
                </Pressable>
                <Pressable style={styles.confirmButton} onPress={confirmImage}>
                    <Text style={styles.textButton}>Confirmar</Text>
                </Pressable>
                <Pressable style={styles.confirmButton} onPress={() => navigation.navigate('Location')}>
                    <Text style={styles.textButton}>Mis direcciones</Text>
                </Pressable>
            </View>
            <View>
                <Text>Nombre: {name}</Text>
                <Text>Apellido: {surname}</Text>
                <Text>Email: {user}</Text>
            </View>
        </View>
    )
}

export default Profile

