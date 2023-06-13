import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Button,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const windowWidth = Dimensions.get("window").width;

const HomeView = ({ TGCSets, navigation }) => {

  const renderSetItem = ({ item }) => {
    const handleSetPress = () => {
      navigation.navigate("SetDetail", { setId: item.id });
    };

    return (
      <TouchableOpacity
        style={styles.setItemContainer}
        onPress={handleSetPress}
      >
        <Image source={{ uri: item.images.logo }} style={styles.setImage} resizeMode="contain" />
        <Text style={styles.setName}>{item.name}</Text>
        <Text style={styles.setReleaseDate}>{item.releaseDate}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      <FlatList
        data={TGCSets}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={renderSetItem}
        contentContainerStyle={styles.setsContainer}
      />

      {/* <Button title="Clear data" onPress={() => AsyncStorage.clear()}>clear</Button> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  setsContainer: {
    flexGrow: 1,
  },
  setItemContainer: {
    flex: 1,
    margin: 8,
    padding: 16,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  setImage: {
    width: windowWidth * 0.3,
    height: windowWidth * 0.3,
  },
  setName: {
    fontSize: 12,
    fontWeight: "bold",
  },
  setReleaseDate: {
    fontSize: 14,
    color: "#666",
  },
});

export default HomeView;
