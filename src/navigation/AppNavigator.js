import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../components/Home";
import Search from "../components/CardSearch";
import SetDetail from "../components/SetDetails";

import { View, Text } from "react-native";


const Stack = createNativeStackNavigator();

function LogoTitle() {
  return (
    <View>
      <Text>TGC Tracker</Text>
    </View>
  )
}

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#6a51ae",
          },
          headerTitle: (props) => <LogoTitle {...props} />,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SetDetail" component={SetDetail} />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator
