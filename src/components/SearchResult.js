import React from "react";
import { View, Text, StyleSheet } from "react-native";
import DashedLine from "./DashedLine";
import ProfilePictureFriend from "./ProfilePictureFriend";
import AddButton from "./AddButton";

const SearchResult = ({
  userid,
  firstName,
  lastName,
  tag,
  pendingRequest,
  activityData,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.friend}>
        <View style={styles.left}>
          <ProfilePictureFriend />
        </View>
        <View style={styles.friendTextBox}>
          <Text
            style={styles.friendTextName}
          >{`${firstName} ${lastName}`}</Text>
          <Text style={styles.friendTextTag}>@{tag}</Text>
        </View>
        <AddButton />
      </View>
      <DashedLine />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
  },
  friend: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "98%",
  },
  left: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    marginLeft: 20,
  },
  friendTextBox: {
    flexDirection: "column",
    paddingVertical: 10,
  },
  friendTextName: {
    fontSize: 12,
    color: "#F8F8F8",
    fontWeight: "bold",
    fontFamily: "Helvetica Neue",
  },
  friendTextTag: {
    fontSize: 12,
    fontStyle: "italic",
    color: "#A0A0A0",
    fontFamily: "Helvetica Neue",
  },
  friendText: {
    fontSize: 12,
    color: "#A0A0A0",
    fontFamily: "Helvetica Neue",
  },
});

export default SearchResult;
