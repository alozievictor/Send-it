import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Keyboard,
} from "react-native";
import React from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import BottomSheet, {
  BottomSheetView,
  BottomSheetBackdropProps,
} from "@gorhom/bottom-sheet";
import PhotoBottomSheet from "../../component/PhotoBottomSheet";
import * as ImagePicker from "expo-image-picker";
import { AnimatedView, COLORS, SIZES } from "../../constant/Theme";
import Loader from "../../component/form/Loader";
import Input from "../../component/form/Input";
import Button from "../../component/Button";

const Edit = ({ navigation }) => {
  const [profileImage, setProfileImage] = React.useState("");
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [inputs, setInputs] = React.useState({
    Name: "",
    address: "",
    email: "",
    number: "",
  });

  const LunchCamera = async () => {
    let { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry we need camera roll permission to make this work");
      console.log("canceled");
    }

    if (status === "granted") {
      const response = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
      });

      if (!response.canceled) {
        setProfileImage(response.assets[0].uri);
        // console.log(response.assets[0].uri);
      }
    }

    console.log("Camera");
    setIsOpen(false);
  };

  const LunchGallary = async () => {
    let { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry we need camera roll permission to make this work");
      console.log("canceled");
    }

    if (status === "granted") {
      const response = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
      });

      if (!response.canceled) {
        setProfileImage(response.assets[0].uri);
        // console.log(response.assets[0].uri);
      }
    }
    console.log("Gallary");
    setIsOpen(false);
  };

  const HandleEdit = () => {
    Keyboard.dismiss();
    let valid = true;
    let mobileNumberPattern = /^[0-9]{10}$/;

    if (!inputs.firstName) {
      handleError("FirstName is required", "firstName");
      valid = false;
    } else if (inputs.firstName.length <= 3) {
      handleError("FirstName to short", "firstName");
    }

    if (!inputs.lastName) {
      handleError("LastName is required", "lastName");
      valid = false;
    } else if (inputs.lastName.length <= 3) {
      handleError("FirstName to short", "lastName");
    }

    if (!inputs.email) {
      handleError("Email is required", "email");
      valid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError("Invalid email address", "email");
    }

    if (!inputs.number) {
      handleError("Mobile Number is required", "number");
      valid = false;
    } else if (inputs.number.length < 11) {
      handleError("Invalid mobile number", "number");
    } else if (inputs.number.length > 11) {
      handleError("Invalid mobile number", "number");
    } else if (mobileNumberPattern.test(inputs.number)) {
      handleError("Invalid email address", "email");
    }

    if (valid) {
      EditUserInput();
    }

    console.log("clicking.....");
    // navigation.navigate('Tab');
  };

  const EditUserInput = () => {
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
        // paddingTop: insets.top,
        backgroundColor: "#fafafa",
        flex: 1,
        paddingHorizontal: 20,
      }}
    >
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
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: 15,
            }}
          >
            {profileImage ? (
              <Image
                source={{ uri: profileImage }}
                style={{ width: 110, height: 110, borderRadius: 50 }}
                resizeMode="cover"
              />
            ) : (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={LunchGallary}
                style={{}}
              >
                <Image
                  style={{ width: 110, height: 110, borderRadius: 50 }}
                  source={require("../../assets/card.png")}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            )}
          </View>

          <View
            style={{
              // borderWidth:1,
              paddingVertical: 20,
            }}
          >
            <Input
              placeholder="First Name"
              label="First Name:"
              name
              password={undefined}
              keyboardType="default"
              error={errors.firstName}
              onFocus={() => {
                handleError(null, "firstName");
              }}
              onChangeText={(text) => handleOnchange(text, "firstName")}
            />

            <Input
              placeholder="Enter your addess"
              label="Address:"
              name
              password={undefined}
              keyboardType="default"
              error={errors.addess}
              onFocus={() => {
                handleError(null, "addess");
              }}
              onChangeText={(text) => handleOnchange(text, "addess")}
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
