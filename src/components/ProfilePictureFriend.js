import React from "react";
import { SafeAreaView, View, Image, StyleSheet } from "react-native";

const ProfilePictureFriend = ({ size, src }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: src,
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
