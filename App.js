import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { styled } from "nativewind";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChangePassword from "./screens/Auth/ChangePassword";
import Register from "./screens/Auth/Register";
import ForgotPass from "./screens/Auth/ForgotPass";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Dashboard from "./screens/Dashboard/dashboard";
import NotifyNav from "./screens/Notification/notifyNav";
import TrackNav from "./screens/Track/trackNav";
import OrderNav from "./screens/Order/orderNav";
import DashNav from "./screens/Dashboard/DashNav";
import ProfileNav from "./screens/Profile/ProfileNav";
import CreateDelivery from "./screens/RequestOrder/CreateDeliveryNav";
import { AlertNotificationRoot } from "react-native-alert-notification";
import Login from "./screens/Auth/Login";
import Onboard from "./screens/Auth/Onboard";
import {
  Entypo,
  Feather,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";
import {
  BottomSheetModalProvider,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <BottomSheetModalProvider>
        <AlertNotificationRoot>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Register"
              screenOptions={{
                header: () => null,
              }}
            >
              <Stack.Screen name="Onboard" component={Onboard} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen
                name="Register"
                component={Register}
                options={{ presentation: "card" }}
              />
              <Stack.Screen name="ForgotPass" component={ForgotPass} />
              <Stack.Screen name="ChangePassword" component={ChangePassword} />
              <Stack.Screen name="ProfileNav" component={ProfileNav} />
              <Stack.Screen name="CreateDelivery" component={CreateDelivery} />
              <Stack.Screen name="Tab" component={TabBar} />
            </Stack.Navigator>
          </NavigationContainer>
        </AlertNotificationRoot>
      </BottomSheetModalProvider>
    </SafeAreaProvider>
  );
}

function TabBar() {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          // marginVertical: 5,
          // marginHorizontal: 15,
          // borderRadius: 30,
          // elevation: 10,
          // paddingVertical: 5,
        },
        tabBarActiveTintColor: "#6c63ff",
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: {
          fontWeight: "normal",
          backgroundColor: "#fafafa",
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        options={{
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="home"
              size={focused ? 26 : 23}
              color={focused ? "#6c63ff" : "gray"}
            />
          ),
        }}
        component={DashNav}
      />

      <Tab.Screen
        name="Track Package"
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="map-marker-radius-outline"
              size={focused ? 26 : 23}
              color={focused ? "#6c63ff" : "gray"}
            />
          ),
        }}
        component={TrackNav}
      />

      <Tab.Screen
        name="History"
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="history"
              size={focused ? 28 : 24}
              color={focused ? "#6c63ff" : "gray"}
            />
          ),
        }}
        component={OrderNav}
      />

      <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="user-circle"
              size={focused ? 26 : 23}
              color={focused ? "#6c63ff" : "gray"}
            />
          ),
        }}
        component={ProfileNav}
      />
    </Tab.Navigator>
  );
}
