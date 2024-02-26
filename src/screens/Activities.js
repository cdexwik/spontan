import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Modal } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import SentActivity from "../components/SentActivity";
import NewActivityButton from "../components/NewActivityButton";
import NewActivity from "./NewActivity";

function Activities() {
  const [isModalVisible, setModalVisible] = useState(false);

  const onPressHandler = () => setModalVisible(true);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1, backgroundColor: "#2B2B2B" }}>
          <View style={styles.container}>
            <SentActivity />
            <SentActivity />
            <SentActivity />
            <SentActivity />
          </View>
        </ScrollView>
        <NewActivityButton
          style={styles.newActivity}
          onPress={onPressHandler}
        />
        <Modal
          animationType="slide"
          visible={isModalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <NewActivity />
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

  newActivity: {
    flex: 1,
  },
});

export default Activities;
