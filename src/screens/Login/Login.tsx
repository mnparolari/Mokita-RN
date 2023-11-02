import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native';
import styles from './Login.styles';
import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { useLoginMutation } from '../../services/authApi';
import { useDispatch } from 'react-redux';
import { setUser } from '../../features/Auth/AuthSlice';
import { AppDispatch } from '../../store';
import { Navigation } from '../../models';
import { insertSession } from '../../db';
import useModal from '../../hooks/useModal';
import { MyModal } from '../../components';
import Feather from '@expo/vector-icons/Feather';



const Login = ({ navigation }: { navigation: Navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [triggerLogin, result] = useLoginMutation();
    const dispatch = useDispatch<AppDispatch>();
    const { modalVisible, toggleModal } = useModal();
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
        triggerLogin({
            email,
            password
        })
            .unwrap()
            .then(result => {
                dispatch(setUser(result));
                insertSession({
                    localId: result.localId,
                    email: result.email,
                    token: result.idToken,
                }).then(result => console.log(result)).catch(error => console.log(error.message))
            })
            .catch(error => {
                if (error.data.error.code === 400) {
                    toggleModal();
                    setTimeout(() => {
                        navigation.navigate('SignUp');
                    }, 4000);
                }
            });

    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <View style={styles.container}>
            <View style={styles.loginContainer}>
                <Image style={styles.imageLogo} source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/npm-la-casa-del-vinilo.appspot.com/o/rpmIso.png?alt=media&token=e37284d4-b6a3-46c3-bdac-b5a0ae94dbb9&_gl=1*1ngkir3*_ga*MTQwMjQwODYyNC4xNjk0NDg2Njg1*_ga_CW55HF8NVT*MTY5NjYwOTQ3OC4yMS4xLjE2OTY2MDk1NDIuNTYuMC4w' }} />
                <Text style={styles.title}>Logueate para comenzar:</Text>
                <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder='Email' />
                <View style={styles.passwordContainer}>
                    <TextInput style={styles.inputPassword} value={password} onChangeText={setPassword} placeholder='Contraseña' secureTextEntry={!showPassword} />
                    <TouchableOpacity onPress={togglePasswordVisibility} style={{ backgroundColor: '#DF9D72ff', borderRadius: 3, marginLeft: 5 }}>
                        <Feather name={showPassword ? 'eye' : 'eye-off'} size={24} color="#FFF" style={{ padding: 6 }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonsContainer}>
                    <Pressable onPress={handleLogin} style={styles.button}>
                        <Text style={{ padding: 9, fontFamily: 'EncodeMedium', fontSize: 15 }}>Iniciar sesión</Text>
                    </Pressable>
                </View>
                <View style={[styles.buttonsContainer, { marginTop: 10 }]}>
                    <Text style={{ marginBottom: 5, color: '#fff', fontFamily: 'EncodeRegular', fontSize: 15 }}>¿No tenes cuenta? Creá una:</Text>
                    <Pressable style={styles.button} onPress={() => navigation.navigate('SignUp')}>
                        <Text style={{ padding: 9, fontFamily: 'EncodeMedium', fontSize: 15 }}>Crear cuenta</Text>
                    </Pressable>
                </View>
            </View>
            <MyModal
                title="Usuario no creado"
                message="Todavía no existe una cuenta creada en RPM con esta casilla de Email. Debés crear una cuenta"
                modalVisible={modalVisible}
                setModalVisible={toggleModal}
            />
        </View>
    )
}

export default Login