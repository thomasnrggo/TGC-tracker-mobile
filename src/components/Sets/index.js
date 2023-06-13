import React from "react";
import useSetsViewModel from "./SetsViewModel";
import SetsView from "./SetsView";

const HomeScreen = ({ navigation }) => {
  const props = useSetsViewModel();

  return <SetsView {...props} navigation={navigation} />;
};

export default HomeScreen;
