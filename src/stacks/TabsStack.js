import React from "react";
import { View, Text } from "react-native";
import Main from "../screens/Main";
import Activities from "../screens/Activities";
import Friends from "../screens/Friends";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="main"
      backBehavior="initialRoute"
      screenOptions={({ route }) => ({
        tabBarLabel: ({ focused }) => {
          /*let justifyContentType;
          if (route.name === "friends") {
            justifyContentType = "flex-start";
          } else if (route.name === "main") {
            justifyContentType = "center";
          } else if (route.name === "activities") {
            justifyContentType = "flex-end";
          }*/
          return (
            <View
              style={{
                flexDirection: "row",
                flexWrap: "nowrap",
                overflow: "visible",
                alignItems: "center",
                justifyContent: "center",
                // justifyContent: JSON.stringify({ justifyContentType }),
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
          elevation: 0,
        },
        headerStyle: {
          backgroundColor: "#2B2B2B",
        },
        tabBarAndroidRipple: { borderless: true },
        tabBarIndicatorStyle: { backgroundColor: "none" },
        tabBarPressColor: "transparent",
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
      <Tab.Screen name="friends" component={Friends} />
      <Tab.Screen name="main" component={Main} />
      <Tab.Screen name="activities" component={Activities} />
    </Tab.Navigator>
  );
};

export default Tabs;
