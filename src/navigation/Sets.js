import * as React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SetsScreen from "../components/Sets";
import SetDetail from "../components/SetDetails";
import CardDetail from "../components/CardDetails";
import { TouchableOpacity, Text } from "react-native";
import Title from "../components/reusables/LogoTitle"

const Stack = createNativeStackNavigator();

const SetsStackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={({ navigation, route }) => ({
        headerStyle: {
          backgroundColor: "#6a51ae",
        },
        headerTitle: (props) => <Title {...props} />,
        headerTintColor: "white",
        ...(route.name !== "Home" && {
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
      <Stack.Screen name="Home" component={SetsScreen} />
      <Stack.Screen name="SetDetail" component={SetDetail} />
      <Stack.Screen name="CardDetail" component={CardDetail} />
    </Stack.Navigator>
  );
};

export default SetsStackScreen;
