import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon, Image } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import tw from "tailwind-react-native-classnames";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { selectTravelTimeInformation } from "../slices/navSlice";

const data = [
  {
    id: "Uber-X-123",
    title: "UberX",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "Uber-XL-145",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "Uber-LUX-789",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
];

const INCREASE_IN_CHARGE_RATE = 1.5;

const RideOptionCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const traveTimeInformation = useSelector(selectTravelTimeInformation);

  const handleBackPress = () => {
    navigation.goBack(); // Use the appropriate navigation function to go back
  };

  return (
    <SafeAreaView style={[tw`bg-white flex-grow`]}>
      <View style={[tw`py-0 flex-row justify-between items-center`]}>
        <TouchableOpacity style={[tw`pl-3`]} onPress={handleBackPress}>
          <Icon name="chevron-left" size={16} type="font-awesome" />
        </TouchableOpacity>
        <Text style={[tw`text-xl text-center`]}>
          {`Select a Ride - ${traveTimeInformation?.distance?.text}` + "les"}
        </Text>
        <View style={{ width: 16 }} />
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, multiplier, image }, item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={[
              tw` flex-row justify-between px-5 items-center ${
                id === selected?.id && "bg-gray-200"
              }`,
            ]}
          >
            <Image
              source={{ uri: image }}
              style={{ width: 80, height: 80, resizeMode: "contain" }}
            />
            <View>
              <Text style={[tw`text-xl font-semibold`]}>{title}</Text>
              <Text>{traveTimeInformation?.duration.text} Travel Time</Text>
            </View>
            <Text style={[tw`font-bold`, { fontSize: 15 }]}>
              {new Intl.NumberFormat("en-NG", {
                style: "currency",
                currency: "NGN",
              }).format(
                traveTimeInformation?.duration.value *
                  INCREASE_IN_CHARGE_RATE *
                  multiplier
              )}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View style={[tw`mt-auto border-t border-gray-200`]}>
        <TouchableOpacity
          disabled={!selected}
          style={[tw`bg-black ${!selected && "bg-gray-300"} py-3 mx-3`]}
        >
          <Text style={[tw`text-xl text-center text-white`]}>
            {selected?.title ? `${selected.title} selected` : "Choose a Ride"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionCard;
