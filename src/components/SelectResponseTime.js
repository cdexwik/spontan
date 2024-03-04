//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Platform,
  TouchableOpacity,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

// create a component
const SelectResponseTime = ({
  showResponseTimePicker,
  responseTime,
  setResponseTime,
  toggleResponseTimePicker,
  onChangeSetResponseTime,
  confirmIosResponseTime,
}) => {
  return (
    <View>
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
            onPress={toggleResponseTimePicker}
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
            style={[styles.pickerButton, { backgroundColor: "#AFE8C4" }]}
          >
            <Text style={styles.buttonText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
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

//make this component available to the app
export default SelectResponseTime;
