import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  Platform,
  ScrollView,
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
import { useSelector, useDispatch } from "react-redux";
import { addActivityToFirestore } from "../../redux/slices/activities";
import CrossButton from "../components/CrossButton";
import { format } from "date-fns";
import {
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
} from "react-native-google-places-autocomplete";

function NewActivity({ onPressHideModalHandler, friends }) {
  // Form States
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
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
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleMissingInputSnackbar = () => {
    if (!title) {
      setSnackbarMessage("Can't send without title");
      setVisible(true);
    } else if (!description) {
      setSnackbarMessage("Can't send without description");
      setVisible(true);
    } else if (!category) {
      setSnackbarMessage("Can't send without category");
      setVisible(true);
    } else if (!location) {
      setSnackbarMessage("Can't send without location");
      setVisible(true);
    } else if (!isTimeSet) {
      setSnackbarMessage("Can't send without setting the start time");
      setVisible(true);
    } else if (!isDurationSet) {
      setSnackbarMessage("Can't send without setting the duration");
      setVisible(true);
    } else if (!isResponseTimeSet) {
      setSnackbarMessage("Can't send without setting the response time");
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
        <Text>Description {description.toString()}</Text>
        <Text>Category {category.toString()}</Text>
        <Text>Location {location.toString()}</Text>
        <Text>date {date.toString()}</Text>
        <Text>endTime {endTime.toString()}</Text>
        <Text>duration {duration.toString()}</Text>
        <Text>responseTimeDate {responseTimeDate.toString()}</Text>
        <Text>selectedFriends {selectedFriends.toString()}</Text>
      </View>
    );
  };

  const handleSubmit = () => {
    if (
      title &&
      description &&
      category &&
      location &&
      isTimeSet &&
      isDurationSet &&
      isResponseTimeSet &&
      selectedFriends.length > 0
    ) {
      setIsSubmit(true);

      let newActivity = {
        title: title,
        description: description,
        category: category,
        location: location,
        startDateAndTime: date,
        duration: duration,
        endDateAndTime: endTime,
        responseTime: responseTimeDate,
        invitedUsers: selectedFriends,
        userId: currentUser,
      };
      dispatch(addActivityToFirestore(newActivity));

      onPressHideModalHandler();
    } else {
      handleMissingInputSnackbar();
    }
    setIsSubmit(false);
  };

  /*
  const handleSubmit = async () => {
    if (
      title &&
      description &&
      location &&
      isTimeSet &&
      isDurationSet &&
      isResponseTimeSet &&
      selectedFriends.length > 0
    ) {
      setIsSubmit(true);
      let doc = await addDoc(activitiesRef, {
        title: title,
        description: description,
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
  */

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
      const startTimeString = format(date, "HH:mm");
      const endTimeString = format(endTime, "HH:mm");
      const dateString = format(endTime, "PPPP");
      const output = `${dateString}, ${startTimeString} - ${endTimeString}`;
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
          keyboardShouldPersistTaps={"handled"}
          style={{ flex: 1, backgroundColor: "#2B2B2B" }}
        >
          <View style={styles.container}>
            <View style={styles.headerContainer}>
              <Text style={styles.spontan}>Spontan</Text>
              <Text style={styles.subTitle}>
                I'm feeling{"\n"}spontaneous...
              </Text>
            </View>
            <View style={styles.formContainer}>
              <View style={styles.crossButton}>
                <CrossButton size={14} onPress={onPressHideModalHandler} />
              </View>
              <Text
                style={[
                  styles.inputLabel,
                  { fontFamily: "HelveticaNeue-Bold" },
                ]}
              >
                Title
              </Text>
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
                autoCapitalize="sentences"
                autoCorrect={false}
                cursorColor="#D9D9D9"
                placeholderTextColor="rgba(217, 217, 217, 0.8)"
                placeholder="I feel like..."
                onChangeText={(value) => {
                  setDescription(value);
                }}
              />

              <Text style={styles.inputLabel}>Category</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                cursorColor="#D9D9D9"
                onChangeText={(value) => {
                  setCategory(value);
                }}
              />

              {/* <View>
                <Text style={{ marginTop: 20, color: "#F8f8f8" }}>
                  [Placeholder for tags]
                </Text>
              </View> */}

              <Text style={styles.inputLabel}>Location</Text>
              {/* <TextInput
                style={styles.input}
                autoCapitalize="words"
                autoCorrect={false}
                cursorColor="#D9D9D9"
                onChangeText={(value) => {
                  setLocation(value);
                }}
              /> */}
              <SafeAreaView>
                <GooglePlacesAutocomplete
                  placeholder="Search"
                  placeholderTextColor="#F8f8f8"
                  suppressDefaultStyles
                  styles={{
                    textInputContainer: {
                      flex: 1,
                      color: "#F8f8f8",
                    },
                    textInput: {
                      height: 32,
                      marginTop: 6,
                      borderRadius: 8,
                      backgroundColor: "#424242",
                      fontFamily: "HelveticaNeue-LightItalic",
                      color: "#F8f8f8",
                      fontSize: 14,
                      paddingLeft: 10,
                    },
                    listView: {
                      color: "#F8f8f8",
                    },
                    predefinedPlacesDescription: {
                      color: "#F8f8f8",
                    },
                  }}
                  onPress={(data, details = null) => {
                    // console.log("data", data);
                    // console.log("___________");
                    // console.log("details", details);
                    // console.log("description", data.description);
                    setLocation(data.description);
                  }}
                  query={{
                    key: "AIzaSyCInT-9E8uvFFYylIXaH26k8PxRWW6rS30",
                    language: "en",
                  }}
                  fetchDetails={true}
                />
              </SafeAreaView>

              <Text style={styles.inputLabel}>Date</Text>
              <SelectDate
                showDatePicker={showDatePicker}
                date={date}
                setDate={setDate}
                toggleDatePicker={toggleDatePicker}
                onChangeSetDate={onChangeSetDate}
                confirmIosDate={confirmIosDate}
              />

              <View style={{ flexDirection: "row" }}>
                <View>
                  <Text style={styles.inputLabel}>Start Time</Text>
                  <SelectStartTime
                    showTimePicker={showTimePicker}
                    date={date}
                    setDate={setDate}
                    toggleTimePicker={toggleTimePicker}
                    onChangeSetTime={onChangeSetTime}
                    confirmIosTime={confirmIosTime}
                  />
                </View>
                <View style={{ marginLeft: 14 }}>
                  <Text style={styles.inputLabel}>
                    Duration{" "}
                    <Text style={{ fontFamily: "HelveticaNeue-Light" }}>
                      (hours : minutes)
                    </Text>
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
              </View>

              <View>
                <Text style={styles.inputLabel}>
                  Response Time Limit{" "}
                  <Text style={{ fontFamily: "HelveticaNeue-Light" }}>
                    (hours : minutes)
                  </Text>
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
              <View>
                <Text style={styles.inputLabel}>Selected date and time</Text>
                <TextInput
                  style={[
                    styles.input,
                    {
                      marginBottom: 4,
                      fontFamily: "HelveticaNeue-Italic",
                    },
                  ]}
                  autoCapitalize="words"
                  cursorColor="#D9D9D9"
                  value={endTimeOutput}
                  editable={false}
                />
              </View>
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
  subTitle: {
    color: "#F8F8F8",
    textAlign: "center",
    marginTop: 30,
    fontFamily: "HelveticaNeue-MediumItalic",
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
    marginTop: 14,
    fontSize: 13,
    color: "#A0A0A0",
    fontFamily: "HelveticaNeue-Normal",
  },
  input: {
    height: 32,
    marginTop: 6,
    borderRadius: 8,
    backgroundColor: "#424242",
    fontFamily: "HelveticaNeue-LightItalic",
    color: "#F8f8f8",
    fontSize: 14,
    paddingLeft: 10,
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
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "black",
    fontFamily: "HelveticaNeue-BoldItalic",
  },
});

export default NewActivity;
