import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Register from "../screens/Register";
import ForgotPass from "../screens/ForgotPass";
import MainStack from "./MainStack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();
const LoginStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerStyle: { backgroundColor: "#2B2B2B" },
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerStyle: { backgroundColor: "#2B2B2B" },
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ForgotPass"
          component={ForgotPass}
          options={{
            headerStyle: { backgroundColor: "#2B2B2B" },
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MainStack"
          component={MainStack}
          options={{
            headerStyle: { backgroundColor: "#2B2B2B" },
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default LoginStack;
