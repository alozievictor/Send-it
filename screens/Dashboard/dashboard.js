import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
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
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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

  // const FetchData = async () => {
  //   const id = await AsyncStorage.getItem("userID");
  //   JSON.stringify(id);
  //   console.log(id);

  //   try {
  //     AsyncStorage.getItem("userID").then((userId) => {
  //       if (userId) {
  //         // Make an Axios request to fetch user details using the user ID
  //         axios
  //           .get(`https://sendit-bcknd.onrender.com/api/getUserDetails/${id}`)
  //           .then((response) => {
  //             console.log(response.data)
  //             if (response.data.error == true) {
  //               console.error("Error fetching user data:");
  //               Dialog.show({
  //                 type: ALERT_TYPE.DANGER,
  //                 title: "Error",
  //                 textBody:
  //                   "An error occurred. Please check your internet connection!",
  //                 actions: [
  //                   {
  //                     text: "OK",
  //                     onPress: () => {
  //                       Dialog.hide();
  //                     },
  //                   },
  //                 ],
  //               });
  //             } else {
  //               setUserData(response.data);
  //               console.log(response.data);
  //             }
  //           })
  //           .catch((error) => {
  //             console.error(error);
  //           });
  //       }
  //     });

  //     // if (!id) {
  //     //   console.log("Invalid userID format.");
  //     //   setLoading(false);
  //     //   return;
  //     // }

  //     // const headers = {
  //     //   authorization: id,
  //     // };

  //     // const response = await axios.get(
  //     //   `https://sendit-bcknd.onrender.com/api/getUserDetails/${id}`,
  //     //   {
  //     //     headers,
  //     //   }
  //     // );

  //     // console.log("API Response:", response.data);

  //     // if (!response.data.user) {
  //     //   console.log("User data not found in API response.");
  //     //   setLoading(false); // Set loading to false in case of error
  //     //   return;
  //     // }

  //     // const { user } = response.data;
  //     // setUserData(user);
  //     // console.log("User data fetched:", user);
  //   } catch (error) {
  //     console.error("Error fetching user data:", error);
  //     Dialog.show({
  //       type: ALERT_TYPE.DANGER,
  //       title: "Error",
  //       textBody: "An error occurred. Please check your internet connection!",
  //       actions: [
  //         {
  //           text: "OK",
  //           onPress: () => {
  //             Dialog.hide();
  //           },
  //         },
  //       ],
  //     });
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const FetchData = async () => {
    // const id = await AsyncStorage.getItem("userID");
    const id = JSON.parse(await AsyncStorage.getItem("userID"));
    console.log(id);
    if (id === null) {
      navigation.navigate('Login');
      return;
    }
    
    try {
      if (id) {
        // Make an Axios request to fetch user details using the user ID
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
    let sub= navigation.addListener('focus',FetchData)
    return sub
  }, [navigation]);

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
        padding: 0,
        width: "100%",
      }}
    >
      {loading ? (
        <SafeAreaView
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          {/* <Text style={{ fontSize: 20, color: "gray" }}>Loading...</Text> */}
          <ActivityIndicator size="large" color="#6c63ff" />
        </SafeAreaView>
      ) : userData ? (
        <View style={{ flex: 1,}}>
          <Header onPress={NavigateToProfile} userData={userData}/>
          <ScrollView showsVerticalScrollIndicator={false} style={{paddingVertical: 20}}>
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
                style={{ width: "100%", height: 0.2 * windowHeight, borderRadius: 8 }}
                source={require("../../assets/card.png")}
                resizeMode="cover"
              />
            </View>

            <View
              styl={{
                borderWidth: 0.5,
                borderColor: "#ccc",
                paddingVertical: 10,
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
        <SafeAreaView
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="#6c63ff" />
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
    width:windowWidth * 0.9,
    height:windowHeight * 0.6,
    flexDirection: "row",
    gap: 12,
    flexWrap: "wrap",
    paddingVertical: 15,
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
