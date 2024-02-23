import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../screens/Profile";
import EditProfile from "../screens/EditProfile";

const Stack = createNativeStackNavigator();
const SettingsStack = () => {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerStyle: { backgroundColor: "#2B2B2B" },
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          headerStyle: { backgroundColor: "#2B2B2B" },
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default SettingsStack;
