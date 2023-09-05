import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Animated,
  Image,
  Keyboard,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, EvilIcons } from "@expo/vector-icons";
import { AnimatedView, COLORS, SIZES } from "../../constant/Theme";
import BottomSheet, {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetBackdrop,
  BottomSheetView,
  BottomSheetBackdropProps,
} from "@gorhom/bottom-sheet";
import PhotoBottomSheet from "../../component/PhotoBottomSheet";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import Input from "../../component/form/Input";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Button from "../../component/Button";

const ReDets = ({ navigation }) => {
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [inputs, setInputs] = React.useState({
    email: "",
    name: "",
    address: "",
    city: "",
    number: "",
  });

  const handleSenderDetails = () => {
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

    if (!inputs.name) {
      handleError("Name is required", "name");
      valid = false;
    } else if (inputs.name.length <= 3) {
      handleError("Name to short", "name");
      valid = false;
    }

    if (!inputs.address) {
      handleError("Address is required", "address");
      valid = false;
    } else if (inputs.address.length <= 5) {
      handleError("Address to short", "address");
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

    if (valid) {
      navigation.navigate("Recieve");
      RegisterUser();
    }

    console.log("clicking.....");

    // console.log(profileImage);
    navigation.navigate("Recieve");
  };

  const RegisterUser = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);

      try {
        // see how to validate image, also pass input to another screen payment also.
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
        // paddingTop: insets.top,
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
          style={{
            // backgroundColor: "#ddd",
            // borderRadius: 50,
            padding: 2,
            marginVertical: 3,
          }}
        >
          <Feather name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ paddingLeft: 10, fontSize: 20, fontWeight: "500" }}>
          Delivery
        </Text>
        <Text style={{ paddingLeft: 10, fontSize: 20, fontWeight: "500" }}>
          {/* Track */}
        </Text>
      </View>

      <ScrollView 
      showsVerticalScrollIndicator={false}
      style={{ width: "100%", paddingVertical: 5 }}>
        <View
          style={{
            width: "100%",
            paddingVertical: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: SIZES.h1, fontWeight: "500" }}>
            Reciever Details.
          </Text>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ width: "100%", paddingVertical: 5, marginVertical: 15 }}
        >
          {/* <View
            style={{
              width: "100%",
              // paddingVertical: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: SIZES.h3, fontWeight: "500" }}>
              Sender Details.
            </Text>
            <Text
              style={{ fontSize: SIZES.h6, fontWeight: "400", opacity: 0.5 }}
            >
              Filling in your details for pickup
            </Text>
          </View> */}

          <View style={{ paddingVertical: 10 }}>
            {/* <View
            style={{
              width: "100%",
              height: 150,
              // borderWidth: 0.5,
              paddingVertical: 5,
              marginVertical: 5,
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            {profileImage ? (
              <Image
                source={{ uri: profileImage }}
                style={{ width: "100%", height: "100%" }}
                resizeMode="cover"
              />
            ) : (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={OpenBottomSheet}
                style={{}}
              >
                <View
                  style={{
                    alignItems: "center",
                    borderWidth: 2,
                    borderStyle: "dotted",
                    padding: 15,
                    borderRadius: 10,
                  }}
                >
                  <EvilIcons name="image" size={38} color="black" />
                  <Text style={{ fontSize: 17, opacity: 0.5 }}>
                    Upload image
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          </View>
          {profileImage ? (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={OpenBottomSheet}
              style={{
                alignSelf: "flex-end",
                borderWidth: 0.5,
                padding: 5,
                borderRadius: 5,
              }}
            >
              <Text style={{ fontSize: 15, opacity: 0.5 }}>change image</Text>
            </TouchableOpacity>
          ) : null} */}

            <View>

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
                placeholder="Enter reciever email"
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
                placeholder="Enter your addess"
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
            </View>
            <Button title="Proceed" onPress={handleSenderDetails} />
            {/* <TouchableOpacity
            activeOpacity={0.9}
            style={styles.btnCont}
            onPress={handleSenderDetails}
          >
            <Text
              style={{ fontSize: 18, fontWeight: "500", color: COLORS.white }}
            >
              Proceed
            </Text>
          </TouchableOpacity> */}
          </View>
        </ScrollView>
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
  btnCont: {
    height: 55,
    width: "100%",
    backgroundColor: "#6c63ff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 30,
    fontWeight: "500",
  },
});
