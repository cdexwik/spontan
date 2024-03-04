import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../config/firebase";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Register from "../screens/Register";
import ForgotPass from "../screens/ForgotPass";
import MainStack from "./MainStack";
import { NavigationContainer } from "@react-navigation/native";
import {
  setCurrentUser,
  setLoggedIn,
  fetchUserData,
} from "../../redux/slices/user";

import { useDispatch } from "react-redux";

const Stack = createNativeStackNavigator();

const LoginStack = () => {
  const dispatch = useDispatch();
  const { currentUserData, currentUser, isLoggedIn } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        //console.log("User authenticated:", user.uid);
        dispatch(setLoggedIn(true));
        dispatch(setCurrentUser(user.uid));
        try {
          await dispatch(fetchUserData(user.uid));
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        console.log("User not authenticated");
        dispatch(setLoggedIn(false));
        dispatch(setCurrentUser(null));
      }
    });

    // Clean up subscription
    return () => unsubscribe();
  }, [dispatch]);

  console.log("isLoggedIn:", isLoggedIn);
  console.log("currentUser:", currentUser);
  console.log("currentUserData:", currentUserData);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isLoggedIn ? "MainStack" : "Login"}>
        {isLoggedIn ? (
          <Stack.Screen
            name="MainStack"
            component={MainStack}
            options={{ headerShown: false }}
          />
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgotPass"
              component={ForgotPass}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default LoginStack;

/*
const Stack = createNativeStackNavigator();
const LoginStack = () => {
  // RootState Callback
  const { currentUser } = useSelector((state) => state.user);
  const { isLoggedIn } = useSelector((state) => state.user);
  const { currentUserData } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  onAuthStateChanged(auth, (user) => {
    //console.log("user from authStateChanged: ", user);
    if (user) {
      dispatch(setLoggedIn(true));
      dispatch(setCurrentUser(user.uid));
      fetchUserData(currentUser);

      console.log("currentUser ", currentUser, " isLoggedIn ", isLoggedIn);
      console.log("currentUserData", currentUserData);
    } else {
      dispatch(setLoggedIn(false));
      setCurrentUser(null);
      console.log("currentUser ", currentUser, " isLoggedIn ", isLoggedIn);
    }
  });

  if (isLoggedIn) {
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
*/
