import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import {
  Feather,
  AntDesign,
  MaterialCommunityIcons,
  FontAwesome5,
  Entypo,
  MaterialIcons,
} from "@expo/vector-icons";
import axios from "axios"; // Don't forget to import axios
import Button from "../../component/Button";
import { COLORS } from "../../constant/Theme";
import { ALERT_TYPE, Dialog, Toast } from "react-native-alert-notification";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = ({ navigation }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  const FetchData = async () => {
    const id = JSON.parse(await AsyncStorage.getItem("userID"));
    console.log(id);

    try {
      if (id) {
        axios
          .get(`https://sendit-bcknd.onrender.com/api/getUserDetails/${id}`)
          .then((response) => {
            console.log(response.data);
            if (response.data.error === true) {
              console.error("Error fetching user data:", response.data.message); // Log the error message from the response
              Dialog.show({
                type: ALERT_TYPE.DANGER,
                title: "Error",
                textBody:
                  "An error occurred. Please check your internet connection!",
                actions: [
                  {
                    text: "OK",
                    onPress: () => {
                      Dialog.hide();
                    },
                  },
                ],
              });
            } else {
              setUserData(response.data);
              console.log(response.data);
            }
          })
          .catch((error) => {
            console.error("Error fetching user data:", error); // Log the error here
            Dialog.show({
              type: ALERT_TYPE.DANGER,
              title: "Error",
              textBody: "Please check your internet connection!",
              actions: [
                {
                  text: "OK",
                  onPress: () => {
                    Dialog.hide();
                  },
                },
              ],
            });
          });
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      Dialog.show({
        type: ALERT_TYPE.DANGER,
        title: "Error",
        textBody: "An error occurred. Please check your internet connection!",
        actions: [
          {
            text: "OK",
            onPress: () => {
              Dialog.hide();
            },
          },
        ],
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    FetchData();
  }, []);

  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      style={{
        // paddingTop: insets.top,
        backgroundColor: "#fff",
        flex: 1,
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 15,
          paddingVertical: 3,
        }}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: "#ddd",
            borderRadius: 50,
            padding: 2,
            marginVertical: 3,
          }}
        >
          <Feather name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ paddingLeft: 10, fontSize: 20, fontWeight: "500" }}>
          Profile
        </Text>
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 25,
            borderRadius: 5,
            elevation: 2,
            backgroundColor: "#fff",
            marginTop: 20,
          }}
        >
          {userData && (
<<<<<<< HEAD
            <View style={{paddingHorizontal:20}}>
             <Text style={{fontSize:18, fontWeight:'500', }}>{userData.user.name}</Text>
             <Text style={{fontSize:15, fontWeight:'500', color:COLORS.small}}>{userData.user.email}</Text>
           </View>
=======
            <View style={{ paddingHorizontal: 20 }}>
              <Text style={{ fontSize: 18, fontWeight: "500", color: "" }}>
                {userData.user.name}
              </Text>
              <Text
                style={{ fontSize: 15, fontWeight: "500", color: COLORS.small }}
              >
                {userData.user.email}
              </Text>
            </View>
>>>>>>> db8ca926 (changed)
          )}
        </View>

        <View style={{ paddingVertical: 20 }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.8}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: 5,
              marginVertical: 1,
              paddingHorizontal: 5,
              borderBottomColor: "#ccc",
              borderBottomWidth: 0.5,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 10,
                width: "50%",
              }}
            >
              <View style={{ width: "25%" }}>
                <MaterialCommunityIcons
                  name="view-dashboard"
                  size={24}
                  color="#737a80"
                />
              </View>
              <Text
                style={{ fontSize: 16, fontWeight: "500", color: COLORS.small }}
              >
                Dashboard
              </Text>
            </View>
            <View style={{ width: "50%" }}>
              <AntDesign
                style={{ alignSelf: "flex-end" }}
                name="right"
                size={20}
                color="#737a80"
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Edit")}
            activeOpacity={0.8}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: 5,
              marginVertical: 1,
              paddingHorizontal: 5,
              borderBottomColor: "#ccc",
              borderBottomWidth: 0.5,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 10,
                width: "50%",
              }}
            >
              <View style={{ width: "25%" }}>
                <FontAwesome5 name="user-alt" size={24} color="#737a80" />
              </View>
              <Text
                style={{ fontSize: 16, fontWeight: "500", color: COLORS.small }}
              >
                Edit Profile
              </Text>
            </View>
            <View style={{ width: "50%" }}>
              <AntDesign
                style={{ alignSelf: "flex-end" }}
                name="right"
                size={20}
                color="#737a80"
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: 5,
              marginVertical: 1,
              paddingHorizontal: 5,
              borderBottomColor: "#ccc",
              borderBottomWidth: 0.5,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 10,
                width: "50%",
              }}
            >
              <View style={{ width: "25%" }}>
                <Entypo name="address" size={24} color="#737a80" />
              </View>
              <Text
                style={{ fontSize: 16, fontWeight: "500", color: COLORS.small }}
              >
                Save Address
              </Text>
            </View>
            <View style={{ width: "50%" }}>
              <AntDesign
                style={{ alignSelf: "flex-end" }}
                name="right"
                size={20}
                color="#737a80"
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ paddingVertical: 5 }}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: 5,
              marginVertical: 1,
              paddingHorizontal: 5,
              borderBottomColor: "#ccc",
              borderBottomWidth: 0.5,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 10,
                width: "50%",
              }}
            >
              <View style={{ width: "25%" }}>
                <AntDesign name="setting" size={24} color="#737a80" />
              </View>
              <Text
                style={{ fontSize: 16, fontWeight: "500", color: COLORS.small }}
              >
                Settings
              </Text>
            </View>
            <View style={{ width: "50%" }}>
              <AntDesign
                style={{ alignSelf: "flex-end" }}
                name="right"
                size={20}
                color="#737a80"
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: 5,
              marginVertical: 1,
              paddingHorizontal: 5,
              borderBottomColor: "#ccc",
              borderBottomWidth: 0.5,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 10,
                width: "50%",
              }}
            >
              <View style={{ width: "25%" }}>
                <AntDesign name="question" size={24} color="#737a80" />
              </View>
              <Text
                style={{ fontSize: 16, fontWeight: "500", color: COLORS.small }}
              >
                About Us
              </Text>
            </View>
            <View style={{ width: "50%" }}>
              <AntDesign
                style={{ alignSelf: "flex-end" }}
                name="right"
                size={20}
                color="#737a80"
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: 5,
              marginVertical: 1,
              paddingHorizontal: 5,
              borderBottomColor: "#ccc",
              borderBottomWidth: 0.5,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 10,
                width: "50%",
              }}
            >
              <View style={{ width: "25%" }}>
                <MaterialIcons
                  style={{ alignSelf: "flex-start" }}
                  name="privacy-tip"
                  size={24}
                  color="#737a80"
                />
              </View>
              <Text
                style={{ fontSize: 16, fontWeight: "500", color: COLORS.small }}
              >
                Privacy
              </Text>
            </View>
            <View style={{ width: "50%" }}>
              <AntDesign
                style={{ alignSelf: "flex-end" }}
                name="right"
                size={20}
                color="#bbb"
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.btnDiv}>
          <Button
            title="Log out"
            onPress={() => navigation.navigate("Login")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  btnDiv: {
    marginTop: 30,
  },
});
