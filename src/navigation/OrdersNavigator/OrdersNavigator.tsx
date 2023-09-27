import { Orders } from '../../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const StackOrders = createNativeStackNavigator()

function OrdersNavigator() {
    return (
        <StackOrders.Navigator
            initialRouteName="Orders"
            screenOptions={() => ({
                headerShown: false,

            })}
        >
            <StackOrders.Screen name="Orders" component={Orders} />
        </StackOrders.Navigator>
    )
}

export default OrdersNavigator