import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../screens/Profile";
import Wrapper from "../screens/Wrapper";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();
const MainStack = () => {
  return (
    <NavigationContainer>
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
          name="Profile"
          component={Profile}
          options={{
            headerStyle: { backgroundColor: "#2B2B2B" },
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
