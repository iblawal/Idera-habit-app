import { View, Text, ScrollView } from "react-native";
import { useState } from "react";
import styles from "@/styles/globalStyles";
import HabitItem from "@/components/HabitItem";
import { habits as initialHabits, Habit } from "@/data/data";

const USER = {
  name: "Ideraoluwa",
  initials: "IO",
};

export default function HomeScreen() {
  const [habits, setHabits] = useState<Habit[]>(initialHabits);

  const toggleHabit = (id: number) => {
    setHabits((prev) =>
      prev.map((h) => (h.id === id ? { ...h, completed: !h.completed } : h))
    );
  };

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  const completed = habits.filter((h) => h.completed).length;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.dateText}>{today}</Text>
          <Text style={styles.progressText}>
            {completed}/{habits.length} habits done
          </Text>
        </View>

        {/* Profile Avatar */}
        <View style={styles.avatarRing}>
          <View style={styles.avatarInner}>
            <Text style={styles.avatarInitials}>{USER.initials}</Text>
          </View>
        </View>
      </View>

      {/* Habit Card */}
      <View style={styles.card}>
        <Text style={styles.title}>Today, I have:</Text>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        >
          {habits.map((item) => (
            <HabitItem key={item.id} item={item} onToggle={toggleHabit} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}