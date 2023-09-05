import "react-native-gesture-handler";
import { KeyboardAvoidingView } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MapScreen from "./screens/MapScreen";
import EatScreen from "./screens/EatScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"} // Adjust behavior based on the platform
            keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0} // Adjust offset as needed
          >
            <Stack.Navigator
              screenOptions={{
                cardStyle: {},
              }}
            >
              <Stack.Screen
                name="HomeScreen"
                options={{ headerShown: false }}
                component={HomeScreen}
              />
              <Stack.Screen
                name="MapScreen"
                options={{ headerShown: false }}
                component={MapScreen}
              />
              <Stack.Screen
                name="EatScreen"
                options={{ headerShown: false }}
                component={EatScreen}
              />
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
