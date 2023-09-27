import fonts from './src/global/fonts';
import { useFonts } from 'expo-font';
import { BottomTabNavigator } from './src/navigation';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/store';

export default function App() {
  const [EncodeFonts] = useFonts(fonts)

  if (!EncodeFonts) {
    return null
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </Provider>
  )
}
