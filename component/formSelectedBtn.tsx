import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React from "react";


type OptionBtnProps = {
  title: any;
  backgroundColor: any;
  style: any;
  onPress: any;
};

export const FormSelectedBtn: React.FC<OptionBtnProps>= ({title, backgroundColor, style, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[styles.container, style ,{backgroundColor}]}
      >
        <Text style={styles.title}>
          {title}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FormSelectedBtn;

const styles = StyleSheet.create({
  container: {
    height: 45,
    backgroundColor: "#ccc",
    width: "35%",
    justifyContent: "center",
    alignItems: "center",
    // borderRadius: 5,
  },
  title: { 
    color: "#737a80", 
    fontSize: 16, 
    fontWeight: "500" }
});
