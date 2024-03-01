import "react-native-gesture-handler";
import React, { useCallback } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import MainStack from "./src/stacks/MainStack";
import LoginStack from "./src/stacks/LoginStack";
import Friends from "./src/screens/Friends";
import Main from "./src/screens/Main";
import ActivityDetail from "./src/screens/ActivityDetail";
import Profile from "./src/screens/Profile";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isLoaded] = useFonts({
    "HelveticaNeue-Bold": require("./src/fonts/HelveticaNeue-Bold.otf"),
    "HelveticaNeue-BoldItalic": require("./src/fonts/HelveticaNeue-BoldItalic.otf"),
    "HelveticaNeue-Italic": require("./src/fonts/HelveticaNeue-Italic.otf"),
    "HelveticaNeue-Light": require("./src/fonts/HelveticaNeue-Light.otf"),
    "HelveticaNeue-LightItalic": require("./src/fonts/HelveticaNeue-LightItalic.otf"),
    "HelveticaNeue-Medium": require("./src/fonts/HelveticaNeue-Medium.otf"),
    "HelveticaNeue-MediumItalic": require("./src/fonts/HelveticaNeue-MediumItalic.otf"),
    // prettier-ignore
    "HelveticaNeue-Normal": require("./src/fonts/HelveticaNeue.otf"),
  });

  const handleOnLayout = useCallback(async () => {
    if (isLoaded) {
      await SplashScreen.hideAsync(); //hide the splashscreen
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={handleOnLayout}>
      <StatusBar backgroundColor="#2B2B2B" barStyle="default" />
      {/* <ActivityDetail
        tag={"tag"}
        firstName={"Name"}
        lastName={"Surname"}
        category={"category"}
        time={"09:37"}
        title={"Heading title from the form"}
        description={"I want to go to the gym tomorrow at 13:00"}
        activityTime={"Tomorrow 13:00 - 15:00"}
        place={"Fitness Fridhemsplan"}
        street={"Fridhemsplansroad 1000"}
        city={"100 10 Stockholm"}
        weekdays={"06:00 - 23:00"}
        saturday={"08:00 - 20:00"}
        sunday={"closed"}
      /> */}
      <LoginStack />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2B2B2B",
  },
});
