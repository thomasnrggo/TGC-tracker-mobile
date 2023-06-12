import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const TypeFilter = ({ selectedTypes, onSelectType }) => {
  const types = [
    "Colorless",
    "Darkness",
    "Dragon",
    "Fairy",
    "Fighting",
    "Fire",
    "Grass",
    "Lightning",
    "Metal",
    "Psychic",
    "Water",
  ];

  const handleTypePress = (type) => {
    const isSelected = selectedTypes.includes(type);
    if (isSelected) {
      onSelectType(
        selectedTypes.filter((selectedType) => selectedType !== type)
      );
    } else {
      onSelectType([...selectedTypes, type]);
    }
  };

  return (
    <View style={styles.container}>
      {types.map((type) => (
        <TouchableOpacity
          key={type}
          style={[
            styles.button,
            {
              backgroundColor: selectedTypes.includes(type)
                ? "#6a51ae"
                : "#ccc",
            },
          ]}
          onPress={() => handleTypePress(type)}
        >
          <Ionicons name="checkmark" size={20} color="#fff" />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 16,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    width: 32,
    height: 32,
    margin: 12,
  },
});

export default TypeFilter;
