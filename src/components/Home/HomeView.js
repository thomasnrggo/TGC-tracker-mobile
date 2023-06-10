import React from "react";
import { View, Text, FlatList, Button } from "react-native";

const HomeView = ({ recentlyAddedCards, newTCGSets, navigation }) => {
  return (
    <View>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Search")}
      />

      <Text>Recently Added Cards:</Text>
      <FlatList
        data={recentlyAddedCards}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            {/* Display other card details */}
          </View>
        )}
      />

      <Text>New TCG Sets:</Text>
      <FlatList
        data={newTCGSets}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            {/* Display other set details */}
          </View>
        )}
      />
    </View>
  );
};

export default HomeView;
