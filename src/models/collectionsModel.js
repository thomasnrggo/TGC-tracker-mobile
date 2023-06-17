import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useModel = () => {
  const [loading, setLoading] = useState(false)

  const getStorageCollection = async () => {
    const collection = await AsyncStorage.getItem("collection");
    const parsedData = JSON.parse(collection) || [];
    return parsedData
  }

  const getUserCollection = async () => {
    setLoading(true)
    try {
      return await getStorageCollection();
    } catch (error) {
      console.error("Error fetching TCG Collections:", error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const updateUserCollection = async (item) => {
    try {
      const collection = await getStorageCollection();
      const exist = collection?.find((card) => card.id === item.id);

      if (!exist) {
        collection.push(item);
        await AsyncStorage.setItem("collection", JSON.stringify(collection));
        return item;
      } else {
        const afterRemove = collection?.filter((card) => card.id !== item.id);
        await AsyncStorage.setItem("collection", JSON.stringify(afterRemove));
        return {
          ...item,
          c_owned: false,
        };
      }
    } catch (error) {
      console.error("Error updating TCG Collections:", error);
    }
  }

  const getCardUserDetail = async (id) => {
    try {
      const collection = await getStorageCollection();
      const card = collection?.find((card) => card.id === id);
      return card;
    } catch (error) {
      console.error("Error fetching TCG card:", error);
    }
  }

  return {
    loading,
    get: getUserCollection,
    getDetail: getCardUserDetail,
    update: updateUserCollection,
  };
};
