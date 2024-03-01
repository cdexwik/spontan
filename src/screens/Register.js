import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import { auth, db } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Snackbar } from "react-native-paper";
import { setDoc, doc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { addUserToFirestore } from "../../redux/slices/users";

function Register() {
  const { navigate } = useNavigation();

  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [tag, setTag] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // For Sncakbar
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const onDismissSnackBar = () => setVisible(false);

  const handleMissingInputSnackbar = () => {
    if (!firstName) {
      setSnackbarMessage("Cant register without firstname");
      setVisible(true);
    } else if (!lastName) {
      setSnackbarMessage("Cant register without lastname");
      setVisible(true);
    } else if (!tag) {
      setSnackbarMessage("Cant register without tag");
      setVisible(true);
    } else if (!email) {
      setSnackbarMessage("Cant register without email");
      setVisible(true);
    } else if (!password) {
      setSnackbarMessage(
        "You need to enter a password of minimum 6 characters"
      );
      setVisible(true);
    } else if (!confirmPassword) {
      setSnackbarMessage("You need to confirm the password");
      setVisible(true);
    } else if (password !== confirmPassword) {
      setSnackbarMessage("The passwords doesnt match");
      setVisible(true);
    }
  };

  const register = async () => {
    if (firstName && lastName && tag && email && password && confirmPassword) {
      // allFields filled

      if (password === confirmPassword) {
        //set loading
        try {
          const userCredentials = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );
          const user = userCredentials.user;
          const userId = user.uid;
          console.log(user);

          await setDoc(doc(db, "users", user.uid), {
            userId: user.uid,
            firstName,
            lastName,
            tag,
            email,
          });

          //set loading
        } catch (error) {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
        }
      } else {
        handleMissingInputSnackbar();
      }
    } else {
      handleMissingInputSnackbar();
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#2B2B2B" }}>
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
                onChangeText={(value) => setFirstName(value)}
              />
              <Text style={styles.inputLabel}>Last Name</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="words"
                autoCorrect={false}
                cursorColor="#D9D9D9"
                onChangeText={(value) => setLastName(value)}
              />
              <Text style={styles.inputLabel}>Tag</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                cursorColor="#D9D9D9"
                onChangeText={(value) => setTag(value)}
              />
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect={false}
                cursorColor="#D9D9D9"
                onChangeText={(value) => setEmail(value)}
              />
              <Text style={styles.inputLabel}>Password</Text>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                cursorColor="#D9D9D9"
                onChangeText={(value) => setPassword(value)}
              />
              <Text style={styles.inputLabel}>Confirm Password</Text>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                cursorColor="#D9D9D9"
                onChangeText={(value) => setConfirmPassword(value)}
              />
              <Pressable style={styles.registerButton} onPress={register}>
                <Text style={styles.buttonText}>Register</Text>
              </Pressable>
              <View style={styles.textBox}>
                <Text style={styles.normalText}>Already have an account?</Text>
                <Pressable
                  onPress={() => {
                    navigate("Login");
                  }}
                >
                  <Text style={styles.loginText}>Login</Text>
                </Pressable>
              </View>
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
    marginTop: 30,
    maxWidth: 380,
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
