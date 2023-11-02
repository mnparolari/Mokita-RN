import { Pressable, SafeAreaView, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Feather from '@expo/vector-icons/Feather';
import { colors } from '../../constants/colors';
import { CounterProps } from '../../models';
import styles from './Counter.style';
import useCounter from '../../hooks/useCounter';
import { useDispatch } from 'react-redux';
import { addItem } from '../../features/Cart/CartSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Counter: React.FC<CounterProps> = (props) => {
    const { counterValue, block, decrement, increment } = useCounter(props);
    const dispatch = useDispatch();
    const { product } = props;
    const [isDisabled, setIsDisabled] = useState(false);
    const storageKey = `isDisabled_${product?.id}`;

    useEffect(() => {
        AsyncStorage.getItem(storageKey).then((value) => {
            if (value) {
                setIsDisabled(value === 'true');
            }
        });
    }, []);

    const handleAddToCart = () => {
        dispatch(addItem({ ...product, quantity: counterValue }))
        if (counterValue === product?.stock) {
            setIsDisabled(true);
            AsyncStorage.setItem(storageKey, 'true');
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.counterContainer}>
                <Pressable style={({ pressed }) => [
                    styles.counterButtons,
                    isDisabled ? styles.disabledButton : {},
                    pressed ? styles.pressedButton : {},
                ]}
                    onPress={decrement}
                    disabled={isDisabled}
                    android_ripple={{ color: colors.primary, borderless: false }}>
                    <Feather size={24} name='minus-square' color={'#fff'} />
                </Pressable>
                <View style={styles.signsContainer}>
                    <Text style={{ fontFamily: 'EncodeMedium', fontSize: 15 }}>Cantidad:</Text>
                    <Text style={styles.signs}>{counterValue}</Text>
                </View>
                <Pressable style={({ pressed }) => [
                    styles.counterButtons,
                    block ? styles.disabledButton : {},
                    isDisabled ? styles.disabledButton : {},
                    pressed ? styles.pressedButton : {},
                ]}
                    onPress={increment}
                    disabled={block || isDisabled}
                    android_ripple={{ color: colors.primary, borderless: false }}>
                    <Feather size={24} name='plus-square' color={'#fff'} />
                </Pressable>
            </View>
            <View style={styles.btnContainer}>
                <Pressable style={({ pressed }) => [
                    styles.btnConfirm,
                    isDisabled ? styles.disabledButton : {},
                    pressed ? styles.pressedButton : {},
                ]}
                    android_ripple={{ color: colors.primary, borderless: false }}
                    onPress={handleAddToCart}
                    disabled={isDisabled}>
                    <Feather size={24} name='shopping-cart' color={'#fff'} />
                    {!isDisabled ? (
                        <Text style={styles.confirm}>Agregar</Text>
                    ) : (
                        <Text style={styles.confirm}>Sin stock</Text>
                    )}
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default Counter


