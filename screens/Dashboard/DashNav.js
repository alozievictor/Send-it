import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import Dashboard from "./dashboard";
import Wallet from "./Wallet";
// import NewOrder from "../RequestOrder/NewOrder";
// import ReDets from "./ReDets";
// import Payment from "../RequestOrder/Payment";
// import ProfileNav from "../Profile/ProfileNav";

const Stack = createNativeStackNavigator();

const DashNav = () => {
  return (
      <Stack.Navigator
        screenOptions={{
          header: () => null,
          
        }}
      >
        <Stack.Screen name="dashboard" component={Dashboard} />
        <Stack.Screen name="Wallet" component={Wallet} />
        {/* <Stack.Screen name="Neworder" component={NewOrder}/>
        <Stack.Screen name="Recieve" component={ReDets}/>
        <Stack.Screen name="Payment" component={Payment}/> */}
        
      </Stack.Navigator>
  );
};

export default DashNav;

const styles = StyleSheet.create({});
