import { Image, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './Splash.style';
import RotatingVinyl from '../Animation/RotatingVinyl';


const Splash = () => {
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShowSplash(false);
        }, 3000);
    }, []);

    if (showSplash) {
        return (
            <View style={styles.container}>
                <RotatingVinyl containerStyle={{ justifyContent: 'center', alignItems: 'center' }}
                    imageStyle={{ width: 200, height: 200 }}
                    imageSource='https://firebasestorage.googleapis.com/v0/b/npm-la-casa-del-vinilo.appspot.com/o/rpmLogo.png?alt=media&token=a4e5ad4e-9f9f-4334-821d-756ce415f42c' />
                <Image style={styles.image} source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/npm-la-casa-del-vinilo.appspot.com/o/rpmIso.png?alt=media&token=e37284d4-b6a3-46c3-bdac-b5a0ae94dbb9&_gl=1*1cvww75*_ga*MTQwMjQwODYyNC4xNjk0NDg2Njg1*_ga_CW55HF8NVT*MTY5NjQ3ODYyOC4xOC4xLjE2OTY0Nzg2NDMuNDUuMC4w' }} />
            </View>
        );
    } else {
        return null;
    }
};

export default Splash

