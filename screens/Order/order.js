import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import OrderTab from "./OrderTab";

const Delivery = () => {

  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      style={{
        // paddingTop: insets.top,
        backgroundColor: "#fafafa",
        flex: 1,
        paddingHorizontal:20,
      }}
    >
      <View>
        <Text>Delivery</Text>
        <OrderTab/>
        
      </View>
    </SafeAreaView>
  );
};

export default Delivery;

const styles = StyleSheet.create({});
