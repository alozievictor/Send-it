import { useOrderState } from "../../component/sub-component/OrderContext";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import Button from "../../component/Button";
import axios from "axios";

const Checkout = ({ navigation }) => {
  const { senderDetails, receiverDetails } = useOrderState();
  const [distance, setDistance] = React.useState(null);
  const [price, setPrice] = React.useState(null);
  const senderEmail = senderDetails.email;
  const senderName = senderDetails.name;
  const senderNumber = senderDetails.number;
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    calculateDistance();
  }, []);

  const calculateDistance = async () => {
    setLoading(true);
    try {
      const senderResponse = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${senderDetails.address}&key=7d1c19b581f642a8bf06f1f76db51f6c`
      );

      const receiverResponse = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${receiverDetails.address}&key=7d1c19b581f642a8bf06f1f76db51f6c`
      );

      if (
        senderResponse.data &&
        senderResponse.data.results &&
        senderResponse.data.results.length > 0
      ) {
        const senderLatLng = senderResponse.data.results[0].geometry;
        const receiverLatLng = receiverResponse.data.results[0].geometry;

        const result = distanceBetween(
          senderLatLng.lat,
          senderLatLng.lng,
          receiverLatLng.lat,
          receiverLatLng.lng
        );

        const calculatedDistance = result / 1000;
        setDistance(calculatedDistance);
        const calculatedPrice =
          calculatePriceBasedOnDistance(calculatedDistance);
        const priceInKobo = (Math.round(calculatedPrice * 100) / 10).toFixed(1);
        setPrice(priceInKobo);
        setLoading(false);
      } else {
        console.error("Invalid sender address or no results found");
      }
    } catch (error) {
      console.error(`Error calculating distance:, ${error}`);
    }
  };

  const distanceBetween = (lat1, lon1, lat2, lon2) => {
    const R = 6371; 
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
  };

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };

  const calculatePriceBasedOnDistance = (distance) => {
    const ratePerKilometerInNGN = 150;
    return distance * ratePerKilometerInNGN;
  };

  const handlePayment = () => {
    navigation.navigate("Payment", {
      senderEmail,
      senderName,
      senderNumber,
      price,
    });
  };

  return (
    <SafeAreaView style={styles.container} >
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
            borderRadius: 50,
            padding: 2,
            marginVertical: 3,
          }}
        >
          <Feather name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ paddingLeft: 10, fontSize: 20, fontWeight: "500" }}>
          Checkout
        </Text>
        <Text style={{ paddingLeft: 10, fontSize: 20, fontWeight: "500" }}>
          {/* Track */}
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.titleCont}>
          <Text style={styles.subtitle}>Sender Details:</Text>
          <Text style={styles.title}>Name: {senderDetails.name}</Text>
          <Text style={styles.title}>Email: {senderDetails.email}</Text>
          <Text style={styles.title}>Number: {receiverDetails.number}</Text>
        </View>

        <View style={styles.titleCont}>
          <Text style={styles.subtitle}>Receiver Details:</Text>
          <Text style={styles.title}>Name: {receiverDetails.name}</Text>
          <Text style={styles.title}>Email: {receiverDetails.email}</Text>
          <Text style={styles.title}>Number: {receiverDetails.number}</Text>
        </View>

        <View style={styles.titleCont}>
          <Text style={styles.subtitle}>Distance / Price:</Text>

          <Text style={styles.title}>Package: {senderDetails.packageName}</Text>
          <Text style={styles.title}>From: {senderDetails.address}</Text>
          <Text style={styles.title}>To: {receiverDetails.address}</Text>

          <Text style={styles.title}>
            Distance:{" "}
            {distance !== null ? `${distance.toFixed(2)} km` : "Calculating..."}{" "}
          </Text>

          <Text style={styles.title}>
            Total Amount: {price !== null ? `₦${price}` : "Calculating..."}{" "}
          </Text>
        </View>

        {loading ? (
          <Button title="Calculating..." disabled={true} />
        ) : (
          <Button title="Proceed To Payment" onPress={handlePayment} />
        )}

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    paddingHorizontal: 15,
  },
  content: {
    width: "100%",
    backgroundColor: "#fff",
    height: "100%",
    borderRadius: 5,
    elevation: 1,
    paddingHorizontal: 5,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "500",
    paddingBottom: 5,
  },
  title: {
    fontSize: 15,
    fontWeight: "400",
    paddingVertical: 5,
    // borderWidth:3
  },
  titleCont: {
    borderColor: "#bbb",
    borderStyle: "dashed",
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
});

export default Checkout;
