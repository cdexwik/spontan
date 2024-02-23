import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import FriendsList from "./FriendsList";

const friendsData = [
  [
    (userid = "111"),
    (firstName = "Anna"),
    (lastName = "Svensson"),
    (tag = "anna"),
    (email = "anna@svensson.se"),
    (picture = "URL to database"),
    (pendingRequest = true),
    (activityData = [
      (numberOfInvites = 1),
      (numberOfAccepted = 0),
      (totalResponseTime = 200),
    ]),
  ],
  [
    (userid = "222"),
    (firstName = "Olle"),
    (lastName = "Karlsson"),
    (tag = "Olle"),
    (email = "olle@karlsson.se"),
    (picture = "URL to database"),
    (pendingRequest = false),
    (activityData = [
      (numberOfInvites = 2),
      (numberOfAccepted = 2),
      (totalResponseTime = 500),
    ]),
  ],
  [
    (userid = "333"),
    (firstName = "Gina"),
    (lastName = "Garcia"),
    (tag = "gina"),
    (email = "gina@garcia.se"),
    (picture = "URL to database"),
    (pendingRequest = false),
    (activityData = [
      (numberOfInvites = 3),
      (numberOfAccepted = 2),
      (totalResponseTime = 100),
    ]),
  ],
  [
    (userid = "444"),
    (firstName = "Juan"),
    (lastName = "Martinez"),
    (tag = "juan"),
    (email = "juan@martinez.se"),
    (picture = "URL to database"),
    (pendingRequest = true),
    (activityData = [
      (numberOfInvites = 5),
      (numberOfAccepted = 2),
      (totalResponseTime = 800),
    ]),
  ],
];

function Friends() {
  const [friends, setFriends] = useState(friendsData);

  useEffect(() => {
    setFriends(friendsData);
  }, [friendsData]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text>Friends</Text>
          {console.log("from Friends")}
          {console.log(friends)}
          <FriendsList friends={friends} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2B2B2B",
    alignItems: "center",
  },
});

export default Friends;
