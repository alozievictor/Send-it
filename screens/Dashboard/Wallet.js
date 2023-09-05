import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Animated,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Feather, Ionicons } from "@expo/vector-icons";
import { AnimatedView, COLORS, SIZES } from "../../constant/Theme";

const Wallet = () => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      style={{
        //   paddingTop: insets.top,
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
            marginBottom: 15,
          }}
        >
          <TouchableOpacity
            style={{ backgroundColor: "#ddd", borderRadius: 50, padding: 2 }}
          >
            <Feather name="chevron-left" size={24} color="black" />
          </TouchableOpacity>
          <Text style={{ paddingLeft: 5, fontSize: 20, fontWeight: "500" }}>
            Wallet
          </Text>
        </View>
        <View>
          <View
            style={{
              width: "100%",
              paddingHorizontal: 10,
              paddingVertical: 10,
              borderRadius: 10,
              elevation: 3,
              backgroundColor: "#FAFAFA",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 10,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons name="wallet" size={25} color="#e7a368" />
                <View style={{ paddingHorizontal: 5 }}>
                  <Text style={{ color: COLORS.title, fontSize: SIZES.h5 }}>
                    Available Balance
                  </Text>
                </View>
              </View>
              <View
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 9,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: COLORS.title,
                    textAlign: "center",
                    fontSize: 18,
                  }}
                >
                  56,000
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Wallet;

const styles = StyleSheet.create({});
