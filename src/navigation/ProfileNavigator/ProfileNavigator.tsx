import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Location, Login, Profile } from '../../screens';

const StackProfile = createNativeStackNavigator()

function ProfileNavigator() {
    return (
        <StackProfile.Navigator
            initialRouteName="Profile"
            screenOptions={() => ({
                headerShown: false,
            })}
        >
            <StackProfile.Screen name="Profile" component={Profile} />
            <StackProfile.Screen name="Location" component={Location} />
            <StackProfile.Screen name='Login' component={Login} />
        </StackProfile.Navigator>
    )
}

export default ProfileNavigator