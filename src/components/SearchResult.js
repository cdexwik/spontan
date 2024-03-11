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
              <ProfilePictureFriend
                size={45}
                //This should be changed to the link of the corresponding profile picture
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png"
                }
              />
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
    fontFamily: "HelveticaNeue-Bold",
  },
  friendTextTag: {
    fontSize: 12,
    color: "#A0A0A0",
    fontFamily: "HelveticaNeue-Italic",
  },
});

export default SearchResult;
