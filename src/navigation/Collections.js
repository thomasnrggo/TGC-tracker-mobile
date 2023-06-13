import * as React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { TouchableOpacity, Text } from "react-native";
import Title from "../components/reusables/LogoTitle";
import CollectionScreen from "../components/Collection";

const Stack = createNativeStackNavigator();

const CollectionsStackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={({ navigation, route }) => ({
        headerStyle: {
          backgroundColor: "#6a51ae",
        },
        headerTitle: (props) => <Title {...props} />,
        headerTintColor: "white",
        ...(route.name !== "Collection" && {
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
      <Stack.Screen name="Collection" component={CollectionScreen} />
    </Stack.Navigator>
  );
};

export default CollectionsStackScreen;
