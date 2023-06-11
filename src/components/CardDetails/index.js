import React from "react";
import useCardDetailViewModel from "./CardDetailsViewModel";
import CardDetail from "./CardDetailsView";

const CardDetailScreen = ({ navigation, route }) => {
  const props = useCardDetailViewModel({ navigation, route });

  return <CardDetail {...props} />;
};

export default CardDetailScreen;
