import fonts from './src/global/fonts';
import { useFonts } from 'expo-font';
import StackNavigator from './src/navigation/StackNavigator';

export default function App() {
  const [EncodeFonts] = useFonts(fonts)

  if (!EncodeFonts) {
    return null
  }

  return (
    <StackNavigator/>
  )
}
