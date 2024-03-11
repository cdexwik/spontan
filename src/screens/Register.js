import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import { auth, db } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Snackbar } from "react-native-paper";
import { setDoc, doc, batch } from "firebase/firestore";
import { useDispatch } from "react-redux";
import {
  addUserToFirestore,
  setCurrentUser,
  setCurrentUserData,
} from "../../redux/slices/user";

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
      setSnackbarMessage("Can't register without first name");
      setVisible(true);
    } else if (!lastName) {
      setSnackbarMessage("Can't register without last name");
      setVisible(true);
    } else if (!tag) {
      setSnackbarMessage("Can't register without tag");
      setVisible(true);
    } else if (!email) {
      setSnackbarMessage("Can't register without email");
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
      setSnackbarMessage("The passwords don't match");
      setVisible(true);
    }
  };

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

  const register = async () => {
    if (firstName && lastName && tag && email && password && confirmPassword) {
      // allFields filled
      if (password === confirmPassword) {
        try {
          const userCredentials = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );
          const user = userCredentials.user;
          const userId = user.uid;
          console.log("user credentials", user);

          let newUser = {
            userId: user.uid,
            firstName: firstName,
            lastName: lastName,
            tag: tag,
            email: email,
            friends: [],
            friendRequests: [],
          };

          await setDoc(doc(db, "users", user.uid), newUser);

          dispatch(setCurrentUser(userId)); // Update Redux state with current user

          dispatch(setCurrentUserData(newUser));

          setSnackbarMessage("Success! Login to use your account");
          setVisible(true);
        } catch (error) {
          handleAuthError(error);
        }
      } else {
        handleMissingInputSnackbar();
      }
    } else {
      handleMissingInputSnackbar();
    }
  };

  const register2 = async () => {
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
          console.log("user credentials");

          let newUser = {
            userId: user.uid,
            firstName: firstName,
            lastName: lastName,
            tag: tag,
            email: email,
            friends: [],
            friendRequests: [],
          };

          dispatch(addUserToFirestore(userId, newUser));

          // Här skulle man kunna göra:
          // dispatch(setUserData(newUser))
          setSnackbarMessage("Success! Login to use your account");
          setVisible(true);

          /*
          const user = userCredentials.user;
          const userId = user.uid;
          console.log("user credentials");
          await setDoc(doc(db, "users", user.uid), {
            userId: user.uid,
            firstName,
            lastName,
            tag,
            email,
          });*/

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
                autoCapitalize="none"
                secureTextEntry={true}
                cursorColor="#D9D9D9"
                onChangeText={(value) => setPassword(value)}
              />
              <Text style={styles.inputLabel}>Confirm Password</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
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
                  <Text style={styles.loginText}>Log In</Text>
                </Pressable>
              </View>
              <Snackbar
                style={{ width: "107%" }}
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
