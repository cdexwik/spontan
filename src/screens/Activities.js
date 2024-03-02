import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Modal,
  FlatList,
  Text,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import SentActivity from "../components/SentActivity";
import NewActivityButton from "../components/NewActivityButton";
import NewActivity from "./NewActivity";
import { useDispatch, useSelector } from "react-redux";
import { useIsFocused } from "@react-navigation/native";
import {
  fetchActivities,
  fetchUserActivities,
} from "../../redux/slices/activities";
import { deleteActivity } from "../../redux/slices/activities";
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

  const { activitiesArray } = useSelector((state) => state.activities);
  const { userActivitiesArray } = useSelector((state) => state.activities);
  const { user } = useSelector((state) => state.user);

  const isFocused = useIsFocused();

  // fetch activities
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserActivities(user.uid));
    console.log("userActivitiesArray inside use effect", userActivitiesArray);
  }, [dispatch, isFocused, user, activitiesArray]);

  useEffect(() => {
    setFriends(friendsData);
  }, [friends]);

  const deleteActivityhandler = (id) => {
    dispatch(deleteActivity(id));
  };

  const renderActivitiesCB = (data) => {
    const { id, activity } = data;
    const { title, description, location } = activity;

    return (
      <SentActivity
        key={data.id}
        id={data.id}
        category={"category"}
        time={"09:37"}
        title={title}
        description={description}
        activityTime={"Tomorrow 13:00 - 15:00"}
        place={location}
        onPress={() => {
          deleteActivityhandler(data.id);
        }}
      />
    );
  };

  const NoActivities = () => {
    return (
      <View style={{ flex: 1 }}>
        <Text style={styles.titleStyle}>
          You haven't created any activities
        </Text>
      </View>
    );
  };

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
            {userActivitiesArray.map(renderActivitiesCB)}
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
