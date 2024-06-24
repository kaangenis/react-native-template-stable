//Navigation Imports
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens
import Home from "./Home/Home";
import Splash from "./Splash/Splash";
import { STACK_SCREEN_TYPES } from "../Types/StackScreensType";
import { StackAnimationTypes } from "react-native-screens";

//Creating Stack Navigator
const Stack = createNativeStackNavigator();

//Routes
export default function Routes() {
    //Stack Screens
    //Add new screens here, and they will be automatically added to the stack
    const STACK_SCREENS: STACK_SCREEN_TYPES[] = [
        {
            name: 'Splash',
            component: Splash,
            animationType: 'fade'
        },
        {
            name: 'Home',
            component: Home,
            animationType: 'fade'
        },
    ]

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName='Splash'>
                {
                    STACK_SCREENS.map((screen, index) => (
                        <Stack.Screen
                            options={{ animation: screen.animationType as StackAnimationTypes }}
                            key={index}
                            name={screen.name}
                            component={screen.component} />
                    ))
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}