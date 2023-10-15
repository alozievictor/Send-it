import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Keyboard,
  Alert, // Import Alert from react-native
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import Input from "../../component/form/Input";
import Button from "../../component/Button";
import { useOrderState, useOrderDispatch } from "../../component/sub-component/OrderContext";
import { AnimatedView, COLORS, SIZES } from "../../constant/Theme";


const ReDets = ({ navigation }) => {

  const state = useOrderState();
  const orderDispatch = useOrderDispatch()
  
  const [errors, setErrors] = useState({});
  const [inputs, setInputs] = useState({
    email: "",
    name: "",
    address: "",
    city: "",
    number: "",
  });

  const handleSenderDetails = async () => {
    Keyboard.dismiss();
    let valid = true;
    let mobileNumberPattern = /^[0-9]{11}$/;

    if (!inputs.email) {
      handleError("Email is required", "email");
      valid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError("Invalid email address", "email");
      valid = false;
    }

    if (!inputs.name) {
      handleError("Name is required", "name");
      valid = false;
    } else if (inputs.name.length <= 3) {
      handleError("Name is too short", "name");
      valid = false;
    }

    if (!inputs.address) {
      handleError("Address is required", "address");
      valid = false;
    } else if (inputs.address.length <= 5) {
      handleError("Address is too short", "address");
      valid = false;
    }

    if (!inputs.city) {
      handleError("City is required", "city");
      valid = false;
    } else if (inputs.city.length <= 3) {
      handleError("Invalid city", "city");
      valid = false;
    }

    if (!inputs.number) {
      handleError("Mobile Number is required", "number");
      valid = false;
    } else if (inputs.number.length < 11 || inputs.number.length > 11) {
      handleError("Invalid mobile number", "number");
      valid = false;
    } else if (!mobileNumberPattern.test(inputs.number)) {
      handleError("Invalid mobile number", "number");
      valid = false;
    }

    if (valid) {

      const receiverDetails = {
        name: inputs.name,
        email: inputs.email,
        address: inputs.address,
        city: inputs.city,
        number: inputs.number,
      };

      await orderDispatch({ type: 'SET_RECEIVER_DETAILS', payload: receiverDetails });

      console.log("Global State:", state);
      navigation.navigate("Checkout");

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
        backgroundColor: "#fafafa",
        flex: 1,
        paddingHorizontal: 20,
      }}
    >
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
        >
          <Feather name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ paddingLeft: 10, fontSize: 20, fontWeight: "500" }}>
          Delivery
        </Text>

         <Text style={{ paddingLeft: 10, fontSize: 20, fontWeight: "500" }}>
          
        </Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: "100%", paddingVertical: 5 }}
      >
        <View
          style={{
            width: "100%",
            paddingVertical: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: SIZES.h1, fontWeight: "500" }}>
            Receiver Details
          </Text>
        </View>

        <View style={{ paddingVertical: 10 }}>
          <Input
            placeholder="Enter your name"
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
            placeholder="Enter receiver email"
            label="Email:"
            name
            password={undefined}
            keyboardType="default"
            error={errors.email}
            onFocus={() => {
              handleError(null, "email");
            }}
            onChangeText={(text) => handleOnchange(text, "email")}
          />

          <Input
            placeholder="Enter your address"
            label="Address:"
            name
            password={undefined}
            keyboardType="default"
            error={errors.address}
            onFocus={() => {
              handleError(null, "address");
            }}
            onChangeText={(text) => handleOnchange(text, "address")}
          />

          <Input
            placeholder="Enter your city"
            label="City:"
            name
            password={undefined}
            keyboardType="default"
            error={errors.city}
            onFocus={() => {
              handleError(null, "city");
            }}
            onChangeText={(text) => handleOnchange(text, "city")}
          />

          <Input
            placeholder="Enter your mobile number"
            label="Mobile Number:"
            name
            password={undefined}
            keyboardType="number-pad"
            error={errors.number}
            onFocus={() => {
              handleError(null, "number");
            }}
            onChangeText={(text) => handleOnchange(text, "number")}
          />

          <Button title="Proceed" onPress={handleSenderDetails} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReDets;

const styles = StyleSheet.create({
  input: {
    height: 55,
    backgroundColor: "#fafafa",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 1,
    borderWidth: 0.8,
    borderColor: "#ddd",
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
  },
});