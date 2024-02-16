import React from "react";
import { View, StyleSheet, Text, TextInput, Pressable } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

function ForgotPass() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Spontan</Text>
            <Text style={styles.subTitle}>
              Embrace the spark of Spontaneity!{" "}
            </Text>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Forgot your password?</Text>
              <Text style={styles.italic}>
                Enter your email address and you will receive instructions on
                how to change it
              </Text>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput style={styles.emailInput} />
              <Pressable style={styles.loginButton}>
                <Text style={styles.loginText}>Login</Text>
              </Pressable>
              <View style={styles.textBox}>
                <Text style={styles.accountText}>Back to</Text>
                <Text style={styles.registerText}>Login</Text>
              </View>
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
    height: 576,
    marginTop: 24,
    flexDirection: "column",
    borderRadius: 8,
    alignItems: "stretch",
    padding: 48,
  },
  inputLabel: {
    color: "#F8F8F8",
    marginTop: 20,
    fontFamily: "Helvetica Neue",
    fontStyle: "italic",
    fontSize: 16,
  },
  italic: {
    marginTop: 8,
    fontSize: 14,
    color: "#A0A0A0",
    fontStyle: "italic",
  },
  emailInput: {
    height: 32,
    marginTop: 8,
    borderRadius: 8,
    backgroundColor: "#424242",
    fontFamily: "Helvetica Neue",
    color: "#D9D9D9",
    fontSize: 16,
  },

  loginButton: {
    marginTop: 24,
    backgroundColor: "#FDD3D5",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    alignSelf: "center",
    borderRadius: 16,
    elevation: 3,
    fontFamily: "Helvetica Neue",
    fontStyle: "italic",
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
  registerText: {
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

export default ForgotPass;
