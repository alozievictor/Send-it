import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Feather, AntDesign, MaterialIcons } from "@expo/vector-icons";
import { AnimatedView, COLORS, SIZES } from "../../constant/Theme";
import { useNavigation } from "@react-navigation/native";

const Tracker = ({ item }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 15,
      }}
    >
      <View
        style={{
          width: "100%",
          paddingHorizontal: 10,
          paddingVertical: 10,
          borderRadius: 10,
          backgroundColor: "#FAFAFA",
          // marginBottom: 10,
          elevation: 2,
          // borderWidth: 3,
          flexDirection: "row",
        }}
      >
        <Image
          style={{ width: 70, height: 80, borderRadius: 10 }}
          source={require("../../assets/box.png")}
          resizeMode="cover"
        />

        <View style={{width:"80%"}}>
        <Text
            style={{
              paddingHorizontal: 5,
              fontWeight: "400",
              marginVertical: 3,
            }}
          >
            PackageID:
            <Text style={{ paddingHorizontal: 5, fontWeight: "500", fontSize:17 }}>{item.packageNumber}</Text>
          </Text>
          <Text style={{ paddingHorizontal: 5, fontWeight: "400" }}>
            Package Name: <Text style={{ paddingHorizontal: 5, fontWeight: "500", fontSize:17 }}>{item.packageName}</Text>
          </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("PackageDetails", { item })}
            activeOpacity={0.9}
            style={styles.btnCont}
          >
            <Text style={{ fontWeight: "600", fontSize: 16, color: "white" }}>
              View Package
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Tracker;

const styles = StyleSheet.create({
  btnCont: {
    height: 40,
    width: "100%",
    backgroundColor: "#6c63ff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10,
    fontWeight: "500",
  },
});
