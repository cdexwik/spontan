import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const AddButton = () => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          console.log("Add Pressed");
        }}
        style={styles.addButton}
      >
        <Text style={styles.buttonText}>Add</Text>
      </Pressable>
    </View>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: 10,
  },
  addButton: {
    backgroundColor: "#EEDFF6",
    alignItems: "center",
    paddingVertical: 0,
    paddingHorizontal: 15,
    alignSelf: "center",
    borderRadius: 16,
    elevation: 3,
  },
  buttonText: {
    fontSize: 11,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "black",
    fontFamily: "HelveticaNeue-BoldItalic",
  },
});
