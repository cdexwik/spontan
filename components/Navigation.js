import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Main from "./Main";
import Activities from "./Activities";
import Friends from "./Friends";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Feather } from "@expo/vector-icons";

const Tab = createMaterialTopTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarLabel: ({ focused }) => {
          return (
            <View
              style={{
                flexDirection: "row",
                flexWrap: "nowrap",
                overflow: "visible",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: focused ? 23 : 24,
                  color: "#F8F8F8",
                  textAlign: "center",
                  fontFamily: "Helvetica Neue",
                  fontStyle: "italic",
                  fontWeight: focused ? "700" : "400",
                }}
              >
                {route.name}
              </Text>
            </View>
          );
        },
        tabBarStyle: {
          backgroundColor: "#2B2B2B",
        },
        headerStyle: {
          backgroundColor: "#2B2B2B",
        },
        tabBarAndroidRipple: { borderless: true },
        tabBarIndicatorStyle: { backgroundColor: "none" },
        tabBarPressColor: "transparent",
        //tabBarItemStyle: { flexDirection: "row", justifyContent: "flex-start" },
      })}
      /*screenOptions={{
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: {
          backgroundColor: "lightblue",
        },
        headerStyle: {
          backgroundColor: "lighblue",
        },
      }}*/
    >
      <Tab.Screen name="activities" component={Activities} options={{}} />
      <Tab.Screen name="main" component={Main} />
      <Tab.Screen name="friends" component={Friends} />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default Navigation;
