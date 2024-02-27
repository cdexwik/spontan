import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TextInput, Pressable } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import CrossButton from "../components/CrossButton";

function NA({ onPress }) {
  const [date, setDate] = useState(new Date());
  const [endTime, setEndTime] = useState(date);

  useEffect(() => {
    setEndTime(date);
  }, [date]);

  const onChangeSetDate = (e, selectedDate) => {
    setDate(selectedDate);
  };

  const onChangeSetEndTime = (e, selectedDate) => {
    setEndTime(selectedDate);
  };

  const showAlert = () =>
    Alert.alert(
      "Check yout inbox",
      "Please check your inbox to finish the register process.",
      [
        {
          text: "Ok",
          style: "default",
        },
      ],
      {
        cancelable: true,
      }
    );

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
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
            <View style={styles.inputContainer}>
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
              <View style={styles.rowWrapper}>
                <View style={styles.rowLeft}>
                  <DateTimePicker
                    style={{ marginLeft: -10 }}
                    value={date}
                    mode="date"
                    onChange={onChangeSetDate}
                    minimumDate={new Date()}
                    maximumDate={
                      new Date(new Date().setDate(new Date().getDate() + 1))
                    }
                  />
                </View>
                <View style={styles.rowRight} />
              </View>
              <View style={styles.rowWrapper}>
                <View style={styles.rowLeft}>
                  <Text style={styles.inputLabel}>Select Start Time</Text>
                </View>
                <View style={styles.rowRight}>
                  <Text style={styles.inputLabel}>Select End Time</Text>
                </View>
              </View>
              <View style={styles.rowWrapper}>
                <View style={styles.rowLeft}>
                  <DateTimePicker
                    style={{ marginLeft: -10 }}
                    value={date}
                    mode="time"
                    onChange={onChangeSetDate}
                  />
                </View>
                <View style={styles.rowRight}>
                  <DateTimePicker
                    value={endTime}
                    mode="time"
                    onChange={onChangeSetEndTime}
                    minimumDate={new Date(date)}
                  />
                </View>
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
  inputContainer: {
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
    marginBottom: 8,
  },
  input: {
    height: 32,
    borderRadius: 8,
    backgroundColor: "#424242",
    fontFamily: "Helvetica Neue",
    color: "#D9D9D9",
    //fontStyle: "italic",
    fontSize: 12,
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
});

export default NA;
