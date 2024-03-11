import React, { useState, useEffect } from "react";
import { SearchBar } from "@rneui/base";
import { ScrollView, View } from "react-native";
import SearchList from "./SearchList";

const usersDataBase = [
  {
    userid: "111",
    firstName: "Anna",
    lastName: "Svensson",
    tag: "anna",
    email: "anna@svensson.se",
    picture: "URL to database",
    pendingRequest: true,
    activityData: {
      numberOfInvites: 1,
      numberOfAccepted: 0,
      totalResponseTime: 200,
    },
  },
  {
    userid: "222",
    firstName: "Olle",
    lastName: "Karlsson",
    tag: "Olle",
    email: "olle@karlsson.se",
    picture: "URL to database",
    pendingRequest: false,
    activityData: {
      numberOfInvites: 2,
      numberOfAccepted: 2,
      totalResponseTime: 500,
    },
  },
  {
    userid: "333",
    firstName: "Gina",
    lastName: "Garcia",
    tag: "gina",
    email: "gina@garcia.se",
    picture: "URL to database",
    pendingRequest: false,
    activityData: {
      numberOfInvites: 3,
      numberOfAccepted: 2,
      totalResponseTime: 100,
    },
  },
  {
    userid: "444",
    firstName: "Juan",
    lastName: "Martinez",
    tag: "juan",
    email: "juan@martinez.se",
    picture: "URL to database",
    pendingRequest: true,
    activityData: {
      numberOfInvites: 5,
      numberOfAccepted: 2,
      totalResponseTime: 800,
    },
  },
  {
    userid: "555",
    firstName: "Magda",
    lastName: "Martinez",
    tag: "magda",
    email: "magda@martinez.se",
    picture: "URL to database",
    pendingRequest: true,
    activityData: {
      numberOfInvites: 5,
      numberOfAccepted: 2,
      totalResponseTime: 800,
    },
  },
  {
    userid: "666",
    firstName: "Johan",
    lastName: "Nilsson",
    tag: "Joahn",
    email: "Johan@nilsson.se",
    picture: "URL to database",
    pendingRequest: true,
    activityData: {
      numberOfInvites: 5,
      numberOfAccepted: 2,
      totalResponseTime: 800,
    },
  },
  {
    userid: "777",
    firstName: "Luna",
    lastName: "Lovegood",
    tag: "Luna",
    email: "Luna@Lovegood.se",
    picture: "URL to database",
    pendingRequest: true,
    activityData: {
      numberOfInvites: 5,
      numberOfAccepted: 2,
      totalResponseTime: 800,
    },
  },
  {
    userid: "888",
    firstName: "Luke",
    lastName: "Skywalker",
    tag: "Luke",
    email: "Luke@skywalker.se",
    picture: "URL to database",
    pendingRequest: true,
    activityData: {
      numberOfInvites: 5,
      numberOfAccepted: 2,
      totalResponseTime: 800,
    },
  },
  {
    userid: "999",
    firstName: "Bilbo",
    lastName: "Baggins",
    tag: "Bilbo",
    email: "Bilbo@Baggins.se",
    picture: "URL to database",
    pendingRequest: true,
    activityData: {
      numberOfInvites: 5,
      numberOfAccepted: 2,
      totalResponseTime: 800,
    },
  },
];

const Search = () => {
  const [searchField, setSearchField] = useState("");
  const [users, setUsers] = useState(usersDataBase);
  const [filteredUsers, setFilteredUsers] = useState(users);

  const updateSearchField = (searchField) => {
    setSearchField(searchField);
  };

  useEffect(() => {
    const newFilteredUsers = users.filter((user) => {
      //return user.tag.includes(searchField);
      return user.tag.startsWith(searchField);
    });
    setFilteredUsers(newFilteredUsers);
  }, [searchField]);

  return (
    <View style={{ flex: 1, alignContent: "space-between" }}>
      <SearchBar
        platform="default"
        autoCapitalize="none"
        autoCorrect={false}
        cursorColor="#D9D9D9"
        containerStyle={{
          backgroundColor: "#3B3B3B",
          borderBottomColor: "transparent",
          borderTopColor: "transparent",
          justifyContent: "center",
          width: "98%",
          alignSelf: "center",
        }}
        inputContainerStyle={{
          height: 32,
          borderRadius: 8,
          backgroundColor: "#424242",
        }}
        inputStyle={{
          fontFamily: "HelveticaNeue-LightItalic",
          color: "rgba(217, 217, 217, 0.8)",
          fontSize: 13,
        }}
        leftIconContainerStyle={{}}
        rightIconContainerStyle={{}}
        loadingProps={{}}
        onChangeText={updateSearchField}
        onClearText={() => console.log(onClearText())}
        placeholder="Search friends by tag"
        placeholderTextColor="#A0A0A0"
        round
        cancelButtonTitle="Cancel"
        cancelButtonProps={{}}
        onCancel={() => console.log(onCancel())}
        value={searchField}
      />
      <View
        style={{
          marginVertical: 5,
          borderBottomColor: "#A0A0A0",
          borderBottomWidth: 1,
          alignSelf: "center",
          width: "93%",
        }}
      />

      {searchField && (
        <ScrollView style={{ flex: 1 }}>
          <SearchList filterdUsers={filteredUsers} />
        </ScrollView>
      )}
    </View>
  );
};

export default Search;
