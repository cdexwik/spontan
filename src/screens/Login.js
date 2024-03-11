import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Checkbox from "expo-checkbox";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Snackbar } from "react-native-paper";

const Login = () => {
  const { navigate } = useNavigation();
  const [isChecked, setChecked] = useState(false); //Checkbox
  const [inputContainerWidth, setInputContainerWidth] = useState(0); //Width of sample activities
  const [showScrollView, setShowScrollView] = useState(false); //FUTURE: show ScrollView only if enough space available
  const [inputContainerMarginBottom, setInputContainerMarginBottom] =
    useState(24); //FUTURE: margin 0 if ScrollView is visible

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // For Sncakbar
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const onDismissSnackBar = () => setVisible(false);

  const handleAuthError = (error) => {
    // Check the error code to determine the type of error that occurred.
    const errorCode = error.code;

    // Show a user-friendly error message to the user.
    switch (errorCode) {
      case "auth/invalid-email":
        setSnackbarMessage("The email address you entered is invalid");
        setVisible(true);

        break;
      case "auth/wrong-password":
        setSnackbarMessage("The password you entered is incorrect");
        setVisible(true);
        break;
      default:
        setSnackbarMessage("An unexpected error occurred");
        setVisible(true);
        break;
    }
  };

  const handleSubmit = async () => {
    if (email && password) {
      await signInWithEmailAndPassword(auth, email, password).catch((error) => {
        handleAuthError(error);
      });
    } else {
      setSnackbarMessage("Can't login without email and password");
      setVisible(true);
    }
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#2B2B2B" }}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.spontan}>Spontan</Text>
            <Text style={styles.subTitle}>
              Embrace the{"\n"}spark of Spontaneity!
            </Text>
          </View>

          <View
            style={[
              styles.inputContainer,
              { marginBottom: inputContainerMarginBottom },
            ]}
            onLayout={(event) => {
              const { width } = event.nativeEvent.layout;
              setInputContainerWidth(width);
            }}
          >
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect={false}
              cursorColor="#D9D9D9"
              value={email}
              onChangeText={(value) => setEmail(value)}
            />
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              secureTextEntry={true}
              cursorColor="#D9D9D9"
              value={password}
              onChangeText={(value) => setPassword(value)}
            />
            <View style={styles.remeberMeContainer}>
              <Checkbox
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? "#afe8c4" : undefined}
              />
              <Text style={styles.remeberMeText}>Remember me</Text>
            </View>
            <Pressable style={styles.loginButton} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Log In</Text>
            </Pressable>
            <View style={styles.textBox}>
              <Text style={styles.normalText}>Don’t have an account?</Text>
              <Pressable
                onPress={() => {
                  navigate("Register");
                }}
              >
                <Text style={styles.registerText}>Register</Text>
              </Pressable>
            </View>
            <Pressable
              onPress={() => {
                navigate("ForgotPass");
              }}
            >
              <Text style={styles.forgotPasswordText}>Forgot password?</Text>
            </Pressable>
          </View>

          {showScrollView && (
            <ScrollView
              style={styles.scrollContainer}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {/*Maybe display only if the device is large enough*/}
              <View
                style={[
                  styles.sampleActivity,
                  { width: inputContainerWidth },
                  { marginLeft: 0 },
                ]}
              />
              <View
                style={[styles.sampleActivity, { width: inputContainerWidth }]}
              ></View>
              <View
                style={[styles.sampleActivity, { width: inputContainerWidth }]}
              ></View>
              <View
                style={[
                  styles.sampleActivity,
                  { width: inputContainerWidth },
                  { marginRight: 0 },
                ]}
              ></View>
            </ScrollView>
          )}
          <Snackbar
            visible={visible}
            onDismiss={onDismissSnackBar}
            action={{
              label: "Ok",
              onPress: () => {
                setSnackbarMessage("");
              },
            }}
          >
            {snackbarMessage}
          </Snackbar>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2B2B2B",
    alignItems: "center",
  },
  headerContainer: {
    alignItems: "center",
    marginTop: 20,
    maxWidth: 380,
  },
  spontan: {
    color: "#F8F8F8",
    fontSize: 42,
    textAlign: "center",
    fontFamily: "HelveticaNeue-BoldItalic",
  },
  subTitle: {
    color: "#F8F8F8",
    textAlign: "center",
    marginTop: 30,
    fontFamily: "HelveticaNeue-MediumItalic",
    fontSize: 28,
    lineHeight: 28,
  },
  inputContainer: {
    flex: 1,
    backgroundColor: "#3B3B3B",
    width: "92%",
    maxWidth: 480,
    minHeight: 360,
    marginTop: 32,
    flexDirection: "column",
    borderRadius: 8,
    alignItems: "stretch",
    padding: 20,
    elevation: 4,
    overflow: "hidden",
  },
  inputLabel: {
    color: "#F8F8F8",
    marginTop: 14,
    fontFamily: "HelveticaNeue-MediumItalic",
    fontSize: 17,
  },
  input: {
    height: 32,
    marginTop: 6,
    borderRadius: 8,
    backgroundColor: "#424242",
    fontFamily: "HelveticaNeue-LightItalic",
    color: "rgba(217, 217, 217, 0.8)",
    fontSize: 15,
    paddingLeft: 10,
  },
  remeberMeContainer: {
    flexDirection: "row",
    marginTop: 16,
    fontSize: 12,
    color: "#A0A0A0",
  },
  remeberMeText: {
    marginLeft: 8,
    fontSize: 14,
    color: "#A0A0A0",
    fontFamily: "HelveticaNeue-MediumItalic",
  },
  loginButton: {
    marginTop: 24,
    backgroundColor: "#afe8c4",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    alignSelf: "center",
    borderRadius: 16,
    elevation: 3,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "black",
    fontFamily: "HelveticaNeue-BoldItalic",
  },
  textBox: {
    flexDirection: "row",
    paddingTop: 8,
    alignSelf: "center",
  },
  normalText: {
    fontSize: 12,
    lineHeight: 21,
    letterSpacing: 0.25,
    fontFamily: "HelveticaNeue-BoldItalic",
    color: "rgba(160, 160, 160, 0.7)",
  },
  registerText: {
    paddingLeft: 4,
    fontSize: 12,
    lineHeight: 21,
    letterSpacing: 0.25,
    fontFamily: "HelveticaNeue-BoldItalic",
    color: "rgba(212, 240, 252, 0.7)",
  },
  forgotPasswordText: {
    fontSize: 12,
    lineHeight: 21,
    letterSpacing: 0.25,
    fontFamily: "HelveticaNeue-BoldItalic",
    color: "rgba(253, 211, 213, 0.7)",
    alignSelf: "center",
  },
  scrollContainer: {
    width: "92%",
    maxWidth: 480,
    height: 200,
    marginTop: 18,
    marginBottom: 24,
  },
  sampleActivity: {
    height: 300,
    marginHorizontal: 8,
    backgroundColor: "#3B3B3B",
    flexDirection: "column",
    borderRadius: 8,
    alignItems: "stretch",
    padding: 20,
    elevation: 4,
    overflow: "hidden",
  },
});

export default Login;
