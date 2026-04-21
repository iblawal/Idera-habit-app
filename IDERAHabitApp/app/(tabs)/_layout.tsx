import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

type ValidIconName =
  | "home"
  | "home-outline"
  | "add-circle"
  | "add-circle-outline"
  | "bar-chart"
  | "bar-chart-outline";

 function TabIcon({
  name,
  outlineName,
  focused,
}: {
  name: ValidIconName;
  outlineName: ValidIconName;
  focused: boolean;
}) {
  const [pressed, setPressed] = useState(false);

  return (
    <TouchableOpacity
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      activeOpacity={1}
    >
      <Ionicons
        name={focused ? name : outlineName}
        size={24}
        color={pressed ? "#FF6B9D" : focused ? "#87CEEB" : "#aaa"}
      />
    </TouchableOpacity>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#87CEEB",
        tabBarInactiveTintColor: "#aaa",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 0,
          elevation: 10,
          shadowOpacity: 0.1,
          height: 60,
          paddingBottom: 8,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              name="home"
              outlineName="home-outline"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: "Add",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              name="add-circle"
              outlineName="add-circle-outline"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          title: "Stats",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              name="bar-chart"
              outlineName="bar-chart-outline"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}