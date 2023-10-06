import { Alert, Image, Pressable, Text, View } from 'react-native'
import styles from './SignUp.styles'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'
import { useSignUpMutation } from '../../services/authApi'
import { useDispatch } from 'react-redux'
import { setUser } from '../../features/Auth/AuthSlice'
import { AppDispatch } from '../../store'
import { Navigation } from '../../models'

const SignUp = ({ navigation }: { navigation: Navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [triggerSignUp, result] = useSignUpMutation();
    const dispatch = useDispatch<AppDispatch>();

    const onSubmit = () => {
        console.log(email, password, confirmPass, name, surname);
        triggerSignUp({
            email,
            password,
            name, 
            surname
        })
        if (result.isSuccess) {
            console.log(result)
            dispatch(setUser(result))
        } else if (result.error) {
            Alert.alert('Usuario ya creado', 'Ya existe un usuario creado en RPM con esta casilla de email. Debés iniciar sesión');
            navigation.navigate('Login');
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.loginContainer}>
                <Image style={styles.imageLogo} source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/npm-la-casa-del-vinilo.appspot.com/o/rpmIso.png?alt=media&token=e37284d4-b6a3-46c3-bdac-b5a0ae94dbb9&_gl=1*1ngkir3*_ga*MTQwMjQwODYyNC4xNjk0NDg2Njg1*_ga_CW55HF8NVT*MTY5NjYwOTQ3OC4yMS4xLjE2OTY2MDk1NDIuNTYuMC4w' }} />
                <Text style={styles.title}>Creá una cuenta:</Text>
                <TextInput style={styles.input} value={name} onChangeText={setName} placeholder='Nombre' />
                <TextInput style={styles.input} value={surname} onChangeText={setSurname} placeholder='Apellido' />
                <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder='Email' />
                <TextInput style={styles.input} value={password} onChangeText={setPassword} placeholder='Contraseña' />
                <TextInput style={styles.input} value={confirmPass} onChangeText={setConfirmPass} placeholder='Confirmar contraseña'/>
                <View style={styles.buttonsContainer}>
                    <Pressable onPress={onSubmit} style={styles.button}>
                        <Text style={{ padding: 9 }}>Crear cuenta</Text>
                    </Pressable>
                </View>
                <View style={[styles.buttonsContainer, { marginTop: 10 }]}>
                    <Text style={{ marginBottom: 5, color: '#fff', textAlign: 'center' }}>Si ya tenés una cuenta, sólo debes iniciar sesión:</Text>
                    <Pressable style={styles.button} onPress={() => navigation.navigate('Login')}>
                        <Text style={{ padding: 9 }}>Iniciar sesión</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default SignUp