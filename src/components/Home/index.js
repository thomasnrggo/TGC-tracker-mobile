import React from "react";
import useHomeViewModel from "./HomeViewModel";
import HomeView from "./HomeView";

const HomeScreen = ({ navigation }) => {
  const props = useHomeViewModel();

  return (
    <HomeView {...props} navigation={navigation} />
  );
};

export default HomeScreen;
