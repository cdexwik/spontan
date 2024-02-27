import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Modal } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import ReceivedActivity from "../components/ReceivedActivity";
import NewActivityButton from "../components/NewActivityButton";
import NewActivity from "./NewActivity";

function Main() {
  const [isModalVisible, setModalVisible] = useState(false);

  const onPressShowModalHandler = () => setModalVisible(true);
  const onPressHideModalHandler = () => setModalVisible(false);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#2B2B2B" }}>
        <ScrollView
          style={{ flex: 1, backgroundColor: "#2B2B2B", marginBottom: 30 }}
        >
          <View style={styles.container}>
            <ReceivedActivity
              tag={"tag"}
              category={"category"}
              time={"09:37"}
              title={"Heading title from the form"}
              description={"I want to go to the gym tomorrow at 13:00"}
              activityTime={"Tomorrow 13:00 - 15:00"}
              place={"Fitness Fridhemsplan"}
            />
            <ReceivedActivity
              tag={"tag"}
              category={"category"}
              time={"09:37"}
              title={"Heading title from the form"}
              description={"I want to go to the gym tomorrow at 13:00"}
              activityTime={"Tomorrow 13:00 - 15:00"}
              place={"Fitness Fridhemsplan"}
            />
            <ReceivedActivity
              tag={"tag"}
              category={"category"}
              time={"09:37"}
              title={"Heading title from the form"}
              description={"I want to go to the gym tomorrow at 13:00"}
              activityTime={"Tomorrow 13:00 - 15:00"}
              place={"Fitness Fridhemsplan"}
            />
            <ReceivedActivity
              tag={"tag"}
              category={"category"}
              time={"09:37"}
              title={"Heading title from the form"}
              description={"I want to go to the gym tomorrow at 13:00"}
              activityTime={"Tomorrow 13:00 - 15:00"}
              place={"Fitness Fridhemsplan"}
            />
          </View>
        </ScrollView>
        <NewActivityButton
          style={styles.newActivity}
          onPress={onPressShowModalHandler}
        />
        <Modal
          animationType="slide"
          visible={isModalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <NewActivity onPress={onPressHideModalHandler} />
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2B2B2B",
    alignItems: "center",
    maxWidth: 480,
  },
});

export default Main;
