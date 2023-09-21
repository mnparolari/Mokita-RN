import { Pressable, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import styles from './SearchInput.style'
import AntDesign from '@expo/vector-icons/AntDesign'
import { colors } from '../../constants/colors'

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
            <TextInput style={styles.input} value={value} onChangeText={setvalue} placeholder='Buscar producto' placeholderTextColor='#fff'/>
            <Pressable onPress={search}>
                <AntDesign name='search1' size={25} color={colors.quaternary} />
            </Pressable>
            <Pressable onPress={clearInput}>
                <AntDesign name='closecircleo' size={25} color={colors.quaternary} />
            </Pressable>
        </View>
    )
}

export default SearchInput

