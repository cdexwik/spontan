import react from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const AddButton = () => {
  return (
    <View>
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
  addButton: {
    marginTop: 24,
    marginRight: 20,
    backgroundColor: "#afe8c4",
    alignItems: "center",
    paddingVertical: 0,
    paddingHorizontal: 10,
    alignSelf: "center",
    borderRadius: 16,
    elevation: 3,
    fontFamily: "Helvetica Neue",
    fontStyle: "italic",
  },
  buttonText: {
    fontSize: 11,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
    fontFamily: "Helvetica Neue",
    fontStyle: "italic",
  },
});
