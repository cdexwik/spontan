import react from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const AcceptButton = () => {
  return (
    <View style={{ flex: 1 }}>
      <Pressable
        onPress={() => {
          console.log("Accept Pressed");
        }}
        style={styles.acceptButton}
      >
        <Text style={styles.buttonText}>Accept</Text>
      </Pressable>
    </View>
  );
};

export default AcceptButton;

const styles = StyleSheet.create({
  acceptButton: {
    //marginTop: 24,
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
