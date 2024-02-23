import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Wrapper from "../screens/Wrapper";
import SettingsStack from "./SettingsStack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();
const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="Wrapper">
      <Stack.Screen
        name="Wrapper"
        component={Wrapper}
        options={{
          headerStyle: { backgroundColor: "#2B2B2B" },
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SettingsStack"
        component={SettingsStack}
        options={{
          headerStyle: { backgroundColor: "#2B2B2B" },
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
