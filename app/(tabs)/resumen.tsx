import { View, Text, ScrollView, Image } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import images from "../../constants/images";

// Definición de tipos
type SavedHours = {
  [key: string]: string; // Un objeto donde la clave es la fecha (string) y el valor son las horas (string)
};

const Resumen = () => {
  const [savedHours, setSavedHours] = useState<SavedHours>({});

  // Cargar horas guardadas al iniciar la aplicación
  useEffect(() => {
    const loadSavedHours = async () => {
      try {
        const saved = await AsyncStorage.getItem("savedHours");
        if (saved) {
          setSavedHours(JSON.parse(saved)); // Parsear el JSON y actualizar el estado
        }
      } catch (error) {
        console.error("Error al cargar las horas guardadas:", error);
      }
    };
    loadSavedHours();
  }, []);

  // Convertir el objeto savedHours en un array y ordenarlo por fecha (ascendente)
  const sortedEntries = Object.entries(savedHours).sort((a, b) => {
    return new Date(b[0]).getTime() - new Date(a[0]).getTime(); // Ordenar del más nuevo al más viejo
  });

  // Función para formatear la fecha en día/mes/año
  const formatDate = (date: string) => {
    const [year, month, day] = date.split("-"); // Dividir la fecha en partes
    return `${day}/${month}/${year}`; // Reorganizar en día/mes/año
  };

  return (
    <View className="flex-1 items-center p-4 bg-gray-50">
      {/* Imagen de fondo */}
      <View className="absolute bottom-0 right-0 opacity-30">
        <Image
          className="w-60 h-52 mb-4"
          source={images.dudu1}
          // Tamaño de la imagen
          resizeMode="contain" // Ajustar la imagen sin distorsionar
        />
      </View>
      <ScrollView>
        {sortedEntries.length === 0 ? (
          <Text className="text-gray-600 text-center mt-5">
            No hay registros guardados.
          </Text>
        ) : (
          sortedEntries.map(([date, hours]) => (
            <View
              key={date}
              className="w-[300px] h-[100px] bg-[#fdedec] rounded-lg shadow-sm flex justify-center items-center mb-3"
            >
              <Text className=" text-lg font-bold text-gray-800">
                {formatDate(date)}
              </Text>
              <Text className="text-lg text-gray-600">
                {parseInt(hours) < 2 ? hours + " hora" : hours + " horas"}{" "}
              </Text>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
};

export default Resumen;
