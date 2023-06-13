import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "react-native-vector-icons/Ionicons";
import generateTabBarIcon from "../utils/generateTabBarIcon";

import SetsStackScreen from "./Sets";
import CardsStackScreen from "./Cards";
import CollectionsStackScreen from "./Collections";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName = generateTabBarIcon(route.name);
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#6a51ae",
        })}
      >
        <Tab.Screen name="Sets" component={SetsStackScreen} />
        <Tab.Screen name="Cards" component={CardsStackScreen} />
        <Tab.Screen name="Collection" component={CollectionsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator
