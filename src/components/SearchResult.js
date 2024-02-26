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
    <View>
      <View style={styles.container}>
        <View style={styles.friend}>
          <ProfilePictureFriend />

          <View style={styles.friendTextBox}>
            <Text
              style={styles.friendTextName}
            >{`${firstName} ${lastName}`}</Text>
            <Text style={styles.friendTextTag}>@ {tag}</Text>
            <Text>{`                                  `}</Text>
          </View>
          <View style={{ flexDirection: "row-reverse" }}>
            <AddButton />
          </View>
        </View>

        <DashedLine />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
  },
  friend: {
    flexDirection: "row",
    //backgroundColor: "red",
  },

  friendTextBox: {
    flexDirection: "column",
    marginTop: 16,
    marginRight: 40,
  },

  friendTextName: {
    fontSize: 12,
    color: "#F8F8F8",
    fontWeight: "bold",
  },
  friendTextTag: {
    fontSize: 12,
    fontStyle: "italic",
    color: "#A0A0A0",
  },
  friendText: {
    fontSize: 12,
    color: "#A0A0A0",
  },
});

export default SearchResult;
