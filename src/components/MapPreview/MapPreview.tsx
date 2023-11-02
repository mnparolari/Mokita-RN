import { Image, View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './MapPreview.style';
import { googleAPI } from '../../firebase';
import Geocoder from 'react-native-geocoding';

Geocoder.init('AIzaSyCknOwCOGu493kLkrkj3ZcIKREXoZ7BQk0');

const MapPreview = ({ location }: { location: any }) => {
    const { latitude, longitude } = location;

    const mapPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C${latitude},${longitude}&key=${googleAPI.mapStatic}`;

    const [direction, setDirection] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const handleDirection = async (latitude: any, longitude: any) => {
            try {
                const response = await Geocoder.from(latitude, longitude);
                const results = response.results;
                if (results.length > 0) {
                    const address = results[0].formatted_address;
                    setDirection(address);
                } else {
                    setError('No se encontró una dirección válida para estas coordenadas.');
                }
            } catch (error) {
                console.log('Error al obtener la dirección:', error);
                setError('Error al obtener la dirección.');
            }
        };
        handleDirection(latitude, longitude);

    }, [latitude, longitude]);

    return (
        <View style={styles.container}>
            <Image style={styles.mapImage} source={{ uri: mapPreviewUrl }} />
            <View style={styles.directionContainer}>
                <Text style={styles.direction}>{direction}</Text>
            </View>
        </View>
    )
}

export default MapPreview