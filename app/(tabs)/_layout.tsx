import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs, Redirect } from "expo-router";
import { icons } from "../../constants";

interface TabIconProps {
  icon: any;
  color: string;
  focused: boolean;
  name?: string;
}

const TabIcon = ({ icon, color, focused, name }: TabIconProps) => {
  return (
    <View className="items-center justify-center mt-4">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`${
          focused ? "font-ubold" : "font-ulight"
        } text-xs w-20 text-center`}
      >
        {name}
      </Text>
    </View>
  );
};

type Props = {};

const TabsLayout = (props: Props) => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#f5b7b1",
          tabBarInactiveTintColor: "#ccd1d1",
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                focused={focused}
                name="Home"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="agenda"
          options={{
            title: "Agenda",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.calendario}
                color={color}
                focused={focused}
                name="Agenda"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="resumen"
          options={{
            title: "Resumen",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.resumen}
                color={color}
                focused={focused}
                name="Resumen"
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
