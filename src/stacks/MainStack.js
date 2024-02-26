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
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SettingsStack"
        component={SettingsStack}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
