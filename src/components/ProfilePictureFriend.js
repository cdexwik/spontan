import React from "react";
import { SafeAreaView, View, Image, StyleSheet } from "react-native";

const ProfilePictureFriend = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png",
        }}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
  },
});

export default ProfilePictureFriend;
