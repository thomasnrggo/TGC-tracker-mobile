import { useEffect, useState } from "react";
import { Alert } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { downloadAndSaveImage } from "../../utils/downloadAndSaveImage";
import { useModel as useCollectionModel } from "../../models/collectionsModel";

const useCardDetailViewModel = ({route, navigation}) => {
    const { card } = route.params;
    const [cardDetail, setCardDetail] = useState(null)
    const { getDetail, add, update } = useCollectionModel();

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

    useEffect(() => {
      getDetail(card.id)
      .then((res) => {
        setCardDetail({
          ...card,
          ...(res && {...res}),
        })
      })
    }, [])

    const handleAddOwned = () => {
        const cardWithUserData = {
          ...card,
          c_owned: true,
          c_favorite: false,
          c_wanted: false,
        }
        // TODO: add ability to update favorite && wish list
        update(cardWithUserData)
          .then((res) => {
            Alert.alert(`${!res.c_owned ? "Removed from collection" : "Added to collection"}`);
            setCardDetail(res)
          })
          .catch((err) => {
            console.error(err);
          });
    };

    const handleAddToWishlist = () => {
        Alert.alert("Card added to wishlist");
    };

  return {
    card: cardDetail,
    handleAddOwned,
    handleAddToWishlist,
  };
};

export default useCardDetailViewModel