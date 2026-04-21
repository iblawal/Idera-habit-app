import { View, Text } from "react-native";
import styles from "@/styles/globalStyles";

export default function StatsScreen() {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.card}>
        <Text style={styles.title}>Your Stats</Text>
        <Text style={styles.centerText}>Coming soon...</Text>
      </View>
    </View>
  );
}