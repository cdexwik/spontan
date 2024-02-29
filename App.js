import "react-native-gesture-handler";
import React, { useCallback } from "react";
import { StyleSheet, View, StatusBar, Text } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import MainStack from "./src/stacks/MainStack";
import LoginStack from "./src/stacks/LoginStack";
import Friends from "./src/screens/Friends";
import Main from "./src/screens/Main";

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
      <Text style={styles.Bold}>Helvetica Neue Bold</Text>
      <Text style={styles.BoldItalic}>Helvetica Neue Bold Italic</Text>
      <Text style={styles.Italic}>Helvetica Neue Italic</Text>
      <Text style={styles.Light}>Helvetica Neue Light</Text>
      <Text style={styles.LightItalic}>Helvetica Neue Light Italic</Text>
      <Text style={styles.Medium}>Helvetica Neue Medium </Text>
      <Text style={styles.MediumItalic}>Helvetica Neue Medium Italic</Text>
      <Text style={styles.Normal}>Helvetica Neue Normal</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2B2B2B",
  },
  Bold: {
    fontFamily: "HelveticaNeue-Bold",
    fontSize: 20,
  },
  BoldItalic: {
    fontFamily: "HelveticaNeue-BoldItalic",
    fontSize: 20,
  },
  Italic: {
    fontFamily: "HelveticaNeue-Italic",
    fontSize: 20,
  },
  Light: {
    fontFamily: "HelveticaNeue-Light",
    fontSize: 20,
  },
  LightItalic: {
    fontFamily: "HelveticaNeue-LightItalic",
    fontSize: 20,
  },
  Medium: {
    fontFamily: "HelveticaNeue-Medium",
    fontSize: 20,
  },
  MediumItalic: {
    fontFamily: "HelveticaNeue-MediumItalic",
    fontSize: 20,
  },
  Normal: {
    fontFamily: "HelveticaNeue-Normal",
    fontSize: 20,
  },
});
