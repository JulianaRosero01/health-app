import * as React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../src/assets/salud.png")}
        style={styles.image}
      />
      <Text style={styles.titulo}>Bienvenido a Health App</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",   // centro vertical
    alignItems: "center",       // centro horizontal
    paddingBottom: 60,          // espacio adicional sobre el tab
    paddingTop: 40,             // espacio superior
    backgroundColor: "#fff",    // para verificar los márgenes
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
