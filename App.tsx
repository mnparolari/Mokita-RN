import fonts from './src/global/fonts';
import { useFonts } from 'expo-font';
import MainNavigator from './src/navigation/MainNavigator/MainNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/store';
import { Splash } from './src/components';
import { useEffect, useState } from 'react';
import { init } from './src/db';
import AsyncStorage from '@react-native-async-storage/async-storage';

init()
  .then(() => console.log('BD inicializada'))
  .catch(err => console.log('DB error', err))

export default function App() {
  const [EncodeFonts] = useFonts(fonts)
  const [showMainNavigator, setShowMainNavigator] = useState(false);

  useEffect(() => {
    if (EncodeFonts) {
      setTimeout(() => {
        setShowMainNavigator(true);
      }, 3000);
    }
  }, [EncodeFonts]);

  if (!EncodeFonts || !showMainNavigator) {
    return <Splash />;
  }

  AsyncStorage.clear().then(() => {
    console.log('Almacenamiento en AsyncStorage restablecido');
  }).catch((error) => {
    console.error('Error al restablecer el almacenamiento en AsyncStorage', error);
  });

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  )
}
