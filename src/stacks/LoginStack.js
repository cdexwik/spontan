import React from "react";
import { useSelector } from "react-redux";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Register from "../screens/Register";
import ForgotPass from "../screens/ForgotPass";
import MainStack from "./MainStack";
import { NavigationContainer } from "@react-navigation/native";

import useAuth from "../../customHooks/useAuth";

const Stack = createNativeStackNavigator();
const LoginStack = () => {
  // RootState Callback
  const { user } = useSelector((state) => state.user);

  useAuth();

  if (user) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainStack">
          <Stack.Screen
            name="MainStack"
            component={MainStack}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ForgotPass"
            component={ForgotPass}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

export default LoginStack;
