import { StyleSheet, View } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import Map from "../components/Map";
import NavigateCard from "../components/NavigateCard";
import RideOptionCard from "../components/RideOptionCard";
import { createStackNavigator } from "@react-navigation/stack";

const MapScreen = () => {
  const Stack = createStackNavigator();

  return (
    <View style={{ flex: 1 }}>
      <View style={[tw`h-1/2`]}>
        <Map />
      </View>

      <View style={[tw`h-1/2`, { flex: 1 }]}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            style={[tw``]}
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RideOptionCard"
            style={[tw``]}
            component={RideOptionCard}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
