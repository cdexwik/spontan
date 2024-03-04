import React, { useState, useEffect } from "react";
import { Text, StyleSheet } from "react-native";
import { format } from "date-fns";
import { min } from "moment";

export default function Timer(responseTime) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const endTime = responseTime.toDate().getTime();
      const difference = endTime - now;

      if (difference < 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }, 1000);

    return () => clearInterval(interval);
  }, [responseTime]);

  if (days > 0) {
    const formattedResponseTime = format(responseTime.toDate(), "HH:mm:ss");
    return <Text style={styles.topText}>{formattedResponseTime}</Text>;
  } else if (days == 0 && hours == 0 && minutes == 0 && seconds == 0) {
    return <Text style={styles.topText}>Time Out</Text>;
  } else {
    return (
      <Text style={styles.topText}>
        {hours < 10 ? `0${hours}` : hours}:
        {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  topText: {
    fontSize: 12,
    color: "rgba(160, 160, 160, 0.7)",
    fontFamily: "HelveticaNeue-LightItalic",
  },
});
