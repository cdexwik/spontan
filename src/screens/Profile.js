import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";

function Profile() {
  const handleLogout = async () => {
    await signOut(auth);
  };

  const { navigate } = useNavigation();
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
            <Pressable
              onPress={() => {
                navigate("EditProfile");
              }}
            >
              <Text style={styles.editProfileText}>Edit profile</Text>
            </Pressable>
          </View>
          <View>
            <Pressable style={styles.logOutButton} onPress={handleLogout}>
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
    marginTop: 18,
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
    fontFamily: "Helvetica Neue",
    fontStyle: "italic",
    fontWeight: "400",
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
    marginTop: 28,
    flexDirection: "column",
    borderRadius: 8,
    alignItems: "stretch",
    padding: 20,
    elevation: 4,
    overflow: "hidden",
  },
  editProfileText: {
    alignSelf: "center",
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "500",
    letterSpacing: 0.25,
    fontFamily: "Helvetica Neue",
    fontStyle: "italic",
    color: "#afe8c4",
  },
  logOutButton: {
    marginTop: 12,
    marginBottom: 24,
    backgroundColor: "#3B3B3B",
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
    color: "#FDD3D5",
    fontFamily: "Helvetica Neue",
    fontStyle: "italic",
  },
});

export default Profile;
