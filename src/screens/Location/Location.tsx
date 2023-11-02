import { Pressable, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './Location.style';
import * as LocationExpo from 'expo-location';
import { Header, MapPreview } from '../../components';
import { Navigation } from '../../models';
import Feather from '@expo/vector-icons/Feather';
import useModal from '../../hooks/useModal';
import { MyModal } from '../../components';

const Location = ({ navigation }: { navigation: Navigation }) => {
    const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
    const [error, setError] = useState('');
    const { modalVisible, toggleModal } = useModal();

    useEffect(() => {
        (async () => {
            let { status } = await LocationExpo.requestForegroundPermissionsAsync()
            if (status !== 'granted') {
                setError('Los permisos de la ubicación fueron denegados')
                return
            }
            let location = await LocationExpo.getCurrentPositionAsync({})
            setLocation({
                latitude: location?.coords.latitude,
                longitude: location?.coords.longitude
            })
        })()
    }, []);

    const confirmUbication = () => {
        toggleModal();
        setTimeout(() => {
            navigation.goBack();
        }, 3000);
    }

    return (
        <View style={styles.container}>
            <Header title='TU UBICACIÓN' />
            <View style={styles.iconContainer}>
                <Feather name='arrow-left' size={30} onPress={() => navigation.goBack()} style={styles.backIcon} />
            </View>
            {location ? (
                <View style={styles.locationContainer}>
                    <MapPreview location={location} />
                    <Pressable style={styles.confirmButton} onPress={confirmUbication}>
                        <Feather size={25} name='check' color='#fff' />
                    </Pressable>
                </View>
            ) : (
                <View style={styles.locationContainer}>
                    <Text>
                        {error}
                    </Text>
                </View>
            )}
            <MyModal
                title="Ubicación confirmada"
                message="Ubicación guardada correctamente para recibir los envíos a domicilio."
                modalVisible={modalVisible}
                setModalVisible={toggleModal}
            />
        </View>
    )
}

export default Location