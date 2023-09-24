import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
const NavFavorites = () => {
  const data = [
    {
      id: "123",
      icon: "car",
      location: "Home",
      destination: "Lekki Phase 2, Lagos, Nigeria.",
    },
    {
      id: "12345",
      icon: "card",
      location: "Work",
      destination: "Lagos Island , Lagos, Nigeria.",
    },
  ];

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
      )}
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity style={[tw`flex-row items-center p-5`]}>
          <Icon
            name={icon}
            type="ionicon"
            color="white"
            size={18}
            style={[tw`p-3 rounded-full bg-gray-300 mr-4`]}
          />
          <View>
            <Text style={[tw`text-lg font-semibold`]}>{location}</Text>
            <Text style={[tw`text-gray-500`]}>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavorites;
