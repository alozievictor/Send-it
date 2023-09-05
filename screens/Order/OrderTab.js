import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Pending from "./Pending";
import Delivered from "./Delivered";
import Intrack from "./Intrack";
import AllOrders from "./AllOrder";

const TopTab = createMaterialTopTabNavigator();

const OrderTab = () => {
  return (
    <TopTab.Navigator
      style={{ backgroundColor: '#FAFAFA' }}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          marginVertical: 5,
          marginHorizontal: 5,
          borderRadius:5,
          elevation: 5,
          paddingVertical: 5,
          backgroundColor:"white",
          borderTopWidth: 0,
          // borderWidth:0.5,
          // borderColor:"#e7a368",
          
        },
        tabBarActiveTintColor: "#e7a368",
        tabBarInactiveTintColor: "gray",
        tabBarPressOpacity:0.5,
        
        
        
        
      }}
    >
      <TopTab.Screen name="All" component={AllOrders} />
      <TopTab.Screen name="Pending" component={Pending} />
      <TopTab.Screen name="Intrack" component={Intrack} />
      <TopTab.Screen name="Delivered" component={Delivered} />
    </TopTab.Navigator>
  );
};

export default OrderTab;

const styles = StyleSheet.create({});
