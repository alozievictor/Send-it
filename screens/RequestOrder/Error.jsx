import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AnimatedView } from "../../constant/Theme";

const Error = ({navigation}) => {
  return (
    <SafeAreaView style={styles.constainer}>
      <AnimatedView
        animation={"fadeInUp"}
        duration={1000}
        delay={600}
        style={styles.content}
      >
        <Image
          source={require("../../assets/error.png")}
          style={{ width: 130, height: 130, borderRadius: 50 }}
          resizeMode="cover"
        />
        <View style={styles.contentView}>
          <Text style={styles.successText}>Oooops Error</Text>
          <Text style={styles.info}>
            Something went wrong please try again thank you.
          </Text>
        </View>
        <TouchableOpacity activeOpacity={0.8} style={styles.btnCont} onPress={()=> navigation.navigate("Checkout")}>
          <Text style={styles.btnText}>Continue</Text>
        </TouchableOpacity>
      </AnimatedView>
    </SafeAreaView>
  );
};

export default Error;

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    height: "100%",
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
  },
  successText: {
    textAlign: "center",
    fontSize: 35,
    fontWeight: "500",
    color: "#FF0100",
  },
  info: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "400",
    color: "#072f4a",
    paddingTop: 5,
    paddingBottom: 15,
    marginVertical: 20,
  },
  contentView: {
    marginVertical: 15,
  },
  btnCont: {
    height: 50,
    width: "100%",
    backgroundColor: "#FF0100",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 35,
    marginTop: 20,
  },
  btnText: {
    fontSize: 18,
    fontWeight: "500",
    color: "white",
    textAlign: "center",
  },
});
