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
import { format } from "date-fns";

// create a component
const SelectDate = ({
  showDatePicker,
  date,
  setDate,
  toggleDatePicker,
  onChangeSetDate,
  confirmIosDate,
}) => {
  return (
    <View>
      {/* {!showDatePicker && ( */}
      <Pressable onPress={toggleDatePicker}>
        <TextInput
          style={styles.input}
          autoCapitalize="words"
          cursorColor="#D9D9D9"
          value={format(date, "PPPP")}
          onChangeText={setDate}
          editable={false}
          onPressIn={toggleDatePicker}
          placeholder={format(date.toDateString(), "PPPP")}
        />
      </Pressable>
      {/* )} */}
      {showDatePicker && (
        <DateTimePicker
          mode="date"
          display="spinner"
          value={date}
          onChange={onChangeSetDate}
          minimumDate={new Date()}
          maximumDate={new Date(new Date().setDate(new Date().getDate() + 1))}
          style={styles.datePicker}
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
    height: 32,
    marginTop: 6,
    borderRadius: 8,
    backgroundColor: "#424242",
    fontFamily: "HelveticaNeue-LightItalic",
    color: "#F8f8f8",
    fontSize: 14,
    paddingLeft: 10,
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
export default SelectDate;
