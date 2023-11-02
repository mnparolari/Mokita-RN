import { FlatList, SafeAreaView, View, Text, Linking, Pressable } from 'react-native';
import React, { useState } from 'react';
import { CategoryItem } from './components';
import { Header, Loading } from '../../components';
import styles from './Home.style';
import { Navigation } from '../../models';
import { useGetCategoriesQuery } from '../../services/shopApi';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Feather from '@expo/vector-icons/Feather';

const Home = ({ navigation }: { navigation: Navigation }) => {
    const { data, isLoading } = useGetCategoriesQuery();
    const user = useSelector((state: RootState) => state.auth.user);
    const [openTwitter, setOpenTwitter] = useState(false);
    const [openFacebook, setOpenFacebook] = useState(false);
    const [openInstragram, setOpenInstagram] = useState(false);
    const [openEmail, setOpenEmail] = useState(false);


    const closeAllIcons = () => {
        setOpenTwitter(false);
        setOpenFacebook(false);
        setOpenInstagram(false);
        setOpenEmail(false);
    };

    const handleOpenTwitter = () => {
        closeAllIcons();
        setOpenTwitter(!openTwitter);
    }

    const handleOpenFacebook = () => {
        closeAllIcons();
        setOpenFacebook(!openFacebook);
    }

    const handleOpenInstagram = () => {
        closeAllIcons();
        setOpenInstagram(!openInstragram);
    }

    const handleOpenEmail = () => {
        closeAllIcons();
        setOpenEmail(!openEmail);
    }

    const openWebTwitter = () => {
        const url = 'https://www.twitter.com';
        Linking.openURL(url)
            .catch((err) => console.error('Error al abrir la URL: ', err));
    };

    const openWebFacebook = () => {
        const url = 'https://www.facebook.com';
        Linking.openURL(url)
            .catch((err) => console.error('Error al abrir la URL: ', err));
    };

    const openWebInstagram = () => {
        const url = 'https://www.instagram.com';
        Linking.openURL(url)
            .catch((err) => console.error('Error al abrir la URL: ', err));
    };

    const openWebEmail = () => {
        const url = 'https://mail.google.com/mail/u/0/?fs=1&to=npmlacasadelvinilo@npm.com&tf=cm';
        Linking.openURL(url)
            .catch((err) => console.error('Error al abrir la URL: ', err));
    };

    return (
        <SafeAreaView style={styles.container}>
            <Header title={`BIENVENIDO/A ${user ? (user as string).toUpperCase() : 'Invitado'}`} />
            <View>
                {isLoading ? (
                    <Loading />
                ) : (
                    <FlatList data={data} horizontal={true} showsHorizontalScrollIndicator={false} keyExtractor={category => category} renderItem={({ item }) => <CategoryItem category={item} navigation={navigation} />} />
                )}
            </View>
            <View style={styles.socialContainer}>
                <View style={styles.socialContent}>
                    <View style={styles.socialIconContainer}>
                        <Feather name='twitter' size={30} onPress={handleOpenTwitter} style={styles.socialIcon} />
                    </View>
                    <View style={styles.socialIconContainer}>
                        <Feather name='facebook' size={30} onPress={handleOpenFacebook} style={styles.socialIcon} />
                    </View>
                    <View style={styles.socialIconContainer}>
                        <Feather name='instagram' size={30} onPress={handleOpenInstagram} style={styles.socialIcon} />
                    </View>
                    <View style={styles.socialIconContainer}>
                        <Feather name='mail' size={30} onPress={handleOpenEmail} style={styles.socialIcon} />
                    </View>
                </View>
                <View style={styles.informationContainer}>
                    <View style={styles.socialIconContainer}>
                        {openTwitter &&
                            <Pressable onPress={openWebTwitter} style={styles.pressableInformation}>
                                <Text style={styles.socials}>@npmlacasadelvinilo</Text>
                            </Pressable>
                        }
                    </View>
                    <View style={styles.socialIconContainer}>
                        {openFacebook &&
                            <Pressable onPress={openWebFacebook} style={styles.pressableInformation}>
                                <Text style={styles.socials}>NPM - La casa del vinilo</Text>
                            </Pressable>
                        }
                    </View>
                    <View style={styles.socialIconContainer}>
                        {openInstragram &&
                            <Pressable onPress={openWebInstagram} style={styles.pressableInformation}>
                                <Text style={styles.socials}>@npmlacasadelvinilo</Text>
                            </Pressable>
                        }
                    </View>
                    <View style={styles.socialIconContainer}>
                        {openEmail &&
                            <Pressable onPress={openWebEmail} style={styles.pressableInformation}>
                                <Text style={styles.socials}>npmlacasadelvinilo@npm.com</Text>
                            </Pressable>
                        }
                    </View>
                </View>
            </View>
            <Text style={styles.textVersion}>Versión 1.0.1p</Text>
        </SafeAreaView>
    )
}

export default Home