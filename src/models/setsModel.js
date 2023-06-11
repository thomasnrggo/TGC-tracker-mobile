import api from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useModel = () => {

    const fetchTCGSets = async () => {
      try {
        const storedSets = await AsyncStorage.getItem("tcgSets");
        if (storedSets) {
          return JSON.parse(storedSets);
        } else {
          const response = await api.get("/sets");
          const sets = response.data;
          await AsyncStorage.setItem("tcgSets", JSON.stringify(sets));
          return sets;
        }
      } catch (error) {
        console.error("Error fetching TCG sets:", error);
        return null;
      }
    };

    const fetchTCGSetById = async (id) => {
      try {
        const storedSets = await AsyncStorage.getItem("tcgSets");
        const parsedData = JSON.parse(storedSets);
        const currentSet = parsedData?.data.find(set => set.id === id)

        if(currentSet && currentSet.id) {
          return currentSet;
        } else {
          const response = await api.get(`/sets?q=id:${id}`);
          return response?.data?.data[0];
        }
      } catch (error) {
        console.error("Error fetching TCG sets:", error);
        return null;
      }
    }

    return {
      get: fetchTCGSets,
      getById: fetchTCGSetById,
    };
};

