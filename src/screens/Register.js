import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";

const showAlert = () =>
  Alert.alert(
    "Check yout inbox",
    "Please check your inbox to finish the register process.",
    [
      {
        text: "Ok",
        style: "default",
      },
    ],
    {
      cancelable: true,
    }
  );

function Register() {
  const { navigate } = useNavigation();
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAwareScrollView
          style={{ flex: 1, backgroundColor: "#2B2B2B" }}
        >
          <View style={styles.container}>
            <View style={styles.headerContainer}>
              <Text style={styles.spontan}>Spontan</Text>
              <Text style={styles.subTitle}>
                Embrace the{"\n"}spark of Spontaneity!
              </Text>
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>First Name</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="words"
                autoCorrect={false}
                cursorColor="#D9D9D9"
              />
              <Text style={styles.inputLabel}>Last Name</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="words"
                autoCorrect={false}
                cursorColor="#D9D9D9"
              />
              <Text style={styles.inputLabel}>Tag</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                cursorColor="#D9D9D9"
              />
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect={false}
                cursorColor="#D9D9D9"
              />
              <Text style={styles.inputLabel}>Password</Text>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                cursorColor="#D9D9D9"
              />
              <Text style={styles.inputLabel}>Confirm Password</Text>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                cursorColor="#D9D9D9"
              />
              <Pressable
                style={styles.registerButton}
                onPress={() => {
                  showAlert();
                  navigate("Login");
                }}
              >
                <Text style={styles.buttonText}>Register</Text>
              </Pressable>
              <View style={styles.textBox}>
                <Text style={styles.normalText}>Already have an account?</Text>
                <Pressable
                  onPress={() => {
                    navigate("Login");
                  }}
                >
                  <Text style={styles.loginText}>Log In</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

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
    minHeight: 520,
    marginTop: 32,
    marginBottom: 24,
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
  registerButton: {
    marginTop: 24,
    backgroundColor: "#D4F0FC",
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
    padding: 8,
    alignSelf: "center",
  },
  normalText: {
    fontSize: 12,
    lineHeight: 21,
    letterSpacing: 0.25,
    fontFamily: "HelveticaNeue-BoldItalic",
    color: "rgba(160, 160, 160, 0.7)",
  },
  loginText: {
    paddingLeft: 4,
    fontSize: 12,
    lineHeight: 21,
    letterSpacing: 0.25,
    fontFamily: "HelveticaNeue-BoldItalic",
    color: "rgba(175, 232, 196, 0.7)",
  },
});

export default Register;
