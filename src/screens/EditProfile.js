import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Pressable } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import ProfilePictureFriend from "../components/ProfilePictureFriend";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useSelector } from "react-redux";

function EditProfile() {
  const { navigate } = useNavigation();
  const { currentUserData } = useSelector((state) => state.user);

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
      alert("You didn't select any image.");
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#2B2B2B" }}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <View style={styles.crossButton}>
              <Pressable
                onPress={() => {
                  navigate("Profile");
                }}
              >
                <Feather name="x" size={24} color="#8F8F8F" />
              </Pressable>
            </View>
            <Text style={styles.profile}>Edit profile</Text>
            <View style={styles.checkButton}>
              <Pressable
                onPress={() => {
                  navigate("Profile");
                }}
              >
                <Feather name="check" size={24} color="#8F8F8F" />
              </Pressable>
            </View>
          </View>
          <View style={styles.inputContainer}>
            <View style={{ alignSelf: "center" }}>
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
            <Text style={styles.inputLabel}>First Name</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="words"
              autoCorrect={false}
              cursorColor="#D9D9D9"
              defaultValue={currentUserData.firstName}
            />
            <Text style={styles.inputLabel}>Last Name</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="words"
              autoCorrect={false}
              cursorColor="#D9D9D9"
              defaultValue={currentUserData.lastName}
            />
            <Text style={styles.inputLabel}>Tag</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              cursorColor="#D9D9D9"
              defaultValue={currentUserData.tag.toString().toLowerCase()}
            />
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect={false}
              cursorColor="#D9D9D9"
              defaultValue={currentUserData.email}
            />
            <Text style={styles.inputLabel}>New Password</Text>
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              autoCapitalize="none"
              cursorColor="#D9D9D9"
            />
            <Text style={styles.inputLabel}>Confirm New Password</Text>
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              autoCapitalize="none"
              cursorColor="#D9D9D9"
            />
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
  crossButton: {
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
  checkButton: {
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
    alignItems: "strech",
    padding: 20,
    elevation: 4,
    overflow: "hidden",
    marginBottom: 24,
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
});

export default EditProfile;
