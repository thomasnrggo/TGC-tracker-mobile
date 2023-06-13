import * as React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CardDetail from "../components/CardDetails";

import Cards from "../components/CardSearch";

import { TouchableOpacity, Text } from "react-native";
import Title from "../components/reusables/LogoTitle";

const Stack = createNativeStackNavigator();

const CardsStackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={({ navigation, route }) => ({
        headerStyle: {
          backgroundColor: "#6a51ae",
        },
        headerTitle: (props) => <Title {...props} />,
        headerTintColor: "white",
        ...(route.name !== "Cards" && {
          headerLeft: () => {
            const previousRoute =
              navigation.getState().routes[
                navigation.getState().routes.length - 2
              ].name;
            return (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons color="white" name="chevron-back-outline" size={24} />
                <Text style={{ color: "white", fontWeight: 600 }}>
                  {previousRoute}
                </Text>
              </TouchableOpacity>
            );
          },
        }),
      })}
    >
      <Stack.Screen name="Cards" component={Cards} />
      <Stack.Screen name="CardDetail" component={CardDetail} />
    </Stack.Navigator>
  );
};

export default CardsStackScreen;
