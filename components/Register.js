import React from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

function Register() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAwareScrollView>
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
              <Pressable style={styles.registerButton}>
                <Text style={styles.buttonText}>Register</Text>
              </Pressable>
              <View style={styles.textBox}>
                <Text style={styles.normalText}>Already have an account?</Text>
                <Text style={styles.loginText}>Login</Text>
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
    // borderWidth: 2, //debug
    // borderColor: "white", //debug
  },
  headerContainer: {
    alignItems: "center",
    marginTop: 30,
    maxWidth: 380,
    // borderWidth: 2, //debug
    // borderColor: "white", //debug
  },
  spontan: {
    color: "#F8F8F8",
    fontSize: 42,
    textAlign: "center",
    fontFamily: "Helvetica Neue",
    fontStyle: "italic",
    fontWeight: "700",
  },
  subTitle: {
    color: "#F8F8F8",
    textAlign: "center",
    marginTop: 40,
    fontFamily: "Helvetica Neue",
    fontStyle: "italic",
    fontWeight: "400",
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
    marginTop: 20,
    fontFamily: "Helvetica Neue",
    fontStyle: "italic",
    fontSize: 17,
  },
  input: {
    height: 32,
    marginTop: 8,
    borderRadius: 8,
    backgroundColor: "#424242",
    fontFamily: "Helvetica Neue",
    color: "#D9D9D9",
    fontStyle: "italic",
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
    fontFamily: "Helvetica Neue",
    fontStyle: "italic",
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
    fontFamily: "Helvetica Neue",
    fontStyle: "italic",
  },
  textBox: {
    flexDirection: "row",
    padding: 8,
    alignSelf: "center",
  },
  normalText: {
    fontSize: 12,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    fontFamily: "Helvetica Neue",
    fontStyle: "italic",
    color: "#A0A0A0",
  },
  loginText: {
    paddingLeft: 4,
    fontSize: 12,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    fontFamily: "Helvetica Neue",
    fontStyle: "italic",
    color: "#afe8c4",
  },
});

export default Register;
