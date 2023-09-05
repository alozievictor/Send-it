import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Delivery from "./order";
import OrderTab from "./OrderTab";
import { SafeAreaView } from "react-native-safe-area-context";
import DeliveryHistory from "./AllOrder";

const Stack = createNativeStackNavigator();

const OrderNav = () => {
  return (
   
      <Stack.Navigator
        screenOptions={{
          header: () => null,
        }}
      >
        <Stack.Screen name="DeliveryHistory" component={DeliveryHistory} />
      </Stack.Navigator>

  );
};

export default OrderNav;

const styles = StyleSheet.create({});
