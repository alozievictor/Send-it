import {
  Image,
  StyleSheet,
  Text,
  View,
  Alert,
  Platform,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Dimensions,
  Keyboard,
} from "react-native";
import React from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import Input from "../../component/form/Input";
import Button from "../../component/Button";
import { Ionicons } from "@expo/vector-icons";
import { AnimatedView, COLORS, SIZES } from "../../constant/Theme";
import { useRouter } from "expo-router";
// import Register from "./Register";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FormSelectedBtn from "../../component/formSelectedBtn";
import FormContainer from "../../component/form/formContainer";
import Loader from "../../component/form/Loader";
import axios from "axios";
import { ALERT_TYPE, Dialog, Toast } from "react-native-alert-notification";
// import {Apilink} from '@env'

export default function Register({ route, navigation }) {
  const insets = useSafeAreaInsets();
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [inputs, setInputs] = React.useState({
    name: "",
    email: "",
    number: "",
    password: "",
  });

  const handleReg = async () => {
    Keyboard.dismiss();
    let valid = true;
    let mobileNumberPattern = /^[0-9]{10}$/;

    if (!inputs.name) {
      handleError("FirstName is required", "name");
      valid = false;
    } else if (inputs.name.length <= 3) {
      handleError("Name to short", "Name");
      valid = false;
    }

    if (!inputs.email) {
      handleError("Email is required", "email");
      valid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError("Invalid email address", "email");
      valid = false;
    }

    if (!inputs.number) {
      handleError("Mobile Number is required", "number");
      valid = false;
    } else if (inputs.number.length < 11) {
      handleError("Invalid mobile number", "number");
      valid = false;
    } else if (inputs.number.length > 11) {
      handleError("Invalid mobile number", "number");
      valid = false;
    } else if (mobileNumberPattern.test(inputs.number)) {
      handleError("Invalid email address", "email");
      valid = false;
    }

    if (!inputs.password) {
      handleError("email is required", "password");
      valid = false;
    } else if (inputs.password.length <= 5) {
      handleError("Password to short", "password");
      valid = false;
    } else if (inputs.password.length >= 18) {
      handleError("password is too long", "password");
      valid = false;
    }

    if (valid) {
      try {
        setLoading(true);
        const body = { ...inputs };
        const response = await axios.post(
          // "https://faxxway-delivery-api.onrender.com/api/register",
          "http://localhost:4000/api/register",
          body
        );
        console.log("second");
        console.log(response.data.user.main);
        console.log(response.data.user.main._id);
        if (response) {
          console.log(response.data);

          if (response.data.error == true) {
            console.log(response.data.error);
            Toast.show({
              type: ALERT_TYPE.DANGER,
              title: "Failed",
              textBody: response.data.message,
            });
          } else if (response.data.error === false) {
            console.log("saving user now");
            await AsyncStorage.setItem(
              "useremail",
              JSON.stringify(response.data.user.main.email)
            );
            await AsyncStorage.setItem(
              "usernumber",
              JSON.stringify(response.data.user.main.number)
            );
            await AsyncStorage.setItem(
              "userID",
              JSON.stringify(response.data.user.main._id)
            );
            Toast.show({
              type: ALERT_TYPE.SUCCESS,
              title: "Success",
              textBody: response.data.message,
            });
            setTimeout(() => {
              navigation.navigate("Login");
            }, 3000);
          }
        }
      } catch (error) {
        console.log(error);
        Toast.show({
          type: ALERT_TYPE.DANGER,
          title: "Failed",
          textBody:'Something went wrong.',
        });
        return;
      } finally {
        setLoading(false);
        return;
      }
    }
    console.log("clicking.....");
  };

  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const handleError = (errorMessage, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: errorMessage }));
  };

  return (
    <SafeAreaView
      style={{
        paddingTop: insets.top,
        backgroundColor: "#fafafa",
        flex: 1,
        paddingHorizontal: 20,
      }}
    >
      <Loader visible={loading} />
      <AnimatedView animation={"fadeInUp"} duration={1000} delay={600}>
        <ScrollView
          style={{
            width: "100%",
            paddingTop: 30,
            display:"flex",
            // justifyContent:'center',
            // alignItems:'center'
          }}
        >
          <Image
            style={{ width: 100, height: 100, borderRadius: 100, marginBottom: 20, justifyContent:'center', alignSelf:'center' }}
            source={require("../../assets/easylogo.png")}
            resizeMode="cover"
          />

          <AnimatedView
            animation={"zoomIn"}
            duration={1000}
            delay={500}
            style={{
              width: "100%",
              paddingVertical: 10,
            }}
          >
            <Text
              style={{ fontSize: 23, fontWeight: "500", textAlign: "center" }}
            >
              Create Your Account.
            </Text>
          </AnimatedView>

          <View
            style={{
              width: "100%",
            }}
          >
   
              <View
                style={{
                  width: "100%",
                }}
              >
                <Input
                  placeholder="Enter name"
                  label="Name:"
                  name
                  password={undefined}
                  keyboardType="default"
                  error={errors.name}
                  onFocus={() => {
                    handleError(null, "name");
                  }}
                  onChangeText={(text) => handleOnchange(text, "name")}
                />

                <Input
                  placeholder="Enter your email address"
                  label="Email:"
                  name
                  password={undefined}
                  keyboardType="email-address"
                  error={errors.email}
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
                  onFocus={() => {
                    handleError(null, "number");
                  }}
                  onChangeText={(text) => handleOnchange(text, "number")}
                />

                <Input
                  placeholder="Enter your password"
                  label="Password:"
                  name
                  password
                  keyboardType="default"
                  error={errors.password}
                  onFocus={() => {
                    handleError(null, "password");
                  }}
                  onChangeText={(text) => handleOnchange(text, "password")}
                />

                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    paddingHorizontal: 20,
                  }}
                >
                  <Text style={{ textAlign: "center", color: "#737a80" }}>
                    By creating an account you agree to EasyTrip{" "}
                    <Text style={{ color: "#6c63ff" }}>Privacy Policy</Text> and{" "}
                    <Text style={{ color: "#6c63ff" }}>Terms of use</Text>.
                  </Text>
                </View>
              </View>
              <Button title="Sign Up" onPress={handleReg} />
              <View style={styles.info}>
                <Text style={{ color: "#737a80" }}>
                  Already have an account?
                </Text>
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => navigation.navigate("Login")}
                >
                  <Text style={{ paddingLeft: 5, color: "#6c63ff" }}>
                    Sign In
                  </Text>
                </TouchableOpacity>
              </View>
            
          </View>
        </ScrollView>
      </AnimatedView>
      <Loader />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  borderLeft: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  borderRight: {
    borderTopRightRadius: 5,
    // borderBottomRightRadius: 5,
    marginLeft: 5,
  },
  label: {
    fontSize: 20,
  },
  btnForgot: {
    flex: 1,
    justifyContent: "flex-end",
    alignSelf: "flex-end",
  },
  ForgotText: {
    fontSize: 15,
    textDecorationLine: "underline",
    color: "#737a80",
  },
  line: {
    width: 160,
    height: 1.5,
    backgroundColor: "#ccc",
    borderRadius: 10,
  },
  lineBox: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },
  socailBtn: {
    height: 55,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ddd",
    borderRadius: 10,
  },
  info: {
    height: 55,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
