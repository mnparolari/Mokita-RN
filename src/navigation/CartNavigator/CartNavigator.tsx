import { Cart } from '../../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const StackCart = createNativeStackNavigator()

function CartNavigator() {
    return (
        <StackCart.Navigator
            initialRouteName="Cart"
            screenOptions={() => ({
                headerShown: false,

            })}
        >
            <StackCart.Screen name="Cart" component={Cart} />
        </StackCart.Navigator>
    )
}

export default CartNavigator