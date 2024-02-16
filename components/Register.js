import React from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

function Register() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Spontan</Text>
            <Text style={styles.subTitle}>
              Embrace the spark of Spontaneity!{" "}
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>First Name</Text>
            <TextInput style={styles.input} />
            <Text style={styles.inputLabel}>Last Name</Text>
            <TextInput style={styles.input} />
            <Text style={styles.inputLabel}>Tag</Text>
            <TextInput style={styles.input} />
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput style={styles.input} />
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput style={styles.input} />
            <Text style={styles.inputLabel}>Confirm Password</Text>
            <TextInput style={styles.input} />
            <Pressable style={styles.registerButton}>
              <Text style={styles.registerText}>Register</Text>
            </Pressable>
            <View style={styles.textBox}>
              <Text style={styles.accountText}>Already have an account?</Text>
              <Text style={styles.loginText}>Login</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2B2B2B",
    display: "flex",
    maxWidth: 400,
    alignItems: "center",
    padding: 50,
  },
  headerContainer: {
    textAlign: "center",
    maxWidth: 380,
  },
  headerText: {
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
    marginTop: 24,
    flexDirection: "column",
    borderRadius: 8,
    alignItems: "stretch",
    padding: 48,
  },
  inputLabel: {
    color: "#F8F8F8",
    marginTop: 12,
    fontFamily: "Helvetica Neue",
    fontStyle: "italic",
    fontSize: 16,
  },

  input: {
    height: 32,
    marginTop: 8,
    borderRadius: 8,
    backgroundColor: "#424242",
    fontFamily: "Helvetica Neue",
    color: "#D9D9D9",
    fontSize: 16,
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
  registerText: {
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
  accountText: {
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
