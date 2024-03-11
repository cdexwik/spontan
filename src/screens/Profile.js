import React, { useState } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import ProfilePictureFriend from "../components/ProfilePictureFriend";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
import useAuth from "../../customHooks/useAuth";
import { useSelector, useDispatch } from "react-redux";
import { setUser, setLoggedIn } from "../../redux/slices/user";

function Profile() {
  const { currentUserData } = useSelector((state) => state.user);

  const handleLogout = async () => {
    await signOut(auth);
  };

  const { navigate } = useNavigation();
  const [imageSrc, setImageSrc] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png"
  );
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImageSrc(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#2B2B2B" }}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <View style={styles.leftSpace} />
            <Text style={styles.profile}>Profile</Text>
            <View style={styles.backButton}>
              <Pressable
                onPress={() => {
                  navigate("Wrapper");
                }}
              >
                <Feather name="arrow-right" size={24} color="#8F8F8F" />
              </Pressable>
            </View>
          </View>
          <View style={styles.inputContainer}>
            <View>
              <ProfilePictureFriend src={imageSrc} size={90} />
              <Pressable onPress={pickImageAsync}>
                <FontAwesome
                  style={{ position: "absolute", right: 0, bottom: 0 }}
                  name="circle"
                  size={28}
                  color="#3B3B3B"
                />
                <Ionicons
                  style={{ position: "absolute", right: 0, bottom: 2 }}
                  name="add-circle-outline"
                  size={24}
                  color="#F8F8F8"
                />
              </Pressable>
            </View>
            <View>
              <Text
                style={[styles.descriptionText, { fontSize: 19, marginTop: 4 }]}
              >
                {currentUserData.firstName} {currentUserData.lastName}
              </Text>
              <Text
                style={[
                  styles.descriptionText,
                  { fontSize: 15, marginBottom: 16 },
                ]}
              >
                @{currentUserData.tag.toString().toLowerCase()}
              </Text>
              <Text
                style={[
                  styles.descriptionText,
                  { fontSize: 16, lineHeight: 26 },
                ]}
              >
                Average response time:{"\n"}
                <Text
                  style={[
                    styles.descriptionText,
                    { fontSize: 19, color: "#FEF0CD" },
                  ]}
                >
                  24 seconds
                </Text>
              </Text>

              <Text
                style={[
                  styles.descriptionText,
                  { fontSize: 16, lineHeight: 26, marginTop: 10 },
                ]}
              >
                Attended activities in the last 30 days:{"\n"}
                <Text
                  style={[
                    styles.descriptionText,
                    { fontSize: 19, color: "#CBE6D5" },
                  ]}
                >
                  7/13
                </Text>
              </Text>
              <Text
                style={[
                  styles.descriptionText,
                  { fontSize: 16, lineHeight: 26, marginTop: 10 },
                ]}
              >
                Proposed activities in the last 30 days:{"\n"}
                <Text
                  style={[
                    styles.descriptionText,
                    { fontSize: 19, color: "#D4F0FC" },
                  ]}
                >
                  3
                </Text>
              </Text>
              <Text
                style={[
                  styles.descriptionText,
                  { fontSize: 16, lineHeight: 26, marginTop: 10 },
                ]}
              >
                Favourite category:{"\n"}
                <Text
                  style={[
                    styles.descriptionText,
                    { fontSize: 19, color: "#EEDFF6" },
                  ]}
                >
                  Work out
                </Text>
              </Text>
            </View>
            <View style={styles.buttons}>
              <Pressable
                onPress={() => {
                  navigate("EditProfile");
                }}
              >
                <Text style={styles.editProfileText}>Edit profile</Text>
              </Pressable>
              <Pressable onPress={() => {}}>
                <Text style={styles.deleteText}>Delete my account</Text>
              </Pressable>
            </View>
          </View>
          <View>
            <Pressable
              style={styles.logOutButton}
              onPress={() => {
                handleLogout();
              }}
            >
              <Text style={styles.buttonText}>Log Out</Text>
            </Pressable>
          </View>
        </View>
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
    width: "92%",
    maxWidth: 480,
  },
  leftSpace: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  profile: {
    color: "#F8F8F8",
    fontSize: 18,
    textAlign: "center",
    fontFamily: "HelveticaNeue-MediumItalic",
  },
  backButton: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  inputContainer: {
    flex: 1,
    backgroundColor: "#3B3B3B",
    width: "92%",
    maxWidth: 480,
    minHeight: 310,
    marginTop: 22,
    flexDirection: "column",
    borderRadius: 8,
    alignItems: "center",
    padding: 20,
    elevation: 4,
    overflow: "hidden",
  },
  editProfileText: {
    alignSelf: "center",
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.25,
    fontFamily: "HelveticaNeue-BoldItalic",
    color: "rgba(175, 232, 196, 0.7)",
    marginBottom: 4,
  },
  deleteText: {
    alignSelf: "center",
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.25,
    fontFamily: "HelveticaNeue-BoldItalic",
    color: "rgba(253, 211, 213, 0.7)",
  },
  logOutButton: {
    marginTop: 16,
    marginBottom: 24,
    backgroundColor: "#3B3B3B",
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
    color: "#FDD3D5",
    fontFamily: "HelveticaNeue-BoldItalic",
  },
  descriptionText: {
    color: "#F8F8F8",
    textAlign: "center",
    fontFamily: "HelveticaNeue-MediumItalic",
  },
  buttons: {
    position: "absolute",
    bottom: 20,
  },
});

export default Profile;
