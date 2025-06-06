// src/components/Servicios.tsx

import * as React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const servicios = [
  {
    nombre: "Consulta General",
    descripcion: "Atención médica general para adultos.",
    imagen: require("../assets/consulta.jpg"),
  },
  {
    nombre: "Pediatría",
    descripcion: "Servicios especializados para niños.",
    imagen: require("../assets/pediatria.avif"),
  },
  {
    nombre: "Vacunación",
    descripcion: "Aplicación de vacunas nacionales e internacionales.",
    imagen: require("../assets/vacunacion.avif"),
  },
  {
    nombre: "Ginecologia",
    descripcion: "Servicios especializados para mujeres.",
    imagen: require("../assets/ginecologia.avif"),
  },
];

export default function Servicios() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Portafolio de Servicios Médicos</Text>
      {servicios.map((servicio, index) => (
        <View key={index} style={styles.card}>
          <Image source={servicio.imagen} style={styles.image} />
          <Text style={styles.nombre}>{servicio.nombre}</Text>
          <Text style={styles.descripcion}>{servicio.descripcion}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    width: "100%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  image: {
    width: 200,
    height: 120,
    resizeMode: "contain",
    marginBottom: 10,
  },
  nombre: {
    fontSize: 18,
    fontWeight: "bold",
  },
  descripcion: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
  },
});
