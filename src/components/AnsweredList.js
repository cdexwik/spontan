import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import AnsweredFriend from "./AnsweredFriend";

function renderAnswersCB(friend) {
  return (
    // <Text
    //   style={{
    //     alignSelf: "center",
    //     marginBottom: 6,
    //     fontSize: 13,
    //     color: "#A0A0A0",
    //     fontFamily: "HelveticaNeue-Normal",
    //   }}
    // >
    //   @{friend.tag}
    // </Text>
    <AnsweredFriend
      key={friend.userid}
      firstName={friend.firstName}
      lastName={friend.lastName}
      tag={friend.tag}
      activityData={friend.activityData}
    />
  );
}

const AnsweredList = ({ friends }) => {
  if (!friends.length || friends.length === 0) {
    return (
      <View style={styles.container}>
        {console.log("No friends")}
        <Text
          style={{
            fontSize: 16,
            color: "#F8F8F8",
            fontFamily: "HelveticaNeue-BoldItalic",
            alignSelf: "center",
            marginTop: 10,
          }}
        >
          No friends!
        </Text>
      </View>
    );
  } else {
    return (
      <View
        style={{
          flexDirection: "row",
          alignSelf: "center",
        }}
      >
        <View style={styles.column}>
          <ScrollView>{friends.map(renderAnswersCB)}</ScrollView>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  column: {
    flexDirection: "column",
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    elevation: 4,
    backgroundColor: "#3B3B3B",
  },
});

export default AnsweredList;
