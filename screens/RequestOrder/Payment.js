import React, { useRef } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Paystack } from "react-native-paystack-webview";
import Button from "../../component/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import { useOrderState } from "../../component/sub-component/OrderContext";

import { ALERT_TYPE, Dialog, Toast } from "react-native-alert-notification";


const Payment = ({ route }) => {
  const { senderEmail, senderName, senderNumber, price, } = route.params;

  const paystackWebViewRef = useRef();

  const priceInKobo = (Math.round(price * 100) / 10).toFixed(1)

  const handlePaymentSuccess = async () => {
    try {
      const response = await axios.post("https://sendit-bcknd.onrender.com/api/payment/verify", {
        transactionReference: paymentReference,
      });

      const { status } = response.data;

      if (status === "success") {
        console.log("Payment successful");
      
      } else {

        console.log("Payment failed");
        Toast.show({
          type: ALERT_TYPE.DANGER,
          title: "Failed",
          textBody: "Payment was not successful. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error verifying payment:", error);
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: "Failed",
        textBody: "An error occurred while verifying the payment.",
      });
    }
  };



  React.useEffect(()=> {
    console.log( priceInKobo);
    console.log(paymentReference)
  }, [])

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#fafafa",
        flex: 1,
        paddingHorizontal: 20,
      }}
    >
      <View>
        <Paystack
          paystackKey="pk_test_359df4db4bacec91c6773affdf380209e0f59a16"
          amount={priceInKobo}
          billingEmail={senderEmail}
          ref={paystackWebViewRef}
          activityIndicatorColor="green"
          onCancel={(e) => {
            console.log("Opps payment failed");
          }}
          onSuccess={(res) => {
            console.log("Payment received, verifying...");
            handlePaymentSuccess();
           
          }}
          autoStart={true}
        />
        <Button
          title="Pay Now"
          onPress={() => paystackWebViewRef.current.startTransaction()}
        />
      </View>
    </SafeAreaView>
  );
};

export default Payment;
