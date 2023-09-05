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
import AsynceStorage from "@react-native-async-storage/async-storage";
import FormSelectedBtn from "../../component/formSelectedBtn";
import FormContainer from "../../component/form/formContainer";
import Loader from "../../component/form/Loader";
import axios from "axios";
import { ALERT_TYPE, Dialog, Toast } from "react-native-alert-notification";

export default function ChangePassword({ route, navigation }) {
  const insets = useSafeAreaInsets();
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [inputs, setInputs] = React.useState({
    password: "",
    conPassword: "",
  });

  const handleChangedPassword = () => {
    Keyboard.dismiss();
    let valid = true;
    let mobileNumberPattern = /^[0-9]{10}$/;

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

    if (!inputs.conPassword) {
      handleError("Password is required", "password");
      valid = false;
    } else if (inputs.conPassword.length <= 5) {
      handleError("Password to short", "password");
      valid = false;
    } else if (inputs.conPassword.length >= 18) {
      handleError("password is too long", "password");
      valid = false;
    }

    if (valid) {
      ChangePassword();
    }
  };

  const ChangePassword = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);

      try {
      } catch {
        Alert.alert("Error", "Something went wrong.");
      }
    }, 5000);
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
      }}
    >
      <Loader visible={loading} />
      <AnimatedView animation={"lightSpeedIn"} duration={1000} delay={600}>
        <View>
          <AnimatedView
            animation={"zoomIn"}
            duration={1000}
            delay={500}
            style={{
              width: "100%",
              paddingLeft: 20,
            }}
          >
            <Text style={{ fontSize: 33, fontWeight: "500" }}>
              Let's{"\n"}Get Started.
            </Text>
          </AnimatedView>

          <ScrollView
            style={{
              width: "100%",
            }}
          >
            <FormContainer>
              <View
                style={{
                  width: "100%",
                  // borderWidth: 3,
                  // borderColor: "red",
                }}
              >
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

                <Input
                  placeholder="Confirm password"
                  label="Confirm Password:"
                  name
                  password
                  keyboardType="default"
                  error={errors.conPassword}
                  onFocus={() => {
                    handleError(null, "conPassword");
                  }}
                  onChangeText={(text) => handleOnchange(text, "conPassword")}
                />
              </View>
              <Button title="Sign Up" onPress={handleReg} />
            </FormContainer>
          </ScrollView>
        </View>
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
