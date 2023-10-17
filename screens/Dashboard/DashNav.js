import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import Dashboard from "./dashboard";

const Stack = createNativeStackNavigator();

const DashNav = () => {
  return (
      <Stack.Navigator
        screenOptions={{
          header: () => null,
          
        }}
      >
        <Stack.Screen name="dashboard" component={Dashboard} />
      </Stack.Navigator>
  );
};

export default DashNav;

const styles = StyleSheet.create({});
