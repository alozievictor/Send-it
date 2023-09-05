import { NavigationProp, useNavigation } from "@react-navigation/native";
import {
  Box,
  HStack,
  VStack,
  Text,
  Icon,
  Center,
  Pressable,
  useColorModeValue,
  StatusBar,
  Spinner,
} from "native-base";
import React, { memo } from "react";
import {
  Animated,
  Dimensions,
  ImageBackground,
  Platform,
  View,
} from "react-native";
import {
  AnimatedLayoutView,
  BackgroundLayout,
  MasterLayout,
} from "../components/layouts";
import ProfileNav from "../components/navigation/profileNav";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MoreKids from "./MoreKids";
import BioData from "../components/layouts/bioData";
import {
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import BubbleTabBar, {
  IBubbleTabConfig,
  IIconRenderer,
} from "react-native-bubble-tabbar";
import { Logs } from "expo";
import { SceneMap, TabView } from "react-native-tab-view";
import { useGlobalState } from "../components/dashboard/Parent-dashboard";
import dataSetTest from "../../testDataSet.json";
import Calendar from "../interface/calendar";
import Term from "../components/attendance/term";
import Layout from "../constants/Layout";
import { Http } from "../constants";
import { IKid } from "../interface";
import { WebView } from "react-native-webview";
import { WebViewSourceHtml } from "react-native-webview/lib/WebViewTypes";
// import { getResultId } from "../hook/getResults";
import { RequestProps } from "../types";
import { Results } from "../components/results/Results";

Logs.enableExpoCliLogging();

function MyTabs(props: any) {
  console.log(props.resulturi);
  const link: WebViewSourceHtml = {
    html: props.resulturi, // resultId / StudentID
  };
  const FirstRoute = () => (
    <View style={{ height: "70%" }}>
      <BioData></BioData>
    </View>
  );

  const SecondRoute = () => <Term></Term>;

  const ThirdRoute = () => {
    return (
      // <View
      //   style={{
      //     width: "100%",
      //     height: "70%",
      //     maxHeight: "70%",
      //     position: "relative",
      //   }}
      // >
      //   <WebView
      //     source={{
      //       uri: props.resulturi,
      //     }}
      //     style={{ height: "100%", width: "100%", tintColor: "gray" }}
      //     javaScriptEnabled={true}
      //     domStorageEnabled={true}
      //     scrollEnabled={true}
      //     renderLoading={() => {
      //       return (
      //         <Center
      //           style={{ width: "100%", height: 200, position: "absolute" }}
      //         >
      //           <Spinner size={20}></Spinner>
      //         </Center>
      //       );
      //     }}
      //     startInLoadingState={true}
      //   />
      //   <Upssies url={props.resulturi}></Upssies>
      // </View>
      <Results kid={props.kid}></Results>
    );
  };

  const FourthRoute = () => (
    <Center flex={1} my="4">
      This is Tab 4{" "}
    </Center>
  );

  const initialLayout = {
    width: Dimensions.get("window").width,
  };
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "first",
      title: "Bio Data",
    },
    {
      key: "second",
      title: "Attendance",
    },
    {
      key: "third",
      title: "Result",
    },
    {
      key: "fourth",
      title: "Awards",
    },
  ]);
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    fourth: FourthRoute,
  });
  const renderTabBar = (props: any) => {
    return (
      <Box flexDirection="row">
        {props.navigationState.routes.map((route: any, i: number) => {
          const color =
            index === i
              ? useColorModeValue("#FC7302", "#FC7302")
              : useColorModeValue("#64748B", "#64748B");
          const bgColor = index === i ? "#FFF1E6" : "white";

          return (
            <Box
              flex={1}
              alignItems="center"
              py="4"
              borderBottomWidth={2}
              borderBottomColor={"#F0F1F3"}
            >
              <Pressable
                onPress={() => {
                  // console.log(i);
                  setIndex(i);
                }}
              >
                <Animated.Text
                  style={
                    Layout.isSmallDevice
                      ? {
                          color,
                          fontSize: 10,
                          backgroundColor: bgColor,
                          padding: 8,
                        }
                      : {
                          color,
                          fontSize: 14,
                          backgroundColor: bgColor,
                          padding: 8,
                        }
                  }
                >
                  {route.title}
                </Animated.Text>
              </Pressable>
            </Box>
          );
        })}
      </Box>
    );
  };

  return (
    <TabView
      swipeEnabled={false}
      navigationState={{
        index,
        routes,
      }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
}

const KidProfile = () => {
  const sat = useGlobalState();
  let resultUrl = "";
  const kid = sat.get();
  const [resultId, setResultId] = React.useState(0);
  const [resultIdLoading, setResultIdLoading] = React.useState(true);

  !resultIdLoading
    ? (resultUrl = `https://school.qampusplus.com/generate_result/student/${resultId}/${kid.student_id}`)
    : null;
  // console.log("kid:::" + JSON.stringify(kid));
  const [profile, setProfile] = React.useState({});
  const http = new Http();
  // http.request(`/api/student-profile/${id}`, "GET", null, true).then((res) => {
  //   console.log(JSON.stringify(res));
  //   setProfile(res.data.profile);
  // });

  // const kidIndex = dataSetTest.findIndex((kid) => kid.id == id.get());

  const navigation = useNavigation<NavigationProp<any>>();
  const onCreate = () => {
    navigation.navigate("Home");
  };
  const face = require("../../assets/images/Avatar.png");

  const words = kid.schoolclassname?.split(" ");
  const firstTwoWords = words?.slice(0, 2).join(" ");
  const remainingWords = words?.slice(2).join(" ");

  return (
    <React.Fragment>
      <BackgroundLayout>
        {/* <AnimatedLayoutView> */}
        <MasterLayout
          useSafeArea={true}
          showBackButtonLeft={true}
          buttonLeftIconChevron={true}
          handleOnPressLeftNode={onCreate}
          headerTitle={"Student Profile"}
          showTitles={true}
          showAvatar={false}
          showAdd={false}
          customClass={firstTwoWords}
          showCustomElement={true}
        >
          <HStack
            mt={2}
            width={"100%"}
            justifyContent={"center"}
            alignContent={"center"}
          >
            <VStack alignItems={"center"}>
              <Box
                mb={2}
                height={Layout.isSmallDevice ? 70 : 90}
                width={Layout.isSmallDevice ? 70 : 90}
                borderWidth={2}
                borderColor={"#FEBF8B"}
                borderRadius={"full"}
                padding={2}
              >
                <ImageBackground
                  source={face}
                  style={{ width: "100%", height: "100%" }}
                ></ImageBackground>
              </Box>
              <Text
                color={"#333333"}
                fontWeight={800}
                fontSize={Layout.isSmallDevice ? 16 : 20}
                textTransform={"capitalize"}
              >
                {kid.stdfullname}
              </Text>
              <Text
                color={"#6B7280"}
                textTransform={"capitalize"}
                fontSize={Layout.isSmallDevice ? 12 : 14}
              >
                {kid.school_name}
              </Text>
            </VStack>
          </HStack>
          <Box backgroundColor={"red"} minWidth={"100%"} height={"100%"} my={5}>
            <MyTabs isLoadingURL={resultIdLoading} resulturi={resultUrl} />
          </Box>
        </MasterLayout>
        {/* </AnimatedLayoutView> */}
      </BackgroundLayout>
    </React.Fragment>
  );
};
export default KidProfile;