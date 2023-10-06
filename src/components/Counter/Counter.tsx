import { Pressable, SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather'
import { colors } from '../../constants/colors';
import { CounterProps } from '../../models';
import styles from './Counter.style';
import useCounter from '../../hooks/useCounter';
import { useDispatch } from 'react-redux';
import { addItem } from '../../features/Cart/CartSlice';

const Counter: React.FC<CounterProps> = (props) => {
    const { counterValue, block, decrement, increment } = useCounter(props);
    const dispatch = useDispatch();
    const {product} = props;
    
    const handleAddToCart = () => {
        dispatch(addItem({...product, quantity: counterValue}))
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.counterContainer}>
                <Pressable style={({ pressed }) => [
                    styles.counterButtons,
                    pressed ? styles.pressedButton : {},
                ]}
                    onPress={decrement}
                    android_ripple={{ color: colors.primary, borderless: false }}>
                    <Feather size={24} name='minus-square' color={'#fff'} />
                </Pressable>
                <View style={styles.signsContainer}>
                    <Text>Cantidad:</Text>
                    <Text style={styles.signs}>{counterValue}</Text>
                </View>
                <Pressable style={({ pressed }) => [
                    styles.counterButtons,
                    block ? styles.disabledButton : {},
                    pressed ? styles.pressedButton : {},
                ]}
                    onPress={increment}
                    disabled={block}
                    android_ripple={{ color: colors.primary, borderless: false }}>
                    <Feather size={24} name='plus-square' color={'#fff'} />
                </Pressable>
            </View>
            <View style={styles.btnContainer}>
                <Pressable style={styles.btnConfirm} android_ripple={{ color: colors.primary, borderless: false }} onPress={handleAddToCart}>
                    <Feather size={24} name='shopping-cart' color={'#fff'} />
                    <Text style={styles.confirm}>Agregar</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default Counter


