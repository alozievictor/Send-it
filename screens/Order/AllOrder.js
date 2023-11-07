import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, } from "react-native";
import React from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Feather, AntDesign, MaterialIcons } from "@expo/vector-icons";
import { AnimatedView, COLORS, SIZES } from "../../constant/Theme";

const DeliveryHistory = () => {
  // const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      style={{
        // paddingTop: insets.top,
        backgroundColor: "#fafafa",
        flex: 1,
        paddingHorizontal: 15,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 15,
          paddingVertical: 3,
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
        <Text style={{ paddingLeft: 10, fontSize: 20, fontWeight: "500" }}>
          History
        </Text>
        <Text style={{ paddingLeft: 10, fontSize: 20, fontWeight: "500" }}>
          {/* Track */}
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
      <View styl={{ borderWidth: 3, borderColor: "#ccc", paddingVertical: 3 }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "500",
            color: "#363636",
            paddingVertical: 5,
            marginBottom: 10,
          }}
        >
          Your Delivery
        </Text>

        <View style={{ width: "100%" }}>

          <View
            style={{
              width: "100%",
              paddingHorizontal: 10,
              paddingVertical: 15,
              borderRadius: 10,
              elevation: 5,
              backgroundColor: "#FAFAFA",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 5,
              }}
            >
              <View style={{ width: "50%" }}>
                <Image
                  style={{ width: 150, height: 100, borderRadius: 10 }}
                  source={require("../../assets/card.png")}
                  resizeMode="cover"
                />
              </View>

              <View style={{ width: "50%" }}>
                <View>
                  <Text style={{ paddingHorizontal: 5, fontWeight: "bold" }}>
                    Ear Pod
                  </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text
                    style={{
                      paddingHorizontal: 5,
                      fontWeight: "bold",
                      marginVertical: 3,
                    }}
                  >
                    mon 18 jun 23
                  </Text>
                </View>
                <TouchableOpacity activeOpacity={0.9} style={styles.btnCont}>
                  <Text style={{ fontWeight: "600", fontSize: 17 }}>
                    View Package
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>


        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DeliveryHistory;

const styles = StyleSheet.create({
    btnCont: { 
      height:55, 
      width:'100%', 
      backgroundColor:'#e7a368',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      marginTop:10,
      fontWeight:'500'
  },
});
