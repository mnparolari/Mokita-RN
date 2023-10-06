import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartNavigator from "../CartNavigator/CartNavigator";
import ShopNavigator from "../ShopNavigator/ShopNavigator";
import OrdersNavigator from "../OrdersNavigator/OrdersNavigator";
import styles from './ButtomTabNavigator.style'
import Feather from '@expo/vector-icons/Feather'
import { colors } from "../../constants/colors";
import ProfileNavigator from "../ProfileNavigator/ProfileNavigator";

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
    return (
        <BottomTab.Navigator initialRouteName="Shop" screenOptions={() => ({
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBar
        })}>
            <BottomTab.Screen name='Shop' component={ShopNavigator} options={{
                tabBarIcon: ({ focused }) => (
                    <Feather size={24} name='shopping-bag' color={focused ? '#fff' : colors.secondary} />
                )
            }} />
            <BottomTab.Screen name='CartNav' component={CartNavigator} options={{
                tabBarIcon: ({ focused }) => (
                    <Feather size={24} name='shopping-cart' color={focused ? '#fff' : colors.secondary} />
                )
            }} />
            <BottomTab.Screen name='OrdersNav' component={OrdersNavigator} options={{
                tabBarIcon: ({ focused }) => (
                    <Feather size={24} name='list' color={focused ? '#fff' : colors.secondary} />
                )
            }} />
            <BottomTab.Screen name='ProfileNav' component={ProfileNavigator} options={{
                tabBarIcon: ({ focused }) => (
                    <Feather size={24} name='user' color={focused ? '#fff' : colors.secondary} />
                )
            }} />
        </BottomTab.Navigator>
    )
}

export default BottomTabNavigator