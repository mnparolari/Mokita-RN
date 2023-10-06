import fonts from './src/global/fonts';
import { useFonts } from 'expo-font';
import MainNavigator from './src/navigation/MainNavigator/MainNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/store';
import { Splash } from './src/components';
import { useEffect, useState } from 'react';

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

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  )
}
