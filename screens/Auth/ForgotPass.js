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
import { Feather, } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AnimatedView, COLORS, SIZES } from "../../constant/Theme";
import AsynceStorage from "@react-native-async-storage/async-storage";
import FormSelectedBtn from "../../component/formSelectedBtn";
import FormContainer from "../../component/form/formContainer";
import Loader from "../../component/form/Loader";
import axios from "axios";

export default function ForgotPass({ route, navigation }) {

  const insets = useSafeAreaInsets();
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [inputs, setInputs] = React.useState({
    email: "",
  });

  const handleEmailCheck = () => {
    Keyboard.dismiss();
    let valid = true;
    let mobileNumberPattern = /^[0-9]{10}$/;

    if (!inputs.email) {
      handleError("Email is required", "email");
      valid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError("Invalid email address", "email");
      valid = false;
    }

    if(valid) {
      FindUserEmail();
    }

    console.log("clicking.....");
    // navigation.navigate('Tab');
  };


  const FindUserEmail = () => {
    setLoading(true);
    setTimeout(async ()=> {
      setLoading(false) 
    try {
      
      const response = await axios.post()

      AsynceStorage.setItem('user', JSON.stringify(inputs))
      console.log(inputs)
      navigation.navigate('Auth')

    } catch {
      Alert.alert('Error', 'Something went wrong.')
    }

    },5000)
  }


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
      }} 
    >
      <Loader visible={loading}/>
      <AnimatedView animation={"lightSpeedIn"} duration={1000} delay={600}>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 15, paddingVertical:3}}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={()=> navigation.goBack()}
          style={{ backgroundColor: "#ddd", borderRadius: 50, padding: 2, marginVertical:3 }}
        >
          <Feather name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ paddingLeft: 10, fontSize: 20, fontWeight: "500" }}>
          Profile
        </Text>
      </View>
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
              </View>
              <Button title="Sign Up" onPress={handleEmailCheck} />
              {/* <View style={styles.lineBox}>
                <Text style={styles.line}></Text>
                <View>
                  <Text>or</Text>
                </View>
                <View style={styles.line}></View>
              </View>
              <View style={styles.info}>
                <Text style={{ color: "#737a80" }}>
                  Already have an account?
                </Text>
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => navigation.navigate("Auth")}
                >
                  <Text style={{ paddingLeft: 5, color: "#e7a368" }}>
                    Sign In
                  </Text>
                </TouchableOpacity>
              </View> */}
            </FormContainer>
          </ScrollView>
        </View>
      </AnimatedView>

    </SafeAreaView>
  )
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