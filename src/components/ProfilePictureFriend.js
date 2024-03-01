import React from "react";
import { SafeAreaView, View, Image, StyleSheet } from "react-native";

const ProfilePictureFriend = ({ size }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png",
        }}
        style={{ width: size, height: size, borderRadius: size / 2 }}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
});

export default ProfilePictureFriend;
