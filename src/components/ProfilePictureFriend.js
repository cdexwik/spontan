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
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    //marginTop: 14,
    marginRight: 20,
    marginLeft: 20,
    //backgroundColor: "red",
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
  },
});

export default ProfilePictureFriend;
