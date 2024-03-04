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
const SelectStartTime = ({
  showTimePicker,
  date,
  setDate,
  toggleTimePicker,
  onChangeSetTime,
  confirmIosTime,
}) => {
  return (
    <View>
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
          maximumDate={new Date(new Date().setDate(new Date().getDate() + 2))}
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
    fontFamily: "HelveticaNeue-Normal",
    color: "#D9D9D9",
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
  },
  buttonText: {
    fontSize: 12,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "black",
    fontFamily: "HelveticaNeue-BoldItalic",
  },
});

//make this component available to the app
export default SelectStartTime;
