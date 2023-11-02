import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native';
import styles from './SignUp.styles';
import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { useSignUpMutation } from '../../services/authApi';
import { useDispatch } from 'react-redux';
import { setUser } from '../../features/Auth/AuthSlice';
import { AppDispatch } from '../../store';
import { Navigation } from '../../models';
import useModal from '../../hooks/useModal';
import { MyModal } from '../../components';
import Feather from '@expo/vector-icons/Feather';


const SignUp = ({ navigation }: { navigation: Navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [triggerSignUp, result] = useSignUpMutation();
    const dispatch = useDispatch<AppDispatch>();
    const { modalVisible, toggleModal } = useModal();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [alertTitle, setAlertTitle] = useState('');
    const [alertMessage, setAlertMessage] = useState('');

    const handleSignUp = () => {
        if (password === confirmPass) {
        triggerSignUp({
            email,
            password,
        })
            .unwrap()
            .then(result => {
                dispatch(setUser(result))
            })
            .catch(err => {
                setAlertTitle('Usuario ya creado');
                setAlertMessage('Ya existe un usuario creado en RPM con esta casilla de email. Debés iniciar sesión.');
                toggleModal();
                setTimeout(() => {
                    navigation.navigate('Login');
                }, 4000);
            })
    } else {
        setAlertTitle('Las contraseñas no coinciden');
        setAlertMessage('Por favor, asegurate de que ambas contraseñas sean coincidentes y correctas.');
        toggleModal();
    }
}

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <View style={styles.container}>
            <View style={styles.loginContainer}>
                <Image style={styles.imageLogo} source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/npm-la-casa-del-vinilo.appspot.com/o/rpmIso.png?alt=media&token=e37284d4-b6a3-46c3-bdac-b5a0ae94dbb9&_gl=1*1ngkir3*_ga*MTQwMjQwODYyNC4xNjk0NDg2Njg1*_ga_CW55HF8NVT*MTY5NjYwOTQ3OC4yMS4xLjE2OTY2MDk1NDIuNTYuMC4w' }} />
                <Text style={styles.title}>Creá una cuenta:</Text>
                <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder='Email' />
                <View style={styles.passwordContainer}>
                    <TextInput style={styles.inputPassword} value={password} onChangeText={setPassword} placeholder='Contraseña' secureTextEntry={!showPassword} />
                    <TouchableOpacity onPress={togglePasswordVisibility} style={{ backgroundColor: '#DF9D72ff', borderRadius: 3, marginLeft: 5 }}>
                        <Feather name={showPassword ? 'eye' : 'eye-off'} size={24} color="#FFF" style={{ padding: 6 }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.passwordContainer}>
                    <TextInput style={styles.inputPassword} value={confirmPass} onChangeText={setConfirmPass} placeholder='Confirmar contraseña' secureTextEntry={!showConfirmPassword} />
                    <TouchableOpacity onPress={toggleConfirmPasswordVisibility} style={{ backgroundColor: '#DF9D72ff', borderRadius: 3, marginLeft: 5 }}>
                        <Feather name={showConfirmPassword ? 'eye' : 'eye-off'} size={24} color="#FFF" style={{ padding: 6 }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonsContainer}>
                    <Pressable onPress={handleSignUp} style={styles.button}>
                        <Text style={{ padding: 9, fontFamily: 'EncodeMedium', fontSize: 15 }}>Crear cuenta</Text>
                    </Pressable>
                </View>
                <View style={[styles.buttonsContainer, { marginTop: 10 }]}>
                    <Text style={{ marginBottom: 5, color: '#fff', textAlign: 'center', fontFamily: 'EncodeRegular', fontSize: 15 }}>Si ya tenés una cuenta, sólo debes iniciar sesión:</Text>
                    <Pressable style={styles.button} onPress={() => navigation.navigate('Login')}>
                        <Text style={{ padding: 9, fontFamily: 'EncodeMedium', fontSize: 15 }}>Iniciar sesión</Text>
                    </Pressable>
                </View>
            </View>
            <MyModal
                title={alertTitle}
                message={alertMessage}
                modalVisible={modalVisible}
                setModalVisible={toggleModal}
            />
        </View>
    )
}

export default SignUp