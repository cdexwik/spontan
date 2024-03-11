import "react-native-gesture-handler";
import React, { useCallback } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import MainStack from "./src/stacks/MainStack";
import LoginStack from "./src/stacks/LoginStack";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { PaperProvider } from "react-native-paper";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isLoaded] = useFonts({
    "HelveticaNeue-Bold": require("./assets/fonts/HelveticaNeue-Bold.otf"),
    "HelveticaNeue-BoldItalic": require("./assets/fonts/HelveticaNeue-BoldItalic.otf"),
    "HelveticaNeue-Italic": require("./assets/fonts/HelveticaNeue-Italic.otf"),
    "HelveticaNeue-Light": require("./assets/fonts/HelveticaNeue-Light.otf"),
    "HelveticaNeue-LightItalic": require("./assets/fonts/HelveticaNeue-LightItalic.otf"),
    "HelveticaNeue-Medium": require("./assets/fonts/HelveticaNeue-Medium.otf"),
    "HelveticaNeue-MediumItalic": require("./assets/fonts/HelveticaNeue-MediumItalic.otf"),
    // prettier-ignore
    "HelveticaNeue-Normal": require("./assets/fonts/HelveticaNeue.otf"),
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
    <Provider store={store}>
      <PaperProvider>
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
      </PaperProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2B2B2B",
  },
});
