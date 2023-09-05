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
// import Register from "./Register";
import AsynceStorage from "@react-native-async-storage/async-storage";
import FormSelectedBtn from "../../component/formSelectedBtn";
import FormContainer from "../../component/form/formContainer";
// import Loader from "../../component/form/Loader";
import Loader from './Loader';

const EmailLogin = ({ route, navigation }) => {
  const insets = useSafeAreaInsets();
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [inputs, setInputs] = React.useState({
    email: "",
    password: "",
  });

  const handleLoginEmail = () => {
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
      LoginUser();
    }
  };

  const LoginUser = () => {
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

  // const handleLogin = () => {
  //   console.log("clicking.....");
  //   navigation.navigate("Tab");
  // };

  return (
    <FormContainer>
      <Loader visible={loading}/>
      <View>
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
        <TouchableOpacity style={styles.btnForgot} activeOpacity={0.8} 
          onPress={()=> navigation.navigate("ForgotPass")}
        >
          <Text style={styles.ForgotText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <Button title="Sign In" onPress={handleLoginEmail} />
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
        <Text style={{ color: "#737a80" }}>Don't have an account?</Text>
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

export default EmailLogin;

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
