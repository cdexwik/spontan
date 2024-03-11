import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import FriendsList from "../components/FriendsList";
import Search from "../components/Search";

const friendsData = [
  {
    userid: "111",
    firstName: "Anna",
    lastName: "Svensson",
    tag: "anna",
    email: "anna@svensson.se",
    picture: "URL to database",
    pendingRequest: true,
    activityData: {
      numberOfInvites: 1,
      numberOfAccepted: 0,
      totalResponseTime: 200,
    },
  },
  {
    userid: "222",
    firstName: "Olle",
    lastName: "Karlsson",
    tag: "Olle",
    email: "olle@karlsson.se",
    picture: "URL to database",
    pendingRequest: false,
    activityData: {
      numberOfInvites: 2,
      numberOfAccepted: 2,
      totalResponseTime: 500,
    },
  },
  {
    userid: "333",
    firstName: "Gina",
    lastName: "Garcia",
    tag: "gina",
    email: "gina@garcia.se",
    picture: "URL to database",
    pendingRequest: false,
    activityData: {
      numberOfInvites: 3,
      numberOfAccepted: 2,
      totalResponseTime: 100,
    },
  },
  {
    userid: "444",
    firstName: "Juan",
    lastName: "Martinez",
    tag: "juan",
    email: "juan@martinez.se",
    picture: "URL to database",
    pendingRequest: true,
    activityData: {
      numberOfInvites: 5,
      numberOfAccepted: 2,
      totalResponseTime: 800,
    },
  },
  {
    userid: "555",
    firstName: "Magda",
    lastName: "Martinez",
    tag: "magda",
    email: "magda@martinez.se",
    picture: "URL to database",
    pendingRequest: true,
    activityData: {
      numberOfInvites: 5,
      numberOfAccepted: 2,
      totalResponseTime: 800,
    },
  },
];

function Friends() {
  const [friends, setFriends] = useState(friendsData);

  useEffect(() => {
    setFriends(friendsData);
  }, [friends]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#2B2B2B" }}>
        <View style={styles.container}>
          <View style={styles.friendsContainer}>
            <ScrollView style={{ flex: 1 }}>
              <FriendsList friends={friends} />
            </ScrollView>
          </View>

          <View style={styles.searchContainer}>
            <Text style={styles.header}>Add new friends</Text>
            <Search />
          </View>
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
  friendsContainer: {
    flex: 1,
    flexDirection: "column",
    width: "98%",
    backgroundColor: "#3B3B3B",
    justifyContent: "center",
    alignItems: "stretch",
    maxWidth: 480,
    borderRadius: 8,
    elevation: 4,
    overflow: "hidden",
  },
  searchContainer: {
    flex: 1,
    flexDirection: "column",
    width: "98%",
    backgroundColor: "#3B3B3B",
    justifyContent: "center",
    alignItems: "stretch",
    maxWidth: 480,
    borderRadius: 8,
    elevation: 4,
    overflow: "hidden",
    marginTop: 16,
  },
  header: {
    marginTop: 24,
    marginLeft: 20,
    fontFamily: "HelveticaNeue-BoldItalic",
    fontSize: 20,
    color: "#F8f8f8",
  },
});

export default Friends;
