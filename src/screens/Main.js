import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Modal,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import ReceivedActivity from "../components/ReceivedActivity";
import NewActivityButton from "../components/NewActivityButton";
import NewActivity from "./NewActivity";
import ActivityDetail from "./ActivityDetail";
import ActivityDetailSecond from "./ActivityDetailSecond";

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

function Main() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [friends, setFriends] = useState(friendsData);
  const [isActivityDetailVisibleFirst, setIsActivityDetailVisibleFirst] =
    useState(false);
  const [isActivityDetailVisibleSecond, setIsActivityDetailVisibleSecond] =
    useState(false);

  useEffect(() => {
    setFriends(friendsData);
  }, [friends]);

  const onPressShowModalHandler = () => setModalVisible(true);
  const onPressHideModalHandler = () => setModalVisible(false);

  const onPressShowActivityDetailFirst = () =>
    setIsActivityDetailVisibleFirst(true);
  const onPressHideActivityDetailFirst = () =>
    setIsActivityDetailVisibleFirst(false);

  const onPressShowActivityDetailSecond = () =>
    setIsActivityDetailVisibleSecond(true);
  const onPressHideActivityDetailSecond = () =>
    setIsActivityDetailVisibleSecond(false);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#2B2B2B" }}>
        <ScrollView
          style={{ flex: 1, backgroundColor: "#2B2B2B", marginBottom: 30 }}
        >
          <View style={styles.container}>
            <TouchableOpacity onPress={onPressShowActivityDetailFirst}>
              <ReceivedActivity
                tag={"anna"}
                category={"sport"}
                time={"00:36"}
                title={"Badminton"}
                description={
                  "I'd like to go and play badminton during lunch, who's in??"
                }
                activityTime={"Tomorrow 12:00 - 13:30"}
                place={"Frescati Sports center"}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={onPressShowActivityDetailSecond}>
              <ReceivedActivity
                tag={"juan"}
                category={"bar"}
                time={"03:05"}
                title={"Beers and games"}
                description={"Lets go play some games and drink!"}
                activityTime={"Tomorrow 21:00 - 00:30"}
                place={"Ugglan"}
              />
            </TouchableOpacity>
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
        <Modal
          animationType="slide"
          visible={isActivityDetailVisibleFirst}
          onRequestClose={() => setIsActivityDetailVisibleFirst(false)}
        >
          <ActivityDetail
            firstName={"Anna"}
            lastName={"Svensson"}
            tag={"anna"}
            category={"sport"}
            activityTime={"12:00 - 13:30"}
            time={"00:36"}
            title={"Badminton"}
            description={
              "I'd like to go and play badminton during lunch, who's in??"
            }
            place={"Frescati Sports Center"}
            street={"Svante Arrhenius väg 4"}
            city={"114 18 Stockholm"}
            weekdays={"08:00 - 22:00"}
            saturday={"09:00 - 19:00"}
            sunday={"09:00 - 22:00"}
            onPressHideActivityDetailFirst={onPressHideActivityDetailFirst}
          ></ActivityDetail>
        </Modal>

        <Modal
          animationType="slide"
          visible={isActivityDetailVisibleSecond}
          onRequestClose={() => setIsActivityDetailVisibleSecond(false)}
        >
          <ActivityDetailSecond
            firstName={"Juan"}
            lastName={"Martinez"}
            tag={"juan"}
            category={"bar"}
            activityTime={"21:00 - 00:30"}
            time={"03:05"}
            title={"Beers and games"}
            description={"Lets go play some games and drink!"}
            place={"Ugglan Boule & Bar"}
            street={"Närkesgatan 6"}
            city={"114 18 Stockholm"}
            weekdays={"16:00 - 23:00"}
            saturday={"16:00 - 01:00"}
            sunday={"closed"}
            onPressHideActivityDetailSecond={onPressHideActivityDetailSecond}
          ></ActivityDetailSecond>
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2B2B2B",
    //alignItems: "center",
    maxWidth: 480,
  },
});

export default Main;
