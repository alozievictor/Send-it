import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import {
  FontAwesome,
  FontAwesome5,
  Ionicons,
  Entypo,
  AntDesign,
  MaterialIcons,
} from "@expo/vector-icons";
import { AnimatedView, COLORS, SIZES } from "../../constant/Theme";

const Intrack = () => {

  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      style={{
        // paddingTop: insets.top,
        backgroundColor: "#fafafa",
        flex: 1,
        paddingHorizontal: 20,
      }}
    >
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
        <View style={{flexDirection:'row', justifyContent:'space-between', paddingVertical:10 }}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <AntDesign style={{padding:5, backgroundColor:"#ddd", borderRadius:2}} name="CodeSandbox" size={25} color="#e7a368" />
            <View style={{paddingHorizontal:5,}}>
              <Text style={{color:COLORS.title}}>Shipping to{"\n"}kuwba</Text>
            </View>
          </View>
          <View
              style={{
                paddingHorizontal: 15,
                paddingVertical: 9,
                borderRadius: 50,
                backgroundColor: COLORS.active,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: COLORS.white,
                  textAlign: "center",
                }}
              >
                In Transit
              </Text>
          </View>
        </View>
        <View>
          <View style={{flexDirection:'row',alignItems:'center', marginVertical:3}}>
            <Text style={{color:COLORS.small}}>Order ID:</Text>
            <Text style={{paddingHorizontal:5, fontWeight: "bold",}}>#2022194</Text>
          </View>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <Text style={{color:COLORS.small}}>Order Placed:</Text>
            <Text style={{paddingHorizontal:5, fontWeight: "bold", marginVertical:3}}>mon 18 jun 23</Text>
          </View>
          <TouchableOpacity activeOpacity={0.9} style={styles.btnCont}>
            <Text>Track Package</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Intrack;

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
