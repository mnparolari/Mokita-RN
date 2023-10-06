import { Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './Location.style'
import * as LocationExpo from 'expo-location'
import { MapPreview } from '../../components'

const Location = () => {
    const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
    const [error, setError] = useState('');

    useEffect(() => {
        (async () => {
            let {status} = await LocationExpo.requestForegroundPermissionsAsync()
            if(status !== 'granted') {
                setError('Los permisos de la ubicación fueron denegados')
                return
            } 
            let location = await LocationExpo.getCurrentPositionAsync({})
            setLocation({
                latitude: location?.coords.latitude,
                longitude: location?.coords.latitude
            })
        })()
    } , [])

return (
    <View style={styles.container}>
        {location ? (
            <View style={styles.locationContainer}>
                <Text>
                    Latitud: {location.latitude}, Longitud: {location.longitude}
                </Text>
                <MapPreview location={location}/>
            </View>
        ) : (
            <View style={styles.locationContainer}>
                <Text>
                    {error}
                </Text>
            </View>
        )}
    </View>
)
}

export default Location