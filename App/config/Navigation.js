import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";
import { Entypo } from '@expo/vector-icons'
import Home from '../screens/Home'
import Options from '../screens/Options'
import CurrencyList from '../screens/CurrencyList'
import colors from "../constants/colors";
import { ConversionContextProvider } from "../util/ConversionContext";

const MainStack = createStackNavigator()
const MainStackScreen = () => {
    return (
        <MainStack.Navigator initialRouteName="Home">
            <MainStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <MainStack.Screen name="Options" component={Options} />
        </MainStack.Navigator>
    )
}

const ModalStack = createStackNavigator()
const ModalStackScreen = () => {
    return (
        <ModalStack.Navigator screenOptions={{ presentation: 'modal' }}>
            <ModalStack.Screen name="Main" component={MainStackScreen} options={{ headerShown: false }} />
            <ModalStack.Screen name="CurrencyList" component={CurrencyList} options={({ route, navigation }) => {
                return {
                    title: route.params && route.params.title,
                    headerLeft: null,
                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.pop()} style={{ paddingHorizontal: 10 }}>
                            <Entypo name='cross' size={30} color={colors.blue} />
                        </TouchableOpacity>
                    )
                }
            }} />
        </ModalStack.Navigator>
    )
}

export default () => {
    return (
        <NavigationContainer>
            <ConversionContextProvider>
                <ModalStackScreen />
            </ConversionContextProvider>
        </NavigationContainer>
    )
}