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
      {pendingRequest && (
        <View>
          <View style={styles.friend}>
            <View style={styles.left}>
              <ProfilePictureFriend />
            </View>
            <View style={styles.center}>
              <View style={styles.friendTextBox}>
                <Text
                  style={styles.friendTextName}
                >{`${firstName} ${lastName}`}</Text>
                <Text style={styles.friendTextTag}>@{tag}</Text>
              </View>
            </View>
            <AddButton />
          </View>
          <DashedLine />
        </View>
      )}
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
  center: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  friendTextBox: {
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingVertical: 10,
    flex: 1,
    marginLeft: -40,
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
