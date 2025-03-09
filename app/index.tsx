import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import portada from "../assets/images/portada.png";

export default function App() {
  return (
    <View className="bg-orange-50 h-screen flex justify-center items-center">
      <Text className="text-red-800 text-4xl font-umedium">Bubu Hours</Text>

      <StatusBar style="auto" />
      <Link href="/home">
        <Image source={portada} className="w-72 h-72" />
      </Link>
    </View>
  );
}
