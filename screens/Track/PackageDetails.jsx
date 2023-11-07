import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { AnimatedView, COLORS, SIZES } from "../../constant/Theme";
import { useRoute } from "@react-navigation/native";
import Button from "../../component/Button";

// complete the remaining details and wrap the app up.

const PackageDetails = ({ navigation }) => {
  const route = useRoute();
  const { item } = route.params;
  console.log("PASSED ITEM:", item);
  return (
    <SafeAreaView
      style={{
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
        <Text style={{ paddingLeft: 10, fontSize: 18, fontWeight: "500" }}>
          Package Detail
        </Text>
        <Text style={{ paddingLeft: 10, fontSize: 20, fontWeight: "500" }}>
          {/* Track */}
        </Text>
      </View>
      <View style={styles.contentCont}>
        <View style={styles.senderView}>
          <View style={styles.itemCont}>
            <View style={styles.item1}>
              <Text style={styles.item1Text}>Sender Name:</Text>
            </View>
            <View style={styles.item2}>
              <Text style={styles.item2Text}>{item.senderName}</Text>
            </View>
          </View>

          <View style={styles.itemCont}>
            <View style={styles.item1}>
              <Text style={styles.item1Text}>Sender Number:</Text>
            </View>
            <View style={styles.item2}>
              <Text style={styles.item2Text}>{item.senderNumber}</Text>
            </View>
          </View>

          <View style={styles.itemCont}>
            <View style={styles.item1}>
              <Text style={styles.item1Text}>Sender Email:</Text>
            </View>
            <View style={styles.item2}>
              <Text style={styles.item2Text}>{item.senderEmail}</Text>
            </View>
          </View>

          <View style={styles.itemCont}>
            <View style={styles.item1}>
              <Text style={styles.item1Text}>packageNumber:</Text>
            </View>
            <View style={styles.item2}>
              <Text style={styles.item2Text}>{item.packageNumber}</Text>
            </View>
          </View>

          <View style={styles.itemCont}>
            <View style={styles.item1}>
              <Text style={styles.item1Text}>From:</Text>
            </View>
            <View style={styles.item2}>
              <Text style={styles.item2Text}>{item.senderAddress}</Text>
            </View>
          </View>

          <View style={styles.itemCont}>
            <View style={styles.item1}>
              <Text style={styles.item1Text}>Reciever City:</Text>
            </View>
            <View style={styles.item2}>
              <Text style={styles.item2Text}>{item.senderCity}</Text>
            </View>
          </View>

          <View style={styles.itemCont}>
            <View style={styles.item1}>
              <Text style={styles.item1Text}>Reciever Name:</Text>
            </View>
            <View style={styles.item2}>
              <Text style={styles.item2Text}>{item.recieverName}</Text>
            </View>
          </View>

          <View style={styles.itemCont}>
            <View style={styles.item1}>
              <Text style={styles.item1Text}>Reciever Email:</Text>
            </View>
            <View style={styles.item2}>
              <Text style={styles.item2Text}>{item.recieverEmail}</Text>
            </View>
          </View>

          <View style={styles.itemCont}>
            <View style={styles.item1}>
              <Text style={styles.item1Text}>Reciever Number:</Text>
            </View>
            <View style={styles.item2}>
              <Text style={styles.item2Text}>{item.recieverNumber}</Text>
            </View>
          </View>

          <View style={styles.itemCont}>
            <View style={styles.item1}>
              <Text style={styles.item1Text}>To:</Text>
            </View>
            <View style={styles.item2}>
              <Text style={styles.item2Text}>{item.recieverAddress}</Text>
            </View>
          </View>

          <View style={styles.itemCont}>
            <View style={styles.item1}>
              <Text style={styles.item1Text}>Reciever City:</Text>
            </View>
            <View style={styles.item2}>
              <Text style={styles.item2Text}>{item.recieverCity}</Text>
            </View>
          </View>

          <View style={styles.itemCont}>
            <View style={styles.item1}>
              <Text style={styles.item1Text}>Package Name:</Text>
            </View>
            <View style={styles.item2}>
              <Text style={styles.item2Text}>{item.packageName}</Text>
            </View>
          </View>

          <View style={{paddingVertical:10}}>
            <Button title="Delivered" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PackageDetails;

const styles = StyleSheet.create({
  Container: {
    width: "100%",
    height: "100%",
  },
  contentCont: {
    width: "100%",
    height: "93%",
    paddingHorizontal: 5,
  },
  itemCont: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
  item1: {
    width: "35%",
    // borderWidth: 3,
    // borderColor: "green",
  },
  item2: {
    width: "65%",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    //   borderWidth: 3,
    //   borderColor: "red",
  },
  item1Text: {
    fontSize: 17,
    fontWeight: "400",
  },
  item2Text: {
    fontSize: 17,
    fontWeight: "500",
  },
  sender: {
    fontSize: 18,
    fontWeight: "400",
  },
  senderView: {
    width: "100%",
    borderBottomColor: "#ddd",
    borderBottomWidth: 0.5,
    borderStyle: "dashed",
    paddingVertical: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: "500",
    color: "#000",
  },
  btnCont1: {
    height: 55,
    width: "100%",
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 30,
    fontWeight: "500",
  },
  btnCont: {
    height: 55,
    width: "100%",
    backgroundColor: "#e7a368",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 30,
    fontWeight: "500",
  },
});
