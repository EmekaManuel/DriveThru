import { SafeAreaView, StyleSheet, Image, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import NavFavorites from "../components/NavFavorites";

// const MY_API_KEY = process.env.EXPO_PUBLIC_API_KEY;

const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView>
      <View style={[tw`px-5`]}>
        <Image
          style={[tw``, { width: 100, height: 100, resizeMode: "contain" }]}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
      </View>
      <GooglePlacesAutocomplete
        styles={{
          container: {
            flex: 0,
          },
          textInput: {
            fontSize: 18,
          },
        }}
        onPress={(data, details = null) => {
          dispatch(
            setOrigin({
              location: details.geometry.location,
              description: data.description,
            })
          );
          dispatch(setDestination(null));
          // console.log(data);
          // console.log(details);
        }}
        fetchDetails={true}
        returnKeyType={"search"}
        onFail={(error) => console.error(error)}
        enablePoweredByContainer={false}
        listViewDisplayed={true}
        minLength={2}
        query={{
          key: "AIzaSyBRUIwgWmQLqhExn_CVoriT5csWk4yfdss",
          language: "en",
        }}
        placeholder="Where From"
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={200}
      />

      <NavOptions />
      <NavFavorites />
    </SafeAreaView>
  );
};

export default HomeScreen;
