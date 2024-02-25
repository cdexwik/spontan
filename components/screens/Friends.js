import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import FriendsList from "./FriendsList";
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
        <View style={styles.wrapper}>
          <View style={styles.friendsContainer}>
            <ScrollView style={{ maxHeight: 290 }}>
              <FriendsList friends={friends} />
            </ScrollView>
          </View>

          <View style={styles.searchContainer}>
            <Text style={styles.header}>Add New Friends</Text>
            <Search />
          </View>
          {
            //<View style={styles.fill}></View>
          }
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column  ",
  },
  fill: {
    flex: 1,
    backgroundColor: "#2B2B2B",
  },
  friendsContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#3B3B3B",
    //backgroundColor: "red",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    maxWidth: 480,
    maxHeight: 300,
    borderRadius: 8,
    elevation: 4,
    overflow: "hidden",
  },
  searchContainer: {
    flex: 1,
    //backgroundColor: "blue",
    backgroundColor: "#3B3B3B",
    marginTop: 32,
    maxWidth: 480,
    borderRadius: 8,
    elevation: 4,
  },
  header: {
    marginTop: 24,
    marginBottom: 4,
    marginLeft: 20,
    fontFamily: "Helvetica Neue",
    fontStyle: "italic",
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 28,
    color: "#F8f8f8",
  },
});

export default Friends;
