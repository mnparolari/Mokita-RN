import React, { useState } from 'react';
import fonts from './src/global/fonts';
import { Home, Products } from './src/screens'
import { useFonts } from 'expo-font';


export default function App() {
  const [EncodeFonts] = useFonts(fonts)
  const [categorySelected, setCategorySelected] = useState('');

  if (!EncodeFonts) {
    return null
  }

  return categorySelected ? (
    <Products category={categorySelected} />
  ) : (
    <Home setCategorySelected={setCategorySelected}/>
  )
}
