import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import React from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import Input from "./Input";
import Button from "../../component/Button";
import { Ionicons } from "@expo/vector-icons";
import { AnimatedView, COLORS, SIZES } from "../../constant/Theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FormSelectedBtn from "../../component/formSelectedBtn";
import FormContainer from "../../component/form/formContainer";
import Loader from "./Loader";
import axios from "axios";
import { ALERT_TYPE, Dialog, Toast } from 'react-native-alert-notification';



const MobileLogin = ({ route, navigation }) => {
  const insets = useSafeAreaInsets();
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [inputs, setInputs] = React.useState({
    number: "",
    password: "",
  });

  const handleLoginNumber = async () => {
    Keyboard.dismiss();
    let valid = true;
    let mobileNumberPattern = /^[0-9]{10}$/;

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
      try {
        setLoading(true);
        const body = {...inputs};
        console.log(body);
        console.log('first');
        const response = await axios.post("https://faxxway-delivery-api.onrender.com/api/login/number", body)
        console.log('second'); 
        // const getNumber = await AsyncStorage.getItem("usernumber")
        // console.log(getNumber);
        if(response) {
          console.log(response.data)
          if(response.data.error == true) {
            Toast.show({
              type: ALERT_TYPE.DANGER,
              title:'Failed',
              textBody: response.data.message,
            })
          } else if(response.data.error == false) {
            Toast.show({
              type: ALERT_TYPE.SUCCESS,
              title: 'Success',
              textBody: "Hello welcome back",
            });
            setTimeout(() => {
              navigation.navigate('Tab');
            }, 3000)

          }
        }
      } catch(error) {
        console.log(error)
        Toast.show({
          type: ALERT_TYPE.DANGER,
          title:'Failed',
          textBody: "Error', 'Something went wrong.",
        })
        return
      } finally {
        setLoading(false);
        return
      }
      

    }
  };

  const LoginUser = async () => {
    setLoading(true);
    const body = {...inputs};
    if(response) {
      console.log(response.data)
      Toast.show({
        type: ALERT_TYPE.SUCCESS,
        title: 'Success',
        textBody: response.data.message,
      })
    } else {
      console.log('Registration failed:', response.data);
        Toast.show({
          type: ALERT_TYPE.DANGER,
          title:'Failed',
          textBody: response.data.message,
        })
        throw new Error('Registration failed');
    }
  };

  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const handleError = (errorMessage, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: errorMessage }));
  };

  // const Validate = () => {
  //   console.log('clicking.....')
  //   navigation.navigate('Tab');
  // }

  return (
    <FormContainer>
      <Loader visible={loading}/> 
      <View>
        
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

        <TouchableOpacity style={styles.btnForgot} activeOpacity={0.8} 
          onPress={()=> navigation.navigate("ForgotPass")}
        >
          <Text style={styles.ForgotText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <Button title="Sign In" onPress={handleLoginNumber} />
      <View style={styles.lineBox}>
        <Text style={styles.line}></Text>
        <View>
          <Text>or</Text>
        </View>
        <View style={styles.line}></View>
      </View>
      <View>
        <TouchableOpacity style={styles.socailBtn}>
          <Ionicons name="logo-google" size={22} color="black" />
          <Text style={{ paddingLeft: 5, fontWeight: "500", color: "#000" }}> 
            Continue with google
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.info}>
        <Text style={{ color: "#737a80", opacity:0.6 }}>Don't have an account?</Text>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={{ paddingLeft: 5, color: "#e7a368" }}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </FormContainer>
  );
};

export default MobileLogin;

const styles = StyleSheet.create({
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
