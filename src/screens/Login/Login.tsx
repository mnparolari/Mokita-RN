import { Alert, Image, Pressable, Text, View } from 'react-native'
import styles from './Login.styles'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'
import { useLoginMutation } from '../../services/authApi'
import { useDispatch } from 'react-redux'
import { setUser } from '../../features/Auth/AuthSlice'
import { AppDispatch } from '../../store'
import { Navigation } from '../../models'

const Login = ({ navigation }: { navigation: Navigation }) => {
    const [email, setEmail] = useState('mnparolari@gmail.com');
    const [password, setPassword] = useState('Test123');
    const [triggerLogin, result] = useLoginMutation();
    const dispatch = useDispatch<AppDispatch>();

    const onSubmit = () => {
        triggerLogin({
            email,
            password
        })
        if (result.isSuccess) {
            console.log(result)
            dispatch(setUser(result))
        } else if (result.error) {
            Alert.alert('Usuario no creado', 'Todavía no existe una cuenta creada en RPM con esta casilla de Email. Debés crear una cuenta');
            navigation.navigate('SignUp');
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.loginContainer}>
                <Image style={styles.imageLogo} source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/npm-la-casa-del-vinilo.appspot.com/o/rpmIso.png?alt=media&token=e37284d4-b6a3-46c3-bdac-b5a0ae94dbb9&_gl=1*1ngkir3*_ga*MTQwMjQwODYyNC4xNjk0NDg2Njg1*_ga_CW55HF8NVT*MTY5NjYwOTQ3OC4yMS4xLjE2OTY2MDk1NDIuNTYuMC4w' }} />
                <Text style={styles.title}>Logueate para comenzar:</Text>
                <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder='Email' />
                <TextInput style={styles.input} value={password} onChangeText={setPassword} placeholder='Contraseña' />
                <View style={styles.buttonsContainer}>
                    <Pressable onPress={onSubmit} style={styles.button}>
                        <Text style={{ padding: 9 }}>Iniciar sesión</Text>
                    </Pressable>
                </View>
                <View style={[styles.buttonsContainer, {marginTop: 10}]}>
                    <Text style={{ marginBottom: 5, color: '#fff' }}>¿No tenes cuenta? Creá una:</Text>
                    <Pressable style={styles.button} onPress={() => navigation.navigate('SignUp')}>
                        <Text style={{ padding: 9 }}>Crear cuenta</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default Login