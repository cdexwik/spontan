import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DashedLine from "./DashedLine";
import DeleteEventButton from "./DeleteEventButton";
import { MaterialIcons } from "@expo/vector-icons";

const SentActivity = ({
  category,
  time,
  title,
  description,
  activityTime,
  place,
}) => {
  const totalPeople = 2;
  const attendingPeople = 1;
  const fillPercentage = (attendingPeople / totalPeople) * 100;
  const [expanded, setExpanded] = useState(false);
  const attendees = ["John", "Alice", "Bob"];

  const toggleList = () => {
    setExpanded(!expanded);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topInfo}>
        <Text style={styles.topText}>you</Text>
        <Text style={styles.topText}>{category}</Text>
        <Text style={styles.topText}>{time}</Text>
      </View>
      <View style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
        <Text style={styles.descriptionText}>{description}</Text>
      </View>
      <View style={styles.timePlace}>
        <View style={styles.time}>
          <Ionicons name="calendar-clear-outline" size={21} color="#A0A0A0" />
          <Text style={[styles.descriptionText, { marginLeft: 7 }]}>
            {activityTime}
          </Text>
        </View>
        <View style={styles.place}>
          <Ionicons name="location-outline" size={21} color="#A0A0A0" />
          <Text style={[styles.descriptionText, { marginLeft: 7 }]}>
            {place}
          </Text>
        </View>
      </View>
      <DashedLine />
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
          <Text style={styles.descriptionText}>Who answered?</Text>
          <MaterialIcons name="expand-more" size={19} color="#EEDFF6" />
          {/*<TouchableOpacity onPress={toggleList}>
            <Text style={styles.expandButton}>
              {expanded ? "Hide attendees" : "Show attendees"}
            </Text>
          </TouchableOpacity>
          {expanded && (
            <View>
              <FlatList
                data={attendees}
                renderItem={({ item }) => <Text>{item}</Text>}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          )*/}
        </View>
        <View style={styles.button}>
          <DeleteEventButton />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "98%",
    minHeight: 240,
    height: 240,
    backgroundColor: "#3B3B3B",
    flexDirection: "column",
    borderRadius: 8,
    paddingVertical: 18,
    paddingHorizontal: 20,
    elevation: 4,
    overflow: "hidden",
    marginBottom: 16,
  },
  topInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  topText: {
    fontSize: 12,
    fontStyle: "italic",
    fontWeight: "300",
    color: "#A0A0A0",
    fontFamily: "Helvetica Neue",
  },
  header: {
    flexDirection: "column",
    marginBottom: 24,
  },
  headerText: {
    fontSize: 24,
    fontStyle: "italic",
    fontWeight: "bold",
    color: "#F8F8F8F8",
    fontFamily: "Helvetica Neue",
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: 13,
    color: "#A0A0A0",
    fontFamily: "Helvetica Neue",
  },
  amountText: {
    fontSize: 12,
    color: "#A0A0A0",
    fontFamily: "Helvetica Neue",
  },
  timePlace: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: 14,
  },
  time: {
    flexDirection: "row",
    marginBottom: 10,
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
  },
  button: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  expandButton: {
    fontSize: 16,
    color: "blue",
    marginTop: 10,
  },
});

export default SentActivity;
