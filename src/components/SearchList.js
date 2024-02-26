import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchResult from "./SearchResult";

function renderSearchResultCB(user) {
  {
    console.log(user);
  }
  return (
    <SearchResult
      key={user.userid}
      firstName={user.firstName}
      lastName={user.lastName}
      tag={user.tag}
      pendingRequest={user.pendingRequest}
      activityData={user.activityData}
    />
  );
}

const SearchList = ({ filterdUsers }) => {
  return (
    <View style={styles.container}>
      {filterdUsers.map(renderSearchResultCB)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignContent: "space-between",
    justifyContent: "center",
  },
});

export default SearchList;
