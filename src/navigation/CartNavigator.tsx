import { Cart } from '../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

function CartNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={() => ({
                headerShown: false,

            })}
        >
            <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
    )
}

export default CartNavigator