import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { SafeAreaView } from "react-native-safe-area-context";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";
import NavFavorites from "./NavFavorites";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "react-native-elements";
const NavigateCard = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <View style={[tw`bg-white py-4 flex-1 `]}>
      <Text style={[tw` text-lg py-3 text-center`]}>Good Morning Egbon</Text>
      <View style={[tw`border-t border-gray-200 flex-shrink`]}>
        <View>
          <GooglePlacesAutocomplete
            styles={toInputBoxStyles}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              );
              navigation.navigate("RideOptionCard");
            }}
            placeholder="where to"
            debounce={400}
            fetchDetails={true}
            enablePoweredByContainer={false}
            nearbyPlacesAPI="GooglePlacesSearch"
            minLength={2}
            query={{
              key: "AIzaSyDeVMKrgt5jYOVEINzuu_nrJ5oC2MXxlr0",
              language: "en",
            }}
          />
        </View>
        <NavFavorites />
      </View>
      <View
        style={[
          tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`,
        ]}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("RideOptionCard")}
          style={[
            tw`flex flex-row bg-black px-4 py-3 items-center justify-center  rounded-full w-24`,
            { gap: 5 },
          ]}
        >
          <Icon name="car" type="font-awesome" color="white" size={16} />
          <Text style={[tw`text-white text-center`]}>Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            tw`flex flex-row  px-4 py-3 border-black border items-center justify-center rounded-full w-24`,
            { gap: 5 },
          ]}
        >
          <Icon
            name="fast-food-outline"
            type="ionicon"
            color="black"
            size={16}
          />
          <Text style={[tw`text-black text-center`]}>Eats</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NavigateCard;
const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingBottom: 0,
    paddingHorizontal: 20,
  },
});
