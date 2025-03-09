import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { Calendar, DateData, LocaleConfig } from "react-native-calendars";
import { Button } from "react-native";
import { Picker } from "@react-native-picker/picker";

// Configuración del idioma en español del calendario config obligatoria de la libreria
LocaleConfig.locales["es"] = {
  monthNames: [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  monthNamesShort: [
    "Ene.",
    "Feb.",
    "Mar.",
    "Abr.",
    "May.",
    "Jun.",
    "Jul.",
    "Ago.",
    "Sep.",
    "Oct.",
    "Nov.",
    "Dic.",
  ],
  dayNames: [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ],
  dayNamesShort: ["Dom.", "Lun.", "Mar.", "Mié.", "Jue.", "Vie.", "Sáb."],
  today: "Hoy",
};
LocaleConfig.defaultLocale = "es";

type SavedHours = {
  [key: string]: string; // Un objeto donde la clave es la fecha (string) y el valor son las horas (string)
};

const Calendario = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [hours, setHours] = useState("");
  const [savedHours, setSavedHours] = useState<SavedHours>({});

  const onDayPress = (day: DateData) => {
    setSelectedDate(day.dateString);
    setHours(savedHours[day.dateString] || "");
  };

  //Grabar horas y alerta si no se selecciona una fecha
  const saveHours = () => {
    if (!selectedDate) {
      alert("Por favor, selecciona un día antes de guardar las horas.");
      return;
    }
    setSavedHours({
      ...savedHours,
      [selectedDate]: hours,
    });
  };
  return (
    <View className="flex-1 p-4 bg-gray-50">
      {/* Calendario */}
      <Calendar
        onDayPress={onDayPress}
        markedDates={{
          [selectedDate]: { selected: true, selectedColor: "#f5b7b1" },
        }}
        theme={{
          calendarBackground: "#ffffff",
          selectedDayBackgroundColor: "#f5b7b1",
          todayTextColor: "#3b82f6",
          dayTextColor: "#000000",
          textDisabledColor: "#d1d5db",
          arrowColor: "#f5b7b1",
        }}
      />

      {/* Fecha seleccionada */}
      <Text className="mt-4 text-lg text-gray-800">
        Fecha seleccionada: {selectedDate}
      </Text>

      {/* Selector numérico de horas extras */}
      <View className="mt-4 border border-gray-300 rounded-lg">
        <Picker
          selectedValue={hours}
          onValueChange={(itemValue) => setHours(itemValue)}
        >
          {Array.from({ length: 24 }, (_, i) => i + 1).map((hour) => (
            <Picker.Item
              key={hour}
              label={hour < 2 ? hour + " hora" : hour + " horas"}
              value={hour}
            />
          ))}
        </Picker>
      </View>

      {/* Botón para guardar */}
      <Button title="Guardar" onPress={saveHours} />

      {/* Horas guardadas */}
      <Text className="mt-4 text-lg text-gray-800">
        Horas guardadas: {savedHours[selectedDate] || "0"}
      </Text>
    </View>
  );
};

export default Calendario;
