import { Image, Pressable, Text, View } from 'react-native';
import React, { useState } from 'react';
import styles from './Profile.style';
import { Header } from '../../components';
import * as ImagePicker from 'expo-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser, setCameraImage } from '../../features/Auth/AuthSlice';
import { RootState } from '../../store';
import { usePostProfileImageMutation } from '../../services/shopApi';
import { Navigation } from '../../models';
import Feather from '@expo/vector-icons/Feather';
import useModal from '../../hooks/useModal';
import { MyModal } from '../../components';
import { deleteSession } from '../../db';
import { clearUserCart } from '../../features/Cart/CartSlice';

const Profile = ({ navigation }: { navigation: Navigation }) => {
    const image = useSelector((state: RootState) => state.auth.imageCamera);
    const { localId } = useSelector((state: RootState) => state.auth);
    const [triggerSaveProfileImage, result] = usePostProfileImageMutation();
    const dispatch = useDispatch();
    const { modalVisible, toggleModal } = useModal();
    const [showConfirmImage, setShowConfirmImage] = useState(false)

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
                dispatch(setCameraImage(`data:image/jpeg;base64,${result.assets[0].base64}`))
                setShowConfirmImage(true)
            }
        }
    }

    const confirmImage = () => {
        triggerSaveProfileImage({ image, localId })
        if (result.isSuccess) {
            toggleModal();
            setShowConfirmImage(false)
        }
    }

    const logout = () => {
        dispatch(clearUser());
        dispatch(clearUserCart())
        deleteSession();
    }

    return (
        <View style={styles.container}>
            <Header title='PERFIL DE USUARIO' />
            <View style={styles.logOutContainer}>
                <Pressable style={styles.logOutIcon} onPress={logout}>
                    <Feather size={25} name='log-out' color='#fff' />
                </Pressable>
            </View>
            <View style={styles.imageContainer}>
                {image ? (
                    <Image source={{ uri: image }} resizeMode='cover' style={styles.image} />
                ) : (
                    <Image source={{ uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' }} resizeMode='cover' style={styles.image} />
                )}
                <View style={styles.buttonsCameraContainer}>
                    <Pressable style={styles.cameraButton} onPress={pickImage}>
                        <Feather size={25} name='camera' color='#fff' />
                    </Pressable>
                    {showConfirmImage &&
                        <Pressable style={styles.confirmButton} onPress={confirmImage}>
                            <Feather size={25} name='save' color='#fff' />
                        </Pressable>
                    }
                </View>
            </View>
            <View style={styles.dataContainer}>
                <View style={styles.personalDataContainer}>
                    <Text style={{ fontFamily: 'EncodeRegular', fontSize: 17, marginHorizontal: 15, textAlign: 'center' }}>Obtené y confirmá tu ubicación para Envíos a domicilio:</Text>
                </View>
                <View style={styles.addresContainer}>
                    <Pressable style={styles.addresButton} onPress={() => navigation.navigate('Location')}>
                        <Feather size={25} name='map-pin' color='#fff' />
                    </Pressable>
                </View>
            </View>
            <MyModal
                title="Imagen cargada correctamente"
                message="Esta será tu foto de perfil. Podés cambiarla cuando quieras presionando el ícono de la cámara."
                modalVisible={modalVisible}
                setModalVisible={toggleModal}
            />
        </View>
    )
}

export default Profile

