import React, { useState, useEffect } from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Pressable,
} from "react-native";
import Modal from "react-native-modal";
import { Ionicons } from "@expo/vector-icons";
import DashedLine from "./DashedLine";
import DeleteEventButton from "./DeleteEventButton";
import { MaterialIcons } from "@expo/vector-icons";
import AnsweredList from "./AnsweredList";
import { useDispatch } from "react-redux";
import { deleteActivityFromFirestore } from "../../redux/slices/activities";
import Timer from "./Timer";
import { format } from "date-fns";

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

const SentActivity = ({
  id,
  category,
  responseTime,
  title,
  description,
  startDateAndTime,
  endDateAndTime,
  location,
  onPress,
  invitedUsers,
}) => {
  const totalPeople = 2;
  const attendingPeople = 1;
  const fillPercentage = (attendingPeople / totalPeople) * 100;

  const [friends, setFriends] = useState(friendsData);

  useEffect(() => {
    setFriends(friendsData);
  }, [friends]);

  const [isModalVisible, setModalVisible] = useState(false);

  const onPressShowModalHandler = () => setModalVisible(true);
  const onPressHideModalHandler = () => setModalVisible(false);

  return (
    <View style={styles.container}>
      <View style={styles.topInfo}>
        <Text style={styles.topText}>you</Text>
        <Text numberOfLines={1} style={[styles.topText, { marginLeft: 25 }]}>
          {category}
        </Text>
        {Timer(responseTime)}
      </View>
      <View style={styles.header}>
        <Text numberOfLines={1} style={styles.headerText}>
          {title}
        </Text>
        <Text numberOfLines={1} style={styles.descriptionText}>
          {description}
        </Text>
      </View>
      <View style={styles.timePlace}>
        <View style={styles.time}>
          <Ionicons name="calendar-clear-outline" size={21} color="#A0A0A0" />
          <Text
            numberOfLines={1}
            style={[styles.descriptionText, { marginLeft: 7 }]}
          >
            {format(startDateAndTime, "PPPP")}{" "}
            {format(startDateAndTime, "HH:mm")} - {endDateAndTime}
          </Text>
        </View>
        <View style={styles.place}>
          <Ionicons name="location-outline" size={21} color="#A0A0A0" />
          <Text
            numberOfLines={1}
            style={[styles.descriptionText, { marginLeft: 7 }]}
          >
            {location}
          </Text>
        </View>
      </View>
      <View style={{ marginVertical: 4 }}>
        <DashedLine />
      </View>
      <View style={styles.bottom}>
        <View style={styles.attendants}>
          <View style={styles.progressBar}>
            <View style={[styles.fill, { width: `${fillPercentage}%` }]} />
          </View>
          <Text
            style={[styles.amountText]}
          >{`${attendingPeople}/${totalPeople}`}</Text>
        </View>
        <View style={styles.answered}>
          <Pressable onPress={onPressShowModalHandler}>
            <Text style={styles.descriptionText}>Who answered?</Text>
          </Pressable>
          <Pressable onPress={onPressShowModalHandler}>
            <MaterialIcons name="expand-more" size={19} color="#EEDFF6" />
          </Pressable>
        </View>
        <Modal
          isVisible={isModalVisible}
          onBackdropPress={() => setModalVisible(false)}
          onRequestClose={() => setModalVisible(false)}
          //onSwipeComplete={() => setModalVisible(false)}
          //swipeDirection="down"
          animationIn={"fadeIn"}
          animationOut={"fadeOut"}
        >
          <AnsweredList friends={friends} />
        </Modal>
        <View style={styles.button}>
          <DeleteEventButton onPress={onPress} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "98%",
    minHeight: 230,
    height: 230,
    backgroundColor: "#3B3B3B",
    flexDirection: "column",
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 20,
    elevation: 4,
    overflow: "visible",
    marginBottom: 16,
  },
  topInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  topText: {
    fontSize: 12,
    color: "rgba(160, 160, 160, 0.7)",
    fontFamily: "HelveticaNeue-LightItalic",
  },
  header: {
    flexDirection: "column",
    marginBottom: 24,
  },
  headerText: {
    fontSize: 24,
    color: "#F8F8F8F8",
    fontFamily: "HelveticaNeue-BoldItalic",
    marginBottom: 2,
  },
  descriptionText: {
    fontSize: 13,
    color: "#A0A0A0",
    fontFamily: "HelveticaNeue-Normal",
  },
  amountText: {
    fontSize: 12,
    color: "#A0A0A0",
    fontFamily: "HelveticaNeue-Normal",
  },
  timePlace: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: 10,
  },
  time: {
    flexDirection: "row",
    marginBottom: 8,
  },
  place: {
    flexDirection: "row",
  },
  bottom: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  attendants: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  progressBar: {
    width: "50%",
    height: 15,
    backgroundColor: "#2B2B2B",
    borderRadius: 10,
    overflow: "hidden", // Ensures the fill doesn't overflow the container
    marginRight: 10,
  },
  fill: {
    flex: 1,
    height: "100%",
    backgroundColor: "#EEDFF6", // Color for the filled portion
    borderRadius: 10,
  },
  answered: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

export default SentActivity;
