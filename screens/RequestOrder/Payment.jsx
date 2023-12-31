import React, { useRef, useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, ActivityIndicator } from "react-native";
import { Paystack } from "react-native-paystack-webview";
import Button from "../../component/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import { useOrderState } from "../../component/sub-component/OrderContext";

import { ALERT_TYPE, Dialog, Toast } from "react-native-alert-notification";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loader from "../../component/form/Loader";


const Payment = ({navigation, route }) => {
  const { senderDetails, receiverDetails } = useOrderState();

  const { senderEmail, senderName, senderNumber, price, } = route.params;

  const [loading, setloading] = useState(false)
  const paystackWebViewRef = useRef();

  const priceInKobo = (Math.round(price) / 10).toFixed(1)*10

  const [paymentReference, setpaymentReference] = useState('')

  const handlePaymentSuccess = async (paymenRef) => {
    try {
      let input={
        userId: (await AsyncStorage.getItem('userID')).replace(/"/g, ''),
        packageName:senderDetails.packageName,
        senderName:senderDetails.name,
        senderAddress:senderDetails.address,
        senderCity:senderDetails.city,
        senderNumber:senderDetails.number,
        senderEmail:senderDetails.email,
        recieverName:receiverDetails.name,
        recieverAddress:receiverDetails.address,
        recieverCity:receiverDetails.city,
        recieverNumber:receiverDetails.number,
        recieverEmail:receiverDetails.email,
      }
      console.log("User Payload:", input);
      setloading(true)
      const response = await axios({
        url:`https://sendit-bcknd.onrender.com/api/verify-payment/${paymenRef}`,
        method:'post',
        headers:{
          Accept:'application/json',
          'Content-Type':'application/json'
        },
        data:JSON.stringify(input)
      });

      // getting data
      const { status } = response;  

        
      navigation.navigate("Success")


        return;
    } catch (error) {
      console.log("Error verifying payment:", error);
      navigation.navigate("Error")
      return;

    }finally{
      setloading(false)
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
      <Loader visible={loading} />

      <View>
        <Paystack
          paystackKey="pk_test_359df4db4bacec91c6773affdf380209e0f59a16"
          amount={priceInKobo}
          billingEmail={senderEmail}
          ref={paystackWebViewRef}
          activityIndicatorColor="green"
          onCancel={(e) => {
            console.log("Opps payment failed");
            navigation.pop()
            Toast.show({title:"Payment Closed", type:ALERT_TYPE.WARNING})
          }}
          onSuccess={(res) => {
            console.log("Payment received, verifying...");
            setpaymentReference(res.transactionRef.reference)
            handlePaymentSuccess(res.transactionRef.reference);
           
          }}
          autoStart={true}
        />
        <ActivityIndicator size='large' color='green' />
      </View>
    </SafeAreaView>
  );
};

export default Payment;
