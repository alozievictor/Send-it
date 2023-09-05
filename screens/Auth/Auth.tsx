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
} from "react-native";
import React from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import AppIntroSlider from "react-native-app-intro-slider";
import { AnimatedView, COLORS, SIZES } from "../../constant/Theme";
import { useForm } from "react-hook-form";
import Layout from "../../constant/Layout";
import Register from "./Register";
import AsynceStorage from "@react-native-async-storage/async-storage";
import FormSelectedBtn from "../../component/formSelectedBtn";
import MobileLogin from "../../component/form/mobileLogin";
import EmailLogin from "../../component/form/emailLogin";

const Boarding = [
  {
    id: 1,
    title: "Welcome to faxxway",
    description: "pickup and delivery granted and package is secure.",
    image: require("../../assets/welcome.png"),
  },
  {
    id: 2,
    title: "Door to door\ndelivery made easy",
    description: "Pickup from your location at your perferred date and time.",
    image: require("../../assets/messanger.png"),
  },
  {
    id: 3,
    title: "Fast Delivery",
    description:
      "Looking for a fast way to deliver items, faxxway aways at your service.",
    image: require("../../assets/delivery.png"),
  },
  {
    id: 4,
    title: "Fast Delivery",
    description:
      "Looking for a fast way to deliver items, faxxway aways at your service.",
    image: require("../../assets/Texting.png"),
  },
];

type HomeScreenProps = {
  navigation: any;
  ref: any;
};

type IFormData = {
  email: string;
  password: string;
};

const width = Dimensions.get("window");

export const Auth: React.FC<HomeScreenProps> = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [showLoginPage, setShowLoginPage] = React.useState<boolean>();
  const [isEnabled, setIsEnabled] = React.useState(true);
  const scrollView = React.useRef<any>();

  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<IFormData>();

  const buttonLabel = (
    label:
      | string
      | number
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | React.ReactFragment
      | null
      | undefined
  ) => {
    return (
      <View style={{ padding: 12 }}>
        <Text
          style={{
            color: COLORS.title,
            fontSize: SIZES.h4,
            fontWeight: "600",
          }}
        >
          {label}
        </Text>
      </View>
    );
  };

  if (!showLoginPage) {
    return (
      <AppIntroSlider
        data={Boarding}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                padding: 15,
                paddingTop: 150,
              }}
            >
              <Image
                source={item.image}
                style={{
                  width: SIZES.width - 80,
                  height: 400,
                }}
                resizeMode="contain"
              />
              <Text
                style={{
                  fontWeight: "bold",
                  color: COLORS.title,
                  fontSize: 25,
                  textAlign: "center",
                }}
              >
                {item.title}
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  paddingTop: 10,
                  color: COLORS.title,
                }}
              >
                {item.description}
              </Text>
            </View>
          );
        }}
        activeDotStyle={{
          backgroundColor: COLORS.primary,
          width: 30,
        }}
        renderNextButton={() => buttonLabel("Next")}
        renderDoneButton={() => buttonLabel("Done")}
        onDone={() => {
          setShowLoginPage(true);
        }}
      />
    );
  }

  return (
    <SafeAreaView
      style={{ paddingTop: insets.top, backgroundColor: "#fafafa", flex: 1 }}
    >
      <AnimatedView
        animation={"zoomIn"}
        duration={1000} 
        delay={600}
      >
        <View
          style={{
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingHorizontal: 20,
          }}
        >
          <AnimatedView
            animation={"zoomIn"}
            duration={1000}
            delay={500}
            style={{ width: "100%", marginVertical: 20 }}
          >
            <Text style={{ fontSize: 33, fontWeight: "500" }}>
              Welcome{"\n"}Back!
            </Text>
          </AnimatedView>
          <AnimatedView style={{ flexDirection: "row" }}>
            <FormSelectedBtn
              title="Mobile Number"
              backgroundColor={"#ddd"}
              style={styles.borderLeft}
              onPress={() => scrollView.current.scrollTo({ x: 0 })}
            />
            <FormSelectedBtn
              title="Email"
              backgroundColor={"#ddd"}
              style={styles.borderRight}
              onPress={() => scrollView.current.scrollTo({ x: 500 })}
            />
          </AnimatedView>
        </View>
        <ScrollView
          ref={scrollView}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        >
          <MobileLogin navigation={navigation} route={undefined}  />
          <EmailLogin navigation={navigation} route={undefined}/>
        </ScrollView>
      </AnimatedView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  borderLeft: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  borderRight: {
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    marginLeft: 5,
  },
});
