import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DashedLine from "./DashedLine";
import YesButton from "./YesButton";
import NoButton from "./NoButton";
import ChatButton from "./ChatButton";

const ReceivedActivity = ({
  tag,
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

  return (
    <View style={styles.container}>
      <View style={styles.topInfo}>
        <Text style={styles.topText}>@{tag}</Text>
        <Text numberOfLines={1} style={styles.topText}>
          {category}
        </Text>
        <Text style={styles.topText}>{time}</Text>
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
            {activityTime}
          </Text>
        </View>
        <View style={styles.place}>
          <Ionicons name="location-outline" size={21} color="#A0A0A0" />
          <Text
            numberOfLines={1}
            style={[styles.descriptionText, { marginLeft: 7 }]}
          >
            {place}
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
        <View style={styles.buttons}>
          <View style={{ marginRight: 5 }}>
            <YesButton />
          </View>
          <View style={{ marginRight: 5 }}>
            <NoButton />
          </View>
          <ChatButton />
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
    overflow: "hidden",
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
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
  },
  attendants: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
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
  buttons: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

export default ReceivedActivity;
