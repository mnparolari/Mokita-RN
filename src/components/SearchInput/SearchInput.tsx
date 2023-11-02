import { Pressable, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import styles from './SearchInput.style';
import Feather from '@expo/vector-icons/Feather';
import { colors } from '../../constants/colors';

const SearchInput = ({ onSearch }: { onSearch: string | any }) => {
    const [value, setvalue] = useState('');

    const search = () => {
        onSearch(value)
    };

    const clearInput = () => {
        setvalue('');
        onSearch('')
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} value={value} onChangeText={setvalue} placeholder='Buscar producto' placeholderTextColor='#000'/>
            <Pressable onPress={search} style={styles.search}>
                <Feather name='search' size={30} color={colors.quaternary}/>
            </Pressable>
            <Pressable onPress={clearInput} style={styles.clear}>
                <Feather name='delete' size={30} color={colors.quaternary} />
            </Pressable>
        </View>
    )
}

export default SearchInput

