import { Text, View, StyleSheet, } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home screen</Text>
      <Link href="/about" style={styles.button}>
        Go to About screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
  button: {
    fontSize: 18,
    backgroundColor: "#1e90ff", // Blu acceso
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8, // Angoli arrotondati
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Ombra su Android
  }
  
});
