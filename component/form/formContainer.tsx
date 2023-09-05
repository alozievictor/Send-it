import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

type ContainerProps = {
  children: any;
};

const FormContainer: React.FC<ContainerProps> = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView >
        <View >{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FormContainer;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal:20,
    backgroundColor: "#fafafa",
    width: Dimensions.get("window").width,
  },
});
