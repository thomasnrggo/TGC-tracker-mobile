import React from "react";
import HomeViewModel from "./HomeViewModel";
import HomeView from "./HomeView";

const HomeScreen = ({ navigation }) => {
  const { recentlyAddedCards = [], newTCGSets = [] } =
    HomeViewModel();

  return (
    <HomeView recentlyAddedCards={recentlyAddedCards} newTCGSets={newTCGSets} navigation={navigation} />
  );
};

export default HomeScreen;
