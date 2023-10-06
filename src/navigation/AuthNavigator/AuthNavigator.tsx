import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, SignUp } from "../../screens";

const StackAuth = createNativeStackNavigator();

function AuthNavigator() {
    return (
        <StackAuth.Navigator initialRouteName='Login' screenOptions={() => ({
            headerShown: false,
        })}>
            <StackAuth.Screen name='Login' component={Login} />
            <StackAuth.Screen name='SignUp' component={SignUp} />
        </StackAuth.Navigator>
    )
}

export default AuthNavigator