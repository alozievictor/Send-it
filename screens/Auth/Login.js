import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  Keyboard,
  Dimensions,
  Image,
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
// import Register from "./Register";
import AsynceStorage from "@react-native-async-storage/async-storage";
import FormSelectedBtn from "../../component/formSelectedBtn";
import FormContainer from "../../component/form/formContainer";
import Loader from "../../component/form/Loader";
import axios from "axios";
import { ALERT_TYPE, Dialog, Toast } from "react-native-alert-notification";


const Login = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [inputs, setInputs] = React.useState({
    email: "",
    password: "",
  });

  const handleLoginEmail = async () => {
    Keyboard.dismiss();
    let valid = true;

    if (!inputs.email) {
      handleError("Email is required", "email");
      valid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError("Invalid email address", "email");
      valid = false;
    }

    if (!inputs.password) {
      handleError("Password is required", "password");
      valid = false;
    } else if (inputs.password.length <= 5) {
      handleError("Password to short", "password");
      valid = false;
    } else if (inputs.password.length >= 18) {
      handleError("password is too long", "password");
      valid = false;
    }

    if (valid) {
      // LoginUser();
      navigation.navigate("Tab");
      try {
        setLoading(true);
        const body = { ...inputs };
        const response = await axios.post(
          // "https://faxxway-delivery-api.onrender.com/api/register",
          "",
          body
        );
        console.log("second");
        // console.log(response.data.user.main._id);
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
              "userpassword",
              JSON.stringify(response.data.user.main.password)
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
          textBody: "Error', 'Something went wrong.",
        });
        return;
      } finally {
        setLoading(false);
        return;
      }
    }
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
        // paddingTop: insets.top,
        backgroundColor: "#fafafa",
        flex: 1,
        paddingHorizontal: 20,
        alignItems: "center",
      }}
    >
      <Loader visible={loading} />
      <AnimatedView
        animation={"fadeInUp"}
        duration={1000}
        delay={500}
        style={styles.container}
      >
        <Image
          style={{ width: 100, height:100, borderRadius: 100, marginBottom: 20,  }}
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
            Login To Your Account.
          </Text>
        </AnimatedView>
        <View
          style={{
            alignItems: "center",
            marginBottom: 20,
          }}
        >
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
          <TouchableOpacity
            style={styles.btnForgot}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("ForgotPass")}
          >
            <Text style={styles.ForgotText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <Button title="Sign In" onPress={handleLoginEmail} />
        <View style={styles.info}>
          <Text style={{ color: "#737a80" }}>Don't have an account?</Text>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={{ paddingLeft: 5, color: "#6c63ff" }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </AnimatedView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    width: Dimensions.get("window").width,
  },
  label: {
    fontSize: 20,
  },
  btnForgot: {
    // flex: 1,
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
    width: "100%",
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
