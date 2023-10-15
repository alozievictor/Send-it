import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Keyboard,
} from "react-native";
import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { AnimatedView, COLORS, SIZES } from "../../constant/Theme";
import Loader from "../../component/form/Loader";
import Input from "../../component/form/Input";
import Button from "../../component/Button";
import { ALERT_TYPE, Dialog, Toast } from "react-native-alert-notification";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const Edit = ({ navigation }) => {
  // const [profileImage, setProfileImage] = React.useState("");
  const [errors, setErrors] = React.useState({});
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = React.useState({
    name: "",
    address: "",
    email: "",
    number: "",
    state: ""
  });

  const HandleEdit = async () => {
    Keyboard.dismiss();
    let valid = true;
    let mobileNumberPattern = /^[0-9]{11}$/;
  
    if (!inputs.name) {
      handleError("Name is required", "name");
      valid = false;
    } else if (inputs.name.length < 4) {
      handleError("Name is too short", "name");
      valid = false;
    }
  
    if (!inputs.email) {
      handleError("Email is required", "email");
      valid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError("Invalid email address", "email");
      valid = false;
    }
  
    if (!inputs.address) {
      handleError("Address is required", "address");
      valid = false;
    } else if (inputs.address.length < 6) {
      handleError("Address is too short", "address");
      valid = false;
    }
  
    if (!inputs.state) {
      handleError("State is required", "state");
      valid = false;
    } else if (inputs.state.length < 3) {
      handleError("Invalid state", "state");
      valid = false;
    }
  
    if (!inputs.number) {
      handleError("Mobile Number is required", "number");
      valid = false;
    } else if (inputs.number.length !== 11) {
      handleError("Invalid mobile number", "number");
      valid = false;
    } else if (!mobileNumberPattern.test(inputs.number)) {
      handleError("Invalid mobile number", "number");
      valid = false;
    }
  
    if (valid) {
      const id = JSON.parse(await AsyncStorage.getItem("userID"));
      console.log(id);
      try {
        setLoading(true);
        const body = { ...inputs };
  
        const response = await axios.put(
          `https://sendit-bcknd.onrender.com/api/EditUserDetails/${id}`,
          body
        );
  
        if (response && response.data) {
          if (response.data.error === true) {
            Toast.show({
              type: ALERT_TYPE.DANGER,
              title: "Failed",
              textBody: response.data.message,
            });
          } else if (response.data.error === false) {
            Toast.show({
              type: ALERT_TYPE.SUCCESS,
              title: "Success",
              textBody: response.data.message,
            });
            console.log(response.data)
          }
        }
      } catch (error) {
        console.log(error);
        Toast.show({
          type: ALERT_TYPE.DANGER,
          title: "Failed",
          textBody: 'Something went wrong. Please check your internet connection.',
        });
      } finally {
        setLoading(false);
      }
    }
  };

  const FetchData = async () => {

    const id = JSON.parse(await AsyncStorage.getItem("userID"));
    console.log(id);

    try {
      if (id) {
        axios
          .get(`https://sendit-bcknd.onrender.com/api/getUserDetails/${id}`)
          .then((response) => {
            // console.log(response.data);
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
              // console.log(response.data);
              setInputs({
                name: response.data.user.name || "", // Use the appropriate field from the response
                address: response.data.user.address || "",
                email: response.data.user.email || "",
                number: response.data.user.number || "",
                state: response.data.user.state || "",
              });
              
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


  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const handleError = (errorMessage, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: errorMessage }));
  };

  return (
    <SafeAreaView
      style={{
        // paddingTop: insets.top,
        backgroundColor: "#fafafa",
        flex: 1,
        paddingHorizontal: 20,
      }}
    >
      <Loader visible={loading}/>
      <View>
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
              backgroundColor: "#ddd",
              borderRadius: 50,
              padding: 2,
              marginVertical: 3,
            }}
          >
            <Feather name="chevron-left" size={24} color="black" />
          </TouchableOpacity>
          <Text style={{ paddingLeft: 10, fontSize: 20, fontWeight: "500" }}>
            Edit Profile
          </Text>
          <Text style={{ paddingLeft: 10, fontSize: 20, fontWeight: "500" }}>
            {/* Track */}
          </Text>
        </View>
        <View
          style={{
            paddingTop: 20,
          }}
        >
          <View
            style={{
              // borderWidth:1,
              paddingVertical: 20,
            }}
          >
            <Input
              placeholder="Enter your name"
              label="Name:"
              name
              password={undefined}
              keyboardType="default"
              error={errors.name}
              value={inputs.name || userData?.name}
              onFocus={() => {
                handleError(null, "name");
              }}
              onChangeText={(text) => handleOnchange(text, "name")}
            />

            <Input
              placeholder="Enter your addess"
              label="Address:"
              name
              password={undefined}
              keyboardType="default"
              error={errors.address}
              value={inputs.address}
              onFocus={() => {
                handleError(null, "address");
              }}
              onChangeText={(text) => handleOnchange(text, "address")}
            />

            <Input
              placeholder="Enter your state"
              label="State:"
              name
              password={undefined}
              keyboardType="default"
              error={errors.state}
              value={inputs.state}
              onFocus={() => {
                handleError(null, "state");
              }}
              onChangeText={(text) => handleOnchange(text, "state")}
            />

            <Input
              placeholder="Enter your email address"
              label="Email:"
              name
              password={undefined}
              keyboardType="email-address"
              error={errors.email}
              value={inputs.email}
              onFocus={() => {
                handleError(null, "email");
              }}
              onChangeText={(text) => handleOnchange(text, "email")}
            />

            <Input
              placeholder="Enter your phone number"
              label="Phone Number:"
              name
              password={undefined}
              keyboardType="number-pad"
              error={errors.number}
              value={inputs.number}
              onFocus={() => {
                handleError(null, "number");
              }}
              onChangeText={(text) => handleOnchange(text, "number")}
            />
          </View>

          <Button title="Process Update" onPress={HandleEdit} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Edit;

const styles = StyleSheet.create({
  input: {
    height: 55,
    backgroundColor: "#fafafa",
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.5,
    // shadowRadius: 4,
    // elevation: 1,
    // borderWidth: 0.8,
    borderColor: "#ddd",
    borderRadius: 10,
    marginVertical: 5,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 2,
  },
  btnCont: {
    height: 55,
    width: "100%",
    backgroundColor: "#e7a368",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 50,
    fontWeight: "500",
  },
});
