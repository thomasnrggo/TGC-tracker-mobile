import { useState } from "react";
import api from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useModel = () => {
  const [loading, setLoading] = useState(false)

  const fetchSetCards = async (id) => {
    setLoading(true)
    try {
      const localSetCards = await AsyncStorage.getItem("tcgSetCards");
      const parsedData = JSON.parse(localSetCards) || [];
      const currentSet = parsedData?.find((set) => set.id === id);

      if(currentSet && currentSet.id) {
        return currentSet.data
      } else {
        const response = await api.get(`cards?q=set.id:${id}`);
        const setCards = {
          id: id,
          data: response?.data?.data,
        }
        parsedData.push(setCards);
        await AsyncStorage.setItem("tcgSetCards", JSON.stringify(parsedData));
        return response?.data?.data;
      }
    } catch (error) {
      console.log("Error fetching TCG sets:", error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    getBySetId: fetchSetCards,
    loading
  };
};
