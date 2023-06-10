import React from "react";
import { View, Text, Button } from "react-native";

const CardSearch = ({ navigation }) => {
  return (
    <View>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />

      <Text>Search Card</Text>
    </View>
  );
};

export default CardSearch;
