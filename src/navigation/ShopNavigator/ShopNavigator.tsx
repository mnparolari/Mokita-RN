import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Products, Details } from "../../screens";


const StackShop = createNativeStackNavigator();

function ShopNavigator() {
    return (
        <StackShop.Navigator initialRouteName='Home' screenOptions={() => ({
            headerShown: false,
        })}>
            <StackShop.Screen name='Home' component={Home} />
            <StackShop.Screen name='Products' component={Products} />
            <StackShop.Screen name='Details' component={Details} />
        </StackShop.Navigator>
    )
}

export default ShopNavigator