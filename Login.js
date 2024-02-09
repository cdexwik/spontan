import React, { useState } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
} from "react-native";
import Checkbox from "expo-checkbox";

const Login = () => {
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.introContainer}>
        <Text style={styles.title}>Spontan</Text>
        <Text style={styles.subTitle}>Embrace the spark of Spontaneity! </Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Tag or email</Text>
          <TextInput style={styles.emailInput} />
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput style={styles.passwordInput} secureTextEntry={true} />
          <View style={styles.remeberMeContainer}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? "#4630EB" : undefined}
            />
            <Text style={styles.remeberMeText}>Remember me</Text>
          </View>
        </View>

        <View style={styles.accountLinkContainer}>
          <Pressable style={styles.loginButton}>
            <Text style={styles.loginText}>Login</Text>
          </Pressable>
          <View style={styles.textBox}>
            <Text style={styles.accountText}>Don’t have an account?</Text>
            <Text style={styles.registerText}>Register</Text>
          </View>
          <View>
            <Text style={styles.passwordText}>Forgot password?</Text>
          </View>
        </View>
      </View>

      <ScrollView style={styles.contentContainer}>
        {/*
          Your Items would be listed here using FlatList or some other ways for the sake of maintainability 
          of the code, I've simplified how those items would be.
        */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2B2B2B",
    display: "flex",
    maxWidth: 400,
    alignItems: "center",
    padding: 50,
  },
  introContainer: {
    textAlign: "center",
    maxWidth: 380,
  },
  title: {
    color: "#F8F8F8",
    marginTop: 6,
    fontSize: 32,
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
    fontWeight: "500",
    fontSize: 24,
    lineHeight: 24,
  },
  inputContainer: {
    backgroundColor: "#3B3B3B",
    width: 380,
    marginTop: 29,
    flexDirection: "column",
    borderRadius: 8,
    alignItems: "stretch",
    justifyContent: "center",
    padding: 48,
  },
  inputLabel: {
    color: "#F8F8F8",
    marginTop: 19,
    fontFamily: "Helvetica Neue",
    fontStyle: "italic",
    fontSize: 16,
  },
  emailInput: {
    height: 32,
    marginTop: 9,
    borderRadius: 8,
    backgroundColor: "#424242",
    fontFamily: "Helvetica Neue",
    color: "#D9D9D9",
    fontSize: 16,
  },
  passwordInput: {
    height: 32,
    marginTop: 12,
    borderRadius: 8,
    backgroundColor: "#424242",
    color: "#D9D9D9",
    fontSize: 16,
  },
  remeberMeContainer: {
    flexDirection: "row",
    marginTop: 16,
    fontSize: 12,
    color: "#A0A0A0",
  },
  remeberMeText: {
    marginLeft: 6,
    fontSize: 14,
    color: "#A0A0A0",
  },
  accountLinkContainer: {
    marginTop: 19,
    alignSelf: "center",
    justifyContent: "space-between",
    fontSize: 10,
    fontWeight: "700",
  },
  loginButton: {
    backgroundColor: "#afe8c4",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    fontFamily: "Helvetica Neue",
    fontStyle: "italic",
  },
  textBox: {
    flexDirection: "row",
    padding: 6,
  },
  loginText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
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
