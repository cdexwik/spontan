import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView, Modal } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import SentActivity from "../components/SentActivity";
import NewActivityButton from "../components/NewActivityButton";
import NewActivity from "./NewActivity";
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

function Activities() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [friends, setFriends] = useState(friendsData);

  useEffect(() => {
    setFriends(friendsData);
  }, [friends]);

  const onPressShowModalHandler = () => setModalVisible(true);
  const onPressHideModalHandler = () => setModalVisible(false);

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#2B2B2B",
        }}
      >
        <ScrollView
          style={{
            flex: 1,
            backgroundColor: "#2B2B2B",
            marginBottom: 30,
          }}
        >
          <View style={styles.container}>
            <SentActivity
              category={"category"}
              time={"09:37"}
              title={"Heading title from the form"}
              description={"I want to go to the gym tomorrow at 13:00"}
              activityTime={"Tomorrow 13:00 - 15:00"}
              place={"Fitness Fridhemsplan"}
            />
            <SentActivity
              category={"category"}
              time={"09:37"}
              title={"Heading title from the form"}
              description={"I want to go to the gym tomorrow at 13:00"}
              activityTime={"Tomorrow 13:00 - 15:00"}
              place={"Fitness Fridhemsplan"}
            />
            <SentActivity
              category={"category"}
              time={"09:37"}
              title={"Heading title from the form"}
              description={"I want to go to the gym tomorrow at 13:00"}
              activityTime={"Tomorrow 13:00 - 15:00"}
              place={"Fitness Fridhemsplan"}
            />
            <SentActivity
              category={"category"}
              time={"09:37"}
              title={"Heading title from the form"}
              description={"I want to go to the gym tomorrow at 13:00"}
              activityTime={"Tomorrow 13:00 - 15:00"}
              place={"Fitness Fridhemsplan"}
            />
          </View>
        </ScrollView>
        <NewActivityButton
          style={styles.newActivity}
          onPress={onPressShowModalHandler}
        />
        <Modal
          animationType="slide"
          visible={isModalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <NewActivity
            onPressHideModalHandler={onPressHideModalHandler}
            friends={friends}
          />
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2B2B2B",
    alignItems: "center",
    maxWidth: 480,
  },

  newActivity: {
    flex: 1,
  },
});

export default Activities;
