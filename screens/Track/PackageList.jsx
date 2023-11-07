import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ProductRow from "./ProductRow";
import { Feather } from "@expo/vector-icons";
import { AnimatedView, COLORS, SIZES } from "../../constant/Theme";

const PackageList = ({ navigation }) => {
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
          <Text style={{ paddingLeft: 10, fontSize: 20, fontWeight: "500" }}>
            {/* Track */}
          </Text>
        </View>
        <ProductRow />
      </AnimatedView>
    </SafeAreaView>
  );
};

export default PackageList;

const styles = StyleSheet.create({});
