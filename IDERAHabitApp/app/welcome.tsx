import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "@/styles/globalStyles";

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.welcomeContainer}>
      <View style={styles.circleLarge} />
      <View style={styles.circleSmall} />

      <View style={styles.welcomeCard}>

        {/* Top decorative icons */}
        <View style={styles.leavesTop}>
          <MaterialCommunityIcons name="leaf" size={24} color="#5B8A3C" />
          <Ionicons name="musical-note" size={22} color="#7C5CBF" />
          <Ionicons name="star" size={20} color="#F5C518" />
          <MaterialCommunityIcons name="flower" size={24} color="#FF6B9D" />
          <Ionicons name="musical-notes" size={22} color="#7C5CBF" />
          <Ionicons name="star" size={18} color="#F5C518" />
        </View>

        <Image
          source={require("../assets/images/meditation.jpeg")}
          style={styles.image}
        />

        {/* Bottom decorative icons */}
        <View style={styles.leavesBottom}>
          <MaterialCommunityIcons name="leaf" size={22} color="#5B8A3C" />
          <Ionicons name="star" size={18} color="#F5C518" />
          <MaterialCommunityIcons name="flower" size={22} color="#FF6B9D" />
        </View>

        <Text style={styles.title}>IDERAOLUWA HABIT</Text>
        <Text style={styles.subtitle}>Build better habits daily</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.replace("/(tabs)")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}