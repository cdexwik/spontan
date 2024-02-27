import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  Platform,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DateTimePicker from "@react-native-community/datetimepicker";
import { MultipleSelectList } from "react-native-dropdown-select-list";

function NewActivity({ onPress, friends }) {
  const [date, setDate] = useState(new Date());
  const [endTime, setEndTime] = useState(date);
  const [duration, setDuration] = useState(
    new Date(new Date().setHours(0, 0, 0, 0))
  );
  const [responseTime, setResponseTime] = useState(
    new Date(new Date().setHours(0, 0, 0, 0))
  );
  const [responseTimeDate, setResponseTimeDate] = useState(date);
  const [endTimeOutput, setEndTimeOutput] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [showDurationPicker, setShowDurationPicker] = useState(false);
  const [showResponseTimePicker, setShowResponseTimePicker] = useState(false);

  const [friendsData, setFriendsData] = useState([]);
  const [selectedFriends, setSelectedFriends] = useState([]);

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
    let nd = new Date(date.getTime());
    nd.setHours(nd.getHours() + respH);
    nd.setMinutes(nd.getMinutes() + respM);
    setResponseTimeDate(nd);
  }, [date, responseTime]);

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
                <Pressable onPress={onPress}>
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
              />
              <Text style={styles.inputLabel}>Description</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="words"
                autoCorrect={false}
                cursorColor="#D9D9D9"
                placeholder="I feel like..."
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
              />

              <Text style={styles.inputLabel}>Select Date</Text>
              {!showDatePicker && (
                <Pressable onPress={toggleDatePicker}>
                  <TextInput
                    style={[styles.input, { color: "#F8f8f8" }]}
                    autoCapitalize="words"
                    cursorColor="#D9D9D9"
                    value={date.toDateString()}
                    onChangeText={setDate}
                    editable={false}
                    onPressIn={toggleDatePicker}
                    placeholder={date.toDateString()}
                  />
                </Pressable>
              )}
              {showDatePicker && (
                <DateTimePicker
                  mode="date"
                  display="spinner"
                  value={date}
                  onChange={onChangeSetDate}
                  minimumDate={new Date()}
                  maximumDate={
                    new Date(new Date().setDate(new Date().getDate() + 1))
                  }
                />
              )}

              {showDatePicker && Platform.OS === "ios" && (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <TouchableOpacity
                    onPress={toggleDatePicker}
                    style={styles.pickerButton}
                  >
                    <Text style={styles.buttonText}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={confirmIosDate}
                    style={[
                      styles.pickerButton,
                      { backgroundColor: "#AFE8C4" },
                    ]}
                  >
                    <Text style={styles.buttonText}>Confirm</Text>
                  </TouchableOpacity>
                </View>
              )}

              <View>
                <Text style={styles.inputLabel}>Select Start Time</Text>
                {!showTimePicker && (
                  <Pressable onPressIn={toggleTimePicker}>
                    <TextInput
                      style={[
                        styles.input,
                        {
                          color: "#F8f8f8",
                          width: 80,
                          textAlign: "center",
                          paddingLeft: -10,
                        },
                      ]}
                      autoCapitalize="words"
                      cursorColor="#D9D9D9"
                      value={date.toLocaleString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                      onChangeText={setDate}
                      editable={false}
                      onPressIn={toggleTimePicker}
                      placeholder={date.toDateString()}
                    />
                  </Pressable>
                )}
                {showTimePicker && (
                  <DateTimePicker
                    mode="time"
                    display="spinner"
                    value={date}
                    is24Hour={true}
                    locale="en_GB"
                    onChange={onChangeSetTime}
                    minimumDate={new Date()}
                    maximumDate={
                      new Date(new Date().setDate(new Date().getDate() + 2))
                    }
                  />
                )}

                {showTimePicker && Platform.OS === "ios" && (
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                    }}
                  >
                    <TouchableOpacity
                      onPress={toggleTimePicker}
                      style={styles.pickerButton}
                    >
                      <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={confirmIosTime}
                      style={[
                        styles.pickerButton,
                        { backgroundColor: "#AFE8C4" },
                      ]}
                    >
                      <Text style={styles.buttonText}>Confirm</Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
              <View>
                <Text style={styles.inputLabel}>Select Duration</Text>
                {!showDurationPicker && (
                  <Pressable onPressIn={toggleDurationPicker}>
                    <TextInput
                      style={[
                        styles.input,
                        {
                          color: "#F8f8f8",
                          width: 80,
                          textAlign: "center",
                          paddingLeft: -10,
                        },
                      ]}
                      autoCapitalize="words"
                      cursorColor="#D9D9D9"
                      value={duration.toLocaleString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                      onChangeText={setDuration}
                      editable={false}
                      onPressIn={toggleDurationPicker}
                      placeholder={duration.toDateString()}
                    />
                  </Pressable>
                )}
                {showDurationPicker && (
                  <DateTimePicker
                    mode="time"
                    display="spinner"
                    date={new Date(new Date().setHours(0, 0, 0, 0))}
                    value={duration}
                    is24Hour={true}
                    locale="en_GB"
                    onChange={onChangeSetDuration}
                  />
                )}

                {showDurationPicker && Platform.OS === "ios" && (
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                    }}
                  >
                    <TouchableOpacity
                      onPress={toggleDurationPicker}
                      style={styles.pickerButton}
                    >
                      <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={confirmIosDuration}
                      style={[
                        styles.pickerButton,
                        { backgroundColor: "#AFE8C4" },
                      ]}
                    >
                      <Text style={styles.buttonText}>Confirm</Text>
                    </TouchableOpacity>
                  </View>
                )}
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
                {!showResponseTimePicker && (
                  <Pressable onPressIn={toggleResponseTimePicker}>
                    <TextInput
                      style={[
                        styles.input,
                        {
                          color: "#F8f8f8",
                          width: 80,
                          textAlign: "center",
                          paddingLeft: -10,
                        },
                      ]}
                      autoCapitalize="words"
                      cursorColor="#D9D9D9"
                      value={responseTime.toLocaleString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                      onChangeText={setResponseTime}
                      editable={false}
                      onPressIn={toggleResponseTimePicker}
                      placeholder={responseTime.toDateString()}
                    />
                  </Pressable>
                )}
                {showResponseTimePicker && (
                  <DateTimePicker
                    mode="time"
                    display="spinner"
                    date={new Date(new Date().setHours(0, 0, 0, 0))}
                    value={responseTime}
                    is24Hour={true}
                    locale="en_GB"
                    onChange={onChangeSetResponseTime}
                  />
                )}

                {showResponseTimePicker && Platform.OS === "ios" && (
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                    }}
                  >
                    <TouchableOpacity
                      onPress={toggleResponseTimePicker}
                      style={styles.pickerButton}
                    >
                      <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={confirmIosResponseTime}
                      style={[
                        styles.pickerButton,
                        { backgroundColor: "#AFE8C4" },
                      ]}
                    >
                      <Text style={styles.buttonText}>Confirm</Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>

              <View>
                {
                  // https://www.npmjs.com/package/react-native-dropdown-select-list
                }
                <Text style={styles.inputLabel}>Invite Friends</Text>
                <MultipleSelectList
                  setSelected={(val) => {
                    setSelectedFriends(val);
                  }}
                  data={friendsData}
                  fontFamily="Helvetica Neue"
                  placeholder="Select friends"
                  searchPlaceholder="Search friends"
                  notFoundText="No friend with this name found"
                  label="Selected Friends"
                  save="key"
                  boxStyles={{
                    backgroundColor: "#424242",
                    fontFamily: "Helvetica Neue",
                    color: "#f8f8f8",
                    borderWidth: 0,
                  }}
                  inputStyles={{
                    fontSize: 16,
                    fontFamily: "Helvetica Neue",
                    color: "#D9D9D9",
                  }}
                  dropdownStyles={{
                    backgroundColor: "#424242",
                    fontFamily: "Helvetica Neue",
                    borderWidth: 0,
                  }}
                  dropdownTextStyles={{
                    color: "#D9D9D9",
                    fontFamily: "Helvetica Neue",
                  }}
                  badgeStyles={{
                    backgroundColor: "#AFE8C4",
                  }}
                  badgeTextStyles={{
                    fontSize: 12,
                    lineHeight: 21,
                    fontWeight: "bold",
                    letterSpacing: 0.25,
                    color: "black",
                    fontFamily: "Helvetica Neue",
                    fontStyle: "italic",
                  }}
                  checkBoxStyles={{
                    backgroundColor: "#D9D9D9",
                    borderWidth: 0,
                  }}
                  labelStyles={{
                    color: "#f8f8f8",
                  }}
                />
              </View>
            </View>
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

  datePicker: {
    height: 120,
    marginTop: -10,
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
