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
        placeholder="Select friends"
        searchPlaceholder="Search friends"
        notFoundText="No friend with this name found"
        label="Selected Friends:"
        save="key"
        boxStyles={{
          paddingLeft: 10,
          backgroundColor: "#424242",
          fontFamily: "HelveticaNeue-LightItalic",
          color: "#f8f8f8",
          fontSize: 14,
          borderWidth: 0,
        }}
        inputStyles={{
          backgroundColor: "#424242",
          fontFamily: "HelveticaNeue-LightItalic",
          color: "#f8f8f8",
          fontSize: 14,
          borderWidth: 0,
          paddingLeft: 5,
        }}
        dropdownStyles={{
          backgroundColor: "#424242",
          fontFamily: "HelveticaNeue-LightItalic",
          color: "#f8f8f8",
          fontSize: 14,
          borderWidth: 0,
        }}
        dropdownTextStyles={{
          fontFamily: "HelveticaNeue-LightItalic",
          color: "#f8f8f8",
          fontSize: 14,
        }}
        badgeStyles={{
          backgroundColor: "#EEDFF6",
        }}
        badgeTextStyles={{
          fontSize: 12,
          lineHeight: 21,
          letterSpacing: 0.25,
          color: "black",
          fontFamily: "HelveticaNeue-BoldItalic",
        }}
        checkBoxStyles={{
          backgroundColor: "#D9D9D9",
          borderWidth: 0,
        }}
        labelStyles={{
          fontFamily: "HelveticaNeue-Italic",
          color: "#f8f8f8",
          fontSize: 14,
        }}
      />
    </View>
  );
};

// define your styles

//make this component available to the app
export default NewActivityFriendsSelector;
