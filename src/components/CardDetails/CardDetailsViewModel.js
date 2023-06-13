import { useEffect } from "react";
import { Button , Alert } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { downloadAndSaveImage } from "../../utils/downloadAndSaveImage";


const useCardDetailViewModel = ({route, navigation}) => {
    const { card } = route.params;

    useEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <Ionicons
              onPress={() => downloadAndSaveImage(card?.images.large)}
              color="white"
              name="cloud-download-outline"
              size={24}
            />
          ),
        });
    }, [navigation])

    const handleAddOwned = () => {
        Alert.alert("Card added as owned");
    };

    const handleAddToWishlist = () => {
        // Logic to add the card to the wishlist
        Alert.alert("Card added to wishlist");
    };

  return {
    card,
    handleAddOwned,
    handleAddToWishlist,
  };
};

export default useCardDetailViewModel