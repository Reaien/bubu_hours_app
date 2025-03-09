import { Text, View } from "react-native";
import React from "react";

type Props = {};

const Profile = (props: Props) => {
  return (
    <View className="bg-blue-200 h-screen flex justify-center items-center">
      <Text className="text-4xl text-stone-700">profile</Text>
    </View>
  );
};

export default Profile;
