import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import Header from "../../component/sub-component/header";
import {
  FontAwesome5,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { AnimatedView, COLORS, SIZES } from "../../constant/Theme";
import { ALERT_TYPE, Dialog, Toast } from "react-native-alert-notification";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loader from "../../component/form/Loader";
const width = Dimensions.get("window").width - 70;

// width: SIZES.width - 80,

const Dashboard = ({ navigation, route }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  // const FetchData = (async() => {
  //   setLoading(true);
  //   const userId = await AsyncStorage.getItem("userID");
  //   console.log("Fetched userID:", userId);
  //   const apiUrl =
  //     "https://sendit-bcknd.onrender.com/api/getUserDetails/${userId}";

  //   axios.get(apiUrl)
  //     .then((response) => {
  //       setUserData(response.data);
  //       setLoading(false);
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching user data:", error);
  //       setLoading(false);
  //       Dialog.show({
  //         type: ALERT_TYPE.DANGER,
  //         title: "Error",
  //         textBody: "An error occurred. Please check your internet connection!",
  //         actions: [
  //           {
  //             text: "OK",
  //             onPress: () => {
  //               Dialog.hide();
  //             },
  //           },
  //         ],
  //       });
  //     });
  // })

  const FetchData = async () => {
    try {
      console.log("Fetching user data...");
      const userId = await AsyncStorage.getItem("userID");
      JSON.stringify(userId);

      if (!userId || !userId.match(/^[0-9a-fA-F]{24}$/)) {
        // Handle the case where userID is not available or invalid format
        console.log("Invalid userID format.");
        setLoading(false); // Set loading to false in case of error
        return;
      }

      const headers = {
        Authorization: userId, // Set the "id" in the "Authorization" header
      };

      const response = await axios.get(
        `https://sendit-bcknd.onrender.com/api/getUserDetails`,
        {
          headers,
        }
      );

      console.log("API Response:", response.data);

      if (!response.data.user) {
        console.log("User data not found in API response.");
        setLoading(false); // Set loading to false in case of error
        return;
      }

      const { user } = response.data;
      setUserData(user);
      console.log("User data fetched:", user);
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


  const NavigateToProfile = () => {
    console.log("first Func");
    navigation.navigate("ProfileNav");
  };

  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#fafafa",
        flex: 1,
        paddingHorizontal: 20,
        borderWidth: 2,
        padding: 0,
      }}
    >
      {loading ? (
        <SafeAreaView
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: 20, color: "gray" }}>Loading...</Text>
        </SafeAreaView>
      ) : userData ? (
        <View>
          <Header onPress={NavigateToProfile} />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                width: "100%",
                marginVertical: 10,
              }}
            >
              <Text
                style={{ fontSize: 20, fontWeight: "500", color: "#363636" }}
              >
                Send Gifts And Many More
              </Text>
            </View>
            <View style={{ paddingVertical: 20 }}>
              <Image
                style={{ width: "100%", height: 200, borderRadius: 8 }}
                source={require("../../assets/card.png")}
                resizeMode="cover"
              />
            </View>

            <View
              styl={{
                borderWidth: 0.5,
                borderColor: "#ccc",
                paddingVertical: 3,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "500",
                  color: "#363636",
                }}
              >
                Type Of Service
              </Text>
            </View>

            <View style={styles.FlexBox}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.square}
                onPress={() => navigation.navigate("CreateDelivery")}
              >
                <View
                  style={{
                    height: 100,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="bike-fast"
                    size={30}
                    color="#6c63ff"
                  />
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 19,
                      fontWeight: "400",
                      margin: 10,
                    }}
                  >
                    Quick Ride
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.8} style={styles.square}>
                <View
                  style={{
                    height: 100,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FontAwesome5 name="box" size={30} color="#6c63ff" />
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 18,
                      fontWeight: "400",
                      margin: 10,
                    }}
                  >
                    Send Courier
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.8} style={styles.square}>
                <View
                  style={{
                    height: 100,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="google-nearby"
                    size={30}
                    color="#6c63ff"
                  />
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 19,
                      fontWeight: "400",
                      margin: 10,
                    }}
                  >
                    Nearby Drop
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.8} style={styles.square}>
                <View
                  style={{
                    height: 100,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MaterialIcons
                    name="support-agent"
                    size={30}
                    color="#6c63ff"
                  />
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 19,
                      fontWeight: "400",
                      margin: 10,
                    }}
                  >
                    Customer Support
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      ) : (
        // Show loader if loading is complete but no user data is available
        <SafeAreaView
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Loading...</Text>
        </SafeAreaView>
      )}
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  circle: {
    width: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: COLORS.primary,
  },
  line: {
    width: 58,
    height: 4,
    // borderRadius: 1,
    backgroundColor: COLORS.primary,
  },
  centerLine: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  FlexBox: {
    // backgroundColor: "#fff",
    flexDirection: "row",
    gap: 14,
    flexWrap: "wrap",
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  square: {
    backgroundColor: "#fff",
    width: "47.9%",
    height: 180,
    borderRadius: 10,
    elevation: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  textCont: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 40,
  },
  contFirstText: {
    fontSize: 28,
    fontWeight: "400",
  },
  contSecondText: {
    fontSize: 15,
    fontWeight: "500",
    color: "gray",
  },
});
