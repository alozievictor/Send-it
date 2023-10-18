import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
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
import { OrderProvider } from "./component/sub-component/OrderContext";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <OrderProvider>
        <AlertNotificationRoot theme="dark">
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Tab"
              screenOptions={{
                header: () => null,
              }}
            >
              <Stack.Screen name="Onboard" component={Onboard} />
              <Stack.Screen name="Login" component={Login} options={{ presentation: "card" }}/>
              <Stack.Screen name="Register" component={Register} options={{ presentation: "card" }}/>
              <Stack.Screen name="ForgotPass" component={ForgotPass} options={{ presentation: "card" }}/>
              <Stack.Screen name="ChangePassword" component={ChangePassword} options={{ presentation: "card" }}/>
              <Stack.Screen name="ProfileNav" component={ProfileNav} />
              <Stack.Screen name="CreateDelivery" component={CreateDelivery} />
              <Stack.Screen name="Tab" component={TabBar} />
            </Stack.Navigator>
          </NavigationContainer>
        </AlertNotificationRoot>
      </OrderProvider>
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
    </Tab.Navigator>
  );
}
