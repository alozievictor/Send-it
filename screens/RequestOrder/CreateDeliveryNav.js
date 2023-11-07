import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewOrder from "./NewOrder";
import ReDets from "./ReDets";
import Payment from "./Payment";
import Checkout from "./Checkout";
import Success from "./Success";
import Error from "./Error";

const Stack = createNativeStackNavigator();

const CreateDelivery = () => {
  return (
      <Stack.Navigator
        // initialRouteName="Success"
        screenOptions={{
          header: () => null,
        }}
      >
        <Stack.Screen name="Neworder" component={NewOrder}/>
        <Stack.Screen name="Recieve" component={ReDets}/>
        <Stack.Screen name="Checkout" component={Checkout}/>
        <Stack.Screen name="Payment" component={Payment}/>
        <Stack.Screen name="Success" component={Success}/>
        <Stack.Screen name="Error" component={Error}/>

      </Stack.Navigator>
  );
};

export default CreateDelivery;

const styles = StyleSheet.create({});
