import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Pressable } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Checkbox from "expo-checkbox";

const Login = () => {
  const [isChecked, setChecked] = useState(false);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Spontan</Text>
            <Text style={styles.subTitle}>
              Embrace the{"\n"}spark of Spontaneity!
            </Text>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Tag or email</Text>
            <TextInput
              style={styles.emailInput}
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect={false}
              cursorColor="#D9D9D9"
            />
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              style={styles.passwordInput}
              secureTextEntry={true}
              cursorColor="#D9D9D9"
            />
            <View style={styles.remeberMeContainer}>
              <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? "#afe8c4" : undefined}
              />
              <Text style={styles.remeberMeText}>Remember me</Text>
            </View>
            <View style={styles.accountLinkContainer}>
              <Pressable style={styles.loginButton}>
                <Text style={styles.loginText}>Login</Text>
              </Pressable>
              <View style={styles.textBox}>
                <Text style={styles.accountText}>Don’t have an account? </Text>
                <Text style={styles.registerText}>Register</Text>
              </View>
              <View>
                <Text style={styles.passwordText}>Forgot password?</Text>
              </View>
            </View>
          </View>
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
  headerText: {
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
    height: "90%",
    maxWidth: 480,
    marginTop: 32,
    marginBottom: 24,
    flexDirection: "column",
    borderRadius: 8,
    alignItems: "stretch",
    padding: 20,
    elevation: 4,
  },
  inputLabel: {
    color: "#F8F8F8",
    marginTop: 20,
    fontFamily: "Helvetica Neue",
    fontStyle: "italic",
    fontSize: 17,
  },
  emailInput: {
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
  passwordInput: {
    height: 32,
    marginTop: 12,
    borderRadius: 8,
    backgroundColor: "#424242",
    color: "#D9D9D9",
    fontStyle: "italic",
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
    fontFamily: "Helvetica Neue",
    fontStyle: "italic",
  },
  accountLinkContainer: {
    marginTop: 24,
    alignSelf: "center",
    justifyContent: "space-between",
    fontSize: 10,
    fontWeight: "700",
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
    fontFamily: "Helvetica Neue",
    fontStyle: "italic",
  },
  textBox: {
    flexDirection: "row",
    padding: 8,
  },
  loginText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
    fontFamily: "Helvetica Neue",
    fontStyle: "italic",
  },
  accountText: {
    fontSize: 12,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    fontFamily: "Helvetica Neue",
    fontStyle: "italic",
    color: "#A0A0A0",
  },
  registerText: {
    fontSize: 12,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    fontFamily: "Helvetica Neue",
    fontStyle: "italic",
    color: "#D4F0FC",
  },
  passwordText: {
    fontSize: 12,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    fontFamily: "Helvetica Neue",
    fontStyle: "italic",
    color: "#FDD3D5",
    alignSelf: "center",
  },
  contentContainer: {
    marginTop: 16,
  },
});

export default Login;
