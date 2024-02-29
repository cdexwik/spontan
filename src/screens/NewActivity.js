import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  Platform,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DashedLine from "../components/DashedLine";
import SendButton from "../components/SendButton";
import NewActivityFriendsSelector from "../components/NewActivityFriendsSelector";
import SelectDate from "../components/SelectDate";
import SelectStartTime from "../components/SelectStartTime";
import SelectDuration from "../components/SelectDuration";
import SelectResponseTime from "../components/SelectResponseTime";
import { Snackbar } from "react-native-paper";
import { addDoc } from "firebase/firestore";
import { activitiesRef } from "../../config/firebase";
import { useSelector } from "react-redux";

function NewActivity({ onPressHideModalHandler, friends }) {
  // Form States
  const [title, setTitle] = useState("");
  const [desription, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState(new Date());
  const [endTime, setEndTime] = useState(date);
  const [responseTimeDate, setResponseTimeDate] = useState(date);
  const [selectedFriends, setSelectedFriends] = useState([]);

  // String for displaying endTime in the right format
  const [endTimeOutput, setEndTimeOutput] = useState("");

  // Initial states for duration and responsetime
  const [duration, setDuration] = useState(
    new Date(new Date().setHours(0, 0, 0, 0))
  );
  const [responseTime, setResponseTime] = useState(
    new Date(new Date().setHours(0, 0, 0, 0))
  );

  // For controlling TimePickers
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [showDurationPicker, setShowDurationPicker] = useState(false);
  const [showResponseTimePicker, setShowResponseTimePicker] = useState(false);

  // loading friends
  const [friendsData, setFriendsData] = useState([]);

  // To control responsetime
  const [isSubmit, setIsSubmit] = useState(false);

  // To enable snackbar Messaging

  const [isTimeSet, setIsTimeSet] = useState(false);
  const [isDurationSet, setIsDurationSet] = useState(false);
  const [isResponseTimeSet, setIsResponseTimeSet] = useState(false);

  // For Sncakbar
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const onDismissSnackBar = () => setVisible(false);

  const { user } = useSelector((state) => state.user);

  const handleMissingInputSnackbar = () => {
    if (!title) {
      setSnackbarMessage("Cant send without title");
      setVisible(true);
    } else if (!desription) {
      setSnackbarMessage("Cant send without description");
      setVisible(true);
    } else if (!location) {
      setSnackbarMessage("Cant send without location");
      setVisible(true);
    } else if (!isTimeSet) {
      setSnackbarMessage("Cant send without setting the start time");
      setVisible(true);
    } else if (!isDurationSet) {
      setSnackbarMessage("Cant send without setting the duration");
      setVisible(true);
    } else if (!isResponseTimeSet) {
      setSnackbarMessage("Cant send without setting the response time");
      setVisible(true);
    } else if (selectedFriends.length == 0) {
      setSnackbarMessage("You need to add some friends to your activity");
      setVisible(true);
    }
  };

  const ShowInputs = () => {
    // for debugging
    return (
      <View>
        <Text>Title {title.toString()}</Text>
        <Text>Description {desription.toString()}</Text>
        <Text>Location {location.toString()}</Text>
        <Text>date {date.toString()}</Text>
        <Text>endTime {endTime.toString()}</Text>
        <Text>duration {duration.toString()}</Text>
        <Text>responseTimeDate {responseTimeDate.toString()}</Text>
        <Text>selectedFriends {selectedFriends.toString()}</Text>
      </View>
    );
  };

  const handleSubmit = async () => {
    if (
      title &&
      desription &&
      location &&
      isTimeSet &&
      isDurationSet &&
      isResponseTimeSet &&
      selectedFriends.length > 0
    ) {
      setIsSubmit(true);
      let doc = await addDoc(activitiesRef, {
        title: title,
        desription: desription,
        location: location,
        startDateAndTime: date,
        duration: duration,
        endDateAndTime: endTime,
        responseTime: responseTimeDate,
        invitedUsers: selectedFriends,
        userId: user.uid,
      });

      if (doc && doc.id) {
        console.log(doc.id);
        onPressHideModalHandler();
      }
    } else {
      handleMissingInputSnackbar();
    }
    setIsSubmit(false);
  };

  useEffect(() => {
    let newArray = friends.map((friend) => {
      return {
        key: friend.userid,
        value: `${friend.firstName} ${friend.lastName}`,
      };
    });
    setFriendsData(newArray);
  }, []);

  useEffect(() => {
    const durH = duration.getHours();
    const durM = duration.getMinutes();
    let nd = new Date(date.getTime());
    nd.setHours(nd.getHours() + durH);
    nd.setMinutes(nd.getMinutes() + durM);
    setEndTime(nd);
  }, [date, duration]);

  useEffect(() => {
    // its possible that when user presses send we create a dateTimeStamp instead for timer to be
    // counted from the moment the button is pressed and not from the time when the date is selected
    // but for now we just use the date
    const respH = responseTime.getHours();
    const respM = responseTime.getMinutes();
    let nd = new Date();
    nd.setHours(nd.getHours() + respH);
    nd.setMinutes(nd.getMinutes() + respM);
    setResponseTimeDate(nd);
  }, [responseTime, isSubmit]);

  useEffect(() => {
    const output = () => {
      const timeString = endTime.toLocaleString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      const dateString = endTime.toDateString();
      const output = `${dateString}, ${timeString}`;
      return output;
    };
    setEndTimeOutput(output);
  }, [endTime]);

  const onChangeSetDate = ({ type }, selectedDate) => {
    if (type == "set") {
      setDate(selectedDate);
      if (Platform.OS === "android") {
        toggleDatePicker();
      }
    } else {
      toggleDatePicker();
    }
  };

  const onChangeSetTime = ({ type }, selectedTime) => {
    if (type == "set") {
      setDate(selectedTime);
      setIsTimeSet(true);
      if (Platform.OS === "android") {
        toggleTimePicker();
      }
    } else {
      toggleTimePicker();
    }
  };

  const onChangeSetResponseTime = ({ type }, selectedResponseTime) => {
    if (type == "set") {
      setResponseTime(selectedResponseTime);
      setIsResponseTimeSet(true);
      if (Platform.OS === "android") {
        toggleResponseTimePicker();
      }
    } else {
      toggleResponseTimePicker();
    }
  };

  const onChangeSetDuration = ({ type }, selectedDuration) => {
    if (type == "set") {
      setDuration(selectedDuration);
      setIsDurationSet(true);
      if (Platform.OS === "android") {
        toggleDurationPicker();
      }
    } else {
      toggleDurationPicker();
    }
  };

  const toggleDatePicker = () => {
    if (!showTimePicker && !showDurationPicker && !showResponseTimePicker) {
      setShowDatePicker(!showDatePicker);
    }
  };

  const toggleTimePicker = () => {
    if (!showDatePicker && !showDurationPicker && !showResponseTimePicker) {
      setShowTimePicker(!showTimePicker);
    }
  };

  const toggleDurationPicker = () => {
    if (!showTimePicker && !showDatePicker && !showResponseTimePicker) {
      setShowDurationPicker(!showDurationPicker);
    }
  };

  const toggleResponseTimePicker = () => {
    if (!showTimePicker && !showDatePicker && !showDurationPicker) {
      setShowResponseTimePicker(!showResponseTimePicker);
    }
  };

  const confirmIosDate = () => {
    setDate(date);
    toggleDatePicker();
  };

  const confirmIosTime = () => {
    setDate(date);
    toggleTimePicker();
  };

  const confirmIosDuration = () => {
    setDuration(duration);
    toggleDurationPicker();
  };

  const confirmIosResponseTime = () => {
    setResponseTime(responseTime);
    toggleResponseTimePicker();
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#2B2B2B" }}>
        <KeyboardAwareScrollView
          style={{ flex: 1, backgroundColor: "#2B2B2B" }}
        >
          <View style={styles.container}>
            <View style={styles.headerContainerExitMenu}>
              <View style={styles.crossButton}>
                <Pressable onPress={onPressHideModalHandler}>
                  <Feather name="x" size={24} color="#8F8F8F" />
                </Pressable>
              </View>

              <View style={styles.checkButton} />
            </View>
            <View style={styles.headerContainer}>
              <Text style={styles.spontan}>Spontan</Text>
              <Text style={styles.subTitle}>
                I'm feeling{"\n"}spontaneous...
              </Text>
            </View>
            <View style={styles.formContainer}>
              <Text style={styles.inputLabel}>Title</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="words"
                autoCorrect={false}
                cursorColor="#D9D9D9"
                onChangeText={(value) => {
                  setTitle(value);
                }}
              />
              <Text style={styles.inputLabel}>Description</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="words"
                autoCorrect={false}
                cursorColor="#D9D9D9"
                placeholder="I feel like..."
                onChangeText={(value) => {
                  setDescription(value);
                }}
              />
              <View>
                <Text style={{ marginTop: 20, color: "#F8f8f8" }}>
                  Placeholder for tags
                </Text>
              </View>

              <Text style={styles.inputLabel}>Location</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="words"
                autoCorrect={false}
                cursorColor="#D9D9D9"
                onChangeText={(value) => {
                  setLocation(value);
                }}
              />

              <Text style={styles.inputLabel}>Select Date</Text>
              <SelectDate
                showDatePicker={showDatePicker}
                date={date}
                setDate={setDate}
                toggleDatePicker={toggleDatePicker}
                onChangeSetDate={onChangeSetDate}
                confirmIosDate={confirmIosDate}
              />

              <View>
                <Text style={styles.inputLabel}>Select Start Time</Text>
                <SelectStartTime
                  showTimePicker={showTimePicker}
                  date={date}
                  setDate={setDate}
                  toggleTimePicker={toggleTimePicker}
                  onChangeSetTime={onChangeSetTime}
                  confirmIosTime={confirmIosTime}
                />
              </View>
              <View>
                <Text style={styles.inputLabel}>Select Duration</Text>
                <Text style={[styles.inputLabel, { marginTop: -8 }]}>
                  hours | minutes
                </Text>
                <SelectDuration
                  showDurationPicker={showDurationPicker}
                  duration={duration}
                  setDuration={setDuration}
                  toggleDurationPicker={toggleDurationPicker}
                  onChangeSetDuration={onChangeSetDuration}
                  confirmIosDuration={confirmIosDuration}
                />
              </View>
              <Text style={styles.inputLabel}>End Time</Text>
              <TextInput
                style={[styles.input, { color: "#F8f8f8" }]}
                autoCapitalize="words"
                cursorColor="#D9D9D9"
                value={endTimeOutput}
                editable={false}
              />
              <View>
                <Text style={styles.inputLabel}>
                  Select Response Time Limit
                </Text>
                <Text style={[styles.inputLabel, { marginTop: -8 }]}>
                  hours | minutes
                </Text>
                <SelectResponseTime
                  showResponseTimePicker={showResponseTimePicker}
                  responseTime={responseTime}
                  setResponseTime={setResponseTime}
                  toggleResponseTimePicker={toggleResponseTimePicker}
                  onChangeSetResponseTime={onChangeSetResponseTime}
                  confirmIosResponseTime={confirmIosResponseTime}
                />
              </View>
              <Text style={styles.inputLabel}>Invite Friends</Text>
              <NewActivityFriendsSelector
                friendsData={friendsData}
                setSelectedFriends={setSelectedFriends}
              />
              <DashedLine />

              <SendButton onPress={handleSubmit} />
            </View>
            <Snackbar
              visible={visible}
              onDismiss={onDismissSnackBar}
              action={{
                label: "Ok",
                onPress: () => {
                  setSnackbarMessage("");
                },
              }}
            >
              {snackbarMessage}
            </Snackbar>
          </View>
        </KeyboardAwareScrollView>
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
  headerContainerExitMenu: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 18,
    width: "92%",
    maxWidth: 480,
  },
  crossButton: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  profile: {
    color: "#F8F8F8",
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Helvetica Neue",
    fontStyle: "italic",
    fontWeight: "400",
  },
  checkButton: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  headerContainer: {
    alignItems: "center",
    marginTop: 30,
    width: "92%",
    maxWidth: 480,
  },
  spontan: {
    color: "#F8F8F8",
    fontSize: 42,
    textAlign: "center",
    fontFamily: "Helvetica Neue",
    fontStyle: "italic",
    fontWeight: "700",
  },
  subTitle: {
    color: "#F8F8F8",
    textAlign: "center",
    marginTop: 40,
    fontFamily: "Helvetica Neue",
    fontStyle: "italic",
    fontWeight: "400",
    fontSize: 28,
    lineHeight: 28,
  },
  formContainer: {
    flex: 1,
    backgroundColor: "#3B3B3B",
    width: "92%",
    maxWidth: 480,
    minHeight: 310,
    marginTop: 32,
    marginBottom: 24,
    flexDirection: "column",
    borderRadius: 8,
    alignItems: "stretch",
    padding: 20,
    elevation: 4,
    overflow: "hidden",
  },

  inputLabel: {
    color: "#a0a0a0",
    marginTop: 20,
    fontFamily: "Helvetica Neue",
    fontStyle: "italic",
    fontSize: 14,
    marginBottom: 6,
  },
  input: {
    height: 36,
    borderRadius: 8,
    backgroundColor: "#424242",
    fontFamily: "Helvetica Neue",
    color: "#D9D9D9",
    //fontStyle: "italic",
    fontSize: 14,
    paddingLeft: 10,
    paddingVertical: 4,
  },
  rowWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rowLeft: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  rowRight: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  pickerButton: {
    backgroundColor: "#EEDFF6",
    alignItems: "center",
    paddingVertical: 2,
    paddingHorizontal: 14,
    alignSelf: "center",
    borderRadius: 16,
    elevation: 3,
    fontFamily: "Helvetica Neue",
    fontStyle: "italic",
  },
  buttonText: {
    fontSize: 12,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
    fontFamily: "Helvetica Neue",
    fontStyle: "italic",
  },
});

export default NewActivity;
