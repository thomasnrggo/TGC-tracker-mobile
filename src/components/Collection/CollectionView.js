import React from "react";
import { View, Text, Button, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CollectionView = () => {
    return (
      <View>
        <Text>Collection</Text>
        <Button title="Clear data" onPress={() => {
            AsyncStorage.clear()
            Alert.alert("Storage Cleaned")
        }}>Clean Storage</Button>
      </View>
    );
}

export default CollectionView