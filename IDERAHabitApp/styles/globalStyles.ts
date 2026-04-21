import { StyleSheet } from "react-native";
import { COLORS } from "../constants/theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    padding: 20,
    paddingTop: 60,
  },

  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    padding: 20,
  },

  center: {
    justifyContent: "center",
    alignItems: "center",
  },

 card: {
    backgroundColor: COLORS.white,
    borderRadius: 24,
    padding: 20,
    flex: 1,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: COLORS.dark,
    marginBottom: 16,
  },

  subtitle: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
    marginBottom: 20,
    marginTop: 4,
  },

  centerText: {
    color: "#888",
    fontSize: 16,
    textAlign: "center",
  },

  welcomeContainer: {
    flex: 1,
    backgroundColor: "#FFB6C1",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  welcomeCard: {
    backgroundColor: COLORS.white,
    borderRadius: 28,
    padding: 24,
    width: "100%",
    alignItems: "center",
  },

  circleLarge: {
    position: "absolute",
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: "rgba(255,255,255,0.08)",
    top: -60,
    left: -60,
  },

  circleSmall: {
    position: "absolute",
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: "rgba(255,255,255,0.08)",
    bottom: 40,
    right: -40,
  },

  leavesTop: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 6,
    marginBottom: 8,
  },

  leavesBottom: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    marginTop: 4,
    marginBottom: 12,
  },

  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },

  button: {
    backgroundColor: "#87CEEB",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
    width: "100%",
    marginTop: 10,
  },

  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "700",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  dateText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "700",
  },

  progressText: {
    color: "rgba(255,255,255,0.75)",
    fontSize: 13,
    marginTop: 2,
  },

  avatarRing: {
    width: 52,
    height: 52,
    borderRadius: 26,
    borderWidth: 2.5,
    borderColor:  "#87CEEB",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#87CEEB",
    overflow: "hidden",
  },

  avatarInner: {
    width: 47,
    height: 47,
    borderRadius: 23,
    backgroundColor: "#87CEEB",  
    justifyContent: "center",
    alignItems: "center",
  },

  avatarInitials: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "800",
    letterSpacing: 1,
  },

  habitItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 0.5,
    borderColor: COLORS.light,
  },

  habitText: {
    fontSize: 15,
    color: COLORS.dark,
    flex: 1,
  },

  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },

  checked: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 11,
    fontSize: 15,
    marginBottom: 15,
  },
});