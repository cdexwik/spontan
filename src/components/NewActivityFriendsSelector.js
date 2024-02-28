//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { MultipleSelectList } from "react-native-dropdown-select-list";

// create a component
const NewActivityFriendsSelector = ({ friendsData, setSelectedFriends }) => {
  return (
    <View>
      {
        // https://www.npmjs.com/package/react-native-dropdown-select-list
      }
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
  );
};

// define your styles

//make this component available to the app
export default NewActivityFriendsSelector;
