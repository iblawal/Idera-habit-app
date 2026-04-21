import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import styles from "@/styles/globalStyles";

export default function AddScreen() {
  const [title, setTitle] = useState("");

  return (
    <View style={styles.screenContainer}>
      <View style={styles.card}>
        <Text style={styles.title}>Add New Habit</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. Watch Movie"
          value={title}
          onChangeText={setTitle}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add Habit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}