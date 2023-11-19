import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ProductRow from "./ProductRow";
import { Feather } from "@expo/vector-icons";
import { AnimatedView, COLORS, SIZES } from "../../constant/Theme";
import UseFetch from "../../component/sub-component/UseFetch";


const PackageList = ({ navigation }) => {

  const { Refresh } = UseFetch(); // Access the Refresh function directly

  const handleRefresh = () => {
   Refresh(); 
  };

  return (
    <SafeAreaView
    style={{
      flex: 1,
    }}
    >
      <AnimatedView animation={"lightSpeedIn"} duration={1000} delay={300}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 15,
            paddingHorizontal: 10,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.goBack()}
            style={{
              borderRadius: 50,
              padding: 2,
              marginVertical: 3,
            }}
          >
            <Feather name="chevron-left" size={24} color="black" />
          </TouchableOpacity>
          <Text style={{ paddingLeft: 10, fontSize: 18, fontWeight: "500" }}>
            Packages
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleRefresh}
            style={{
              borderRadius: 50,
              padding: 2,
              marginVertical: 3,
            }}
          >
            <Feather name="refresh-ccw" size={26} color="black" />
          </TouchableOpacity>

        </View>
        <ProductRow />
      </AnimatedView>
      
    </SafeAreaView>
  );
};

export default PackageList;

const styles = StyleSheet.create({});
