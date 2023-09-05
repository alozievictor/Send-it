import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import React from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import Button from "../../component/Button";
import { AnimatedView, COLORS, SIZES } from "../../constant/Theme";
import { color } from "react-native-reanimated";

const width = Dimensions.get("window");

const Onboard = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View>
          <Image
            style={{ width: SIZES.width - 80, height:400, borderRadius: 8, borderWidth:1, }}
            source={require("../../assets/yeah.png")}
            resizeMode="cover"
          />
          <View style={styles.textcont}>
            <Text style={styles.firstText}>Fastest Delivery</Text>
            <Text style={styles.secondText}>EsayTrip a fast, Reliable logistics services solution for all kind of parcels</Text>
          </View>
        </View>
        <View style={styles.btncont}>
          <Button title="Get Start" onPress={() => navigation.navigate("Login")} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Onboard;

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:"center",
    alignItems:'center',
    paddingHorizontal:20,
  },
  firstText: {
    textAlign:'center',
    color:'#000',
    fontWeight:"600",
    fontSize:24,
    marginVertical:4
  },
  secondText: {
    textAlign:'center',
    color:'#000',
    fontSize:18,
    color:"gray",
    marginVertical:4
  },
  textcont: {
    // borderWidth:1,
    // borderColor:"#ccc"
  },
  btncont: {
    marginVertical:40
    
  }

});
