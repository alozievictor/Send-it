import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "./Profile";
import Edit from "./Edit";

const Stack = createNativeStackNavigator();

const ProfileNav = () => {

  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
    >
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Edit" component={Edit} />
    </Stack.Navigator>
  );
};

export default ProfileNav;

const styles = StyleSheet.create({});
