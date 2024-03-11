import React from "react";
import { View, StyleSheet, Text, Pressable, ScrollView } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import CrossButton from "../components/CrossButton";
import ProfilePictureFriend from "../components/ProfilePictureFriend";
import { Ionicons } from "@expo/vector-icons";
import DashedLine from "../components/DashedLine";
import GetDirectionsButton from "../components/GetDirectionsButton.js";
import YesButton from "../components/YesButton";
import NoButton from "../components/NoButton";
import ChatButton from "../components/ChatButton";

function ActivityDetailSecond({
  firstName,
  lastName,
  tag,
  category,
  time,
  title,
  description,
  activityTime,
  place,
  street,
  city,
  weekdays,
  saturday,
  sunday,
  onPressHideActivityDetailSecond,
}) {
  const totalPeople = 2;
  const attendingPeople = 1;
  const fillPercentage = (attendingPeople / totalPeople) * 100;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#2B2B2B" }}>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.headerContainer}>
              <Text style={styles.spontan}>Spontan</Text>
            </View>

            <View style={styles.infoContainer}>
              <View style={styles.crossButton}>
                <CrossButton
                  size={14}
                  onPress={onPressHideActivityDetailSecond}
                />
              </View>
              <View style={styles.personContainer}>
                <Text style={styles.personText}>
                  {`${firstName} ${lastName}`}
                  {"\n"}proposed an activity!
                </Text>
                <View style={styles.profilePicture}>
                  <ProfilePictureFriend
                    size={60} //This should be changed to the link of the corresponding profile picture
                    src={
                      "https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png"
                    }
                  />
                </View>
              </View>
            </View>

            <View style={styles.inputContainer}>
              <View style={styles.topInfo}>
                <Text style={styles.topText}>@{tag}</Text>
                <Text style={styles.topText}>{category}</Text>
                <Text style={styles.topText}>{time}</Text>
              </View>
              <View style={styles.header}>
                <Text style={styles.headerText}>{title}</Text>
                <Text style={styles.descriptionText}>{description}</Text>
              </View>
              <View style={styles.timePlace}>
                <View style={styles.time}>
                  <Ionicons
                    name="calendar-clear-outline"
                    size={21}
                    color="#A0A0A0"
                  />
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
              <View style={styles.map}>
                <Text>Map</Text>
              </View>
              <View>
                <Text style={[styles.headerText, { marginTop: 8 }]}>
                  Google Maps
                </Text>
              </View>
              <View style={styles.address}>
                <Text style={styles.descriptionText}>Address:</Text>
                <View>
                  <Text
                    style={[
                      styles.descriptionText,
                      { lineHeight: 21, textAlign: "right" },
                    ]}
                  >
                    {street}
                    {"\n"}
                    {city}
                  </Text>
                  <View style={styles.directionsButton}>
                    <GetDirectionsButton />
                  </View>
                </View>
              </View>
              <View style={styles.hours}>
                <Text style={styles.descriptionText}>Opening Hours:</Text>
                <Text
                  style={[
                    styles.descriptionText,
                    { lineHeight: 21, textAlign: "right" },
                  ]}
                >
                  Mon - Fri: {weekdays}
                  {"\n"}
                  Sat: {saturday}
                  {"\n"}
                  Sun: {sunday}
                </Text>
              </View>
              <View style={{ marginVertical: 4 }}>
                <DashedLine />
              </View>
              <View style={styles.bottom}>
                <View style={styles.attendants}>
                  <View style={styles.progressBar}>
                    <View
                      style={[styles.fill, { width: `${fillPercentage}%` }]}
                    />
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
          </View>
        </ScrollView>
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
  headerContainer: {
    alignItems: "center",
    marginTop: 20,
    maxWidth: 380,
  },
  crossButton: {
    position: "absolute",
    top: 6,
    left: 6,
  },
  spontan: {
    color: "#F8F8F8",
    fontSize: 42,
    textAlign: "center",
    fontFamily: "HelveticaNeue-BoldItalic",
  },
  infoContainer: {
    width: "92%",
    maxWidth: 480,
    minHeight: 100,
    height: 100,
    marginTop: 30,
    backgroundColor: "#3B3B3B",
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 20,
    elevation: 4,
    overflow: "visible",
    marginBottom: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  personText: {
    color: "#F8F8F8",
    textAlign: "left",
    fontFamily: "HelveticaNeue-MediumItalic",
    fontSize: 20,
    lineHeight: 28,
  },
  personContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginLeft: 16,
  },
  profilePicture: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  inputContainer: {
    flex: 1,
    backgroundColor: "#3B3B3B",
    width: "92%",
    maxWidth: 480,
    minHeight: 310,
    marginBottom: 24,
    flexDirection: "column",
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 20,
    elevation: 4,
    overflow: "hidden",
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
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: 16,
  },
  time: {
    flexDirection: "row",
    marginBottom: 8,
  },
  place: {
    flexDirection: "row",
  },
  bottom: {
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
  },
  map: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#A0A0A0",
    width: "100%",
    height: 175,
    borderRadius: 8,
  },
  address: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 4,
  },
  directionsButton: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 4,
  },
  hours: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 4,
    marginTop: 12,
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

export default ActivityDetailSecond;
