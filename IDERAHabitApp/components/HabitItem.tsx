import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "@/styles/globalStyles";

type Habit = {
  id: number;
  title: string;
  completed: boolean;
};

type Props = {
  item: Habit;
  onToggle: (id: number) => void;
};

export default function HabitItem({ item, onToggle }: Props) {
  return (
    <View style={styles.habitItem}>
      <Text style={styles.habitText}>{item.title}</Text>

      <TouchableOpacity
        style={[styles.checkbox, item.completed && styles.checked]}
        onPress={() => onToggle(item.id)}
      >
        {item.completed && (
          <Ionicons name="checkmark" size={14} color="#fff" />
        )}
      </TouchableOpacity>
    </View>
  );
}