import * as MediaLibrary from "expo-media-library";
import { useEffect } from "react";
import { Button,Platform, Alert, PermissionsAndroid } from "react-native";


const useCardDetailViewModel = ({route, navigation}) => {
    const { card } = route.params;

    useEffect(() => {
        // TODO: fix this later, can't save image
        navigation.setOptions({
          headerRight: () => (
            <Button
              onPress={() => handleSaveImage()}
              title="Save image"
              color="white"
            />
          ),
        });
    }, [navigation])

    const handleAddOwned = () => {
        // Logic to add the card as owned
        Alert.alert("Card added as owned");
    };

    const handleAddToWishlist = () => {
        // Logic to add the card to the wishlist
        Alert.alert("Card added to wishlist");
    };

    const handleSaveImage = async () => {
      try {
        if (
          Platform.OS === "android" &&
          !(await PermissionsAndroid.check(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
          ))
        ) {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
          );
          if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
            Alert.alert("Permission denied");
            return;
          }
        }

        const { status } = await MediaLibrary.requestPermissionsAsync();
        console.log("status", status);

        if (status !== "granted") {
          Alert.alert("Permission denied");
          return;
        }

        console.log(card.images.large);
        const asset = await MediaLibrary.createAssetAsync(card.images.large);
        console.log(asset);

        // console.log("asset", asset);

        // if (asset) {
        //   await MediaLibrary.createAlbumAsync("Pokemon TGC", asset, false);
        //   Alert.alert("Image saved successfully");
        // } else {
        //   Alert.alert("Failed to save image int");
        // }

      } catch (error) {
        console.error(error)
        Alert.alert("Failed to save image out");
      }
    };

  return {
    card,
    handleAddOwned,
    handleAddToWishlist,
    handleSaveImage,
  };
};

export default useCardDetailViewModel