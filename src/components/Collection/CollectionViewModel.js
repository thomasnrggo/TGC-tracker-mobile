import { useEffect, useState } from "react";
import { useModel as useCollectionModel } from "../../models/collectionsModel";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useCollectionViewModel = (navigation, route) => {
  const { get } = useCollectionModel();
  const [collection, setCollection] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Ionicons
          onPress={() => handleRemoveStoredData()}
          color="white"
          name="trash-outline"
          size={24}
        />
      ),
    });

    const unsubscribe = navigation.addListener("focus", () => {
      get().then((res) => setCollection(res));
    });
    return unsubscribe;
  }, [navigation]);

  const handleCollapse = () => {
    setIsOpen(!isOpen)
  }

  const handleRemoveStoredData = async () => {
    Alert.alert(
      "Confirmation",
      "Are you sure you want to remove your collection?",
      [
        {
          text: "Cancel",
          style: "cancel",
          onPress: () => {
            // Perform any action when 'Cancel' is pressed
            console.log("Action canceled");
          },
        },
        {
          text: "OK",
          onPress: async () => {
            // Perform the desired action when 'OK' is pressed
            console.log("Action confirmed");
            // Store a value in AsyncStorage
            try {
              AsyncStorage.clear();
              Alert.alert("Storage Cleaned");
            } catch (error) {
              Alert.alert("Error, Could not clean storage");
              console.log("Error storing value:", error);
            }
          },
        },
      ],
      { cancelable: false }
    );

  }

  return {
    data: collection,
    navigation,
    route,
    isOpen,
    handleToggle: handleCollapse,
  };
};

export default useCollectionViewModel;
