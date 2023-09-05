import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewOrder from "./NewOrder";
import ReDets from "./ReDets";
import Payment from "./Payment";

const Stack = createNativeStackNavigator();

const CreateDelivery = () => {
  return (
      <Stack.Navigator
        screenOptions={{
          header: () => null,
          
        }}
      >
        <Stack.Screen name="Neworder" component={NewOrder}/>
        <Stack.Screen name="Recieve" component={ReDets}/>
        <Stack.Screen name="Payment" component={Payment}/>
        
      </Stack.Navigator>
  );
};

export default CreateDelivery;

const styles = StyleSheet.create({});
