import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Payment = () => {
  return (
    <View>
      <Text>Payment</Text>
    </View>
  )
}

export default Payment

const styles = StyleSheet.create({})




// import React, { useRef } from "react";
// import {
//   View,
//   TouchableOpacity,
//   Text,
//   StyleSheet,
//   TextInput,
//   KeyboardAwareScrollView,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { AnimatedView, COLORS, SIZES } from "../../constant/Theme";
// import axios from "axios";
// import { Paystack } from "react-native-paystack-webview";
// import 

// const Payment = () => {
//   // const paystackWebViewRef = useRef(paystackProps.PayStackRef);

//   // const [Loading, setLoading] = React.useState(false);

//   // const [paymentDetails, setPaymentDetails] = React.useState({
//   //   amount: 5000,
//   //   email: 'aloziev50@gmail.com',
//   //   orderId: '123456', // An example order ID
//   // });

//   // const initiatePayment = async () => {
//   //   console.log('Start');
//   //   try {
//   //     // Send a request to the Node.js server to initiate the payment
//   //     const response = await axios.post(
//   //       'http://localhost:4005/api/payment',
//   //       paymentDetails
//   //     );

//   //     // Retrieve the payment authorization URL from the server response
//   //     const { authorization_url } = response.data;

//   //     // Update the payment details and open the Paystack payment page within the WebView
//   //     setPaymentDetails({ ...paymentDetails, initiated: true });
//   //     setAuthorizationUrl(authorization_url);
//   //   } catch (error) {
//   //     console.log(error);
//   //     console.error('Error initiating payment:', error);
//   //   }
//   // };

//   // const handlePaymentCompletion = (event) => {
//   //   // Handle the payment completion within the WebView component
//   //   const { url } = event.nativeEvent;

//   //   if (url.includes('payment_success')) {
//   //     // Payment success handling
//   //     // Send a request to the Node.js server to verify the payment
//   //     verifyPayment();
//   //   } else if (url.includes('payment_failure')) {
//   //     // Payment failure handling
//   //   }
//   // };

//   // const verifyPayment = async () => {
//   //   try {
//   //     // Send a request to the Node.js server to verify the payment
//   //     await axios.post('http://localhost:4005/api/payment/verify', {
//   //       Id: paymentDetails._Id,
//   //     });
//   //   } catch (error) {
//   //     console.error('Error verifying payment:', error);
//   //   }
//   // };

//   return (
//     <SafeAreaView
//       style={{
//         backgroundColor: "#fafafa",
//         flex: 1,
//         paddingHorizontal: 20,
//       }}
//     >
//       // <View style={{ flex: 1 }}>
//       //   <Paystack
//       //     paystackKey=""
//       //     amount={"2000.00"}
//       //     billingEmail="aloziev50@gmail.com"
//       //     activityIndicatorColor="green"
//       //     onCancel={(e) => {
//       //       // handle response here
//       //     }}
//       //     onSuccess={(res) => {
//       //       // handle response here
//       //     }}
//       //     autoStart={true}
//       //   />
//       // </View>

//     </SafeAreaView>
//   );
// };

// export default Payment;

// const styles = StyleSheet.create({
//   btnCont: {
//     height: 55,
//     width: "100%",
//     backgroundColor: "#6c63ff",
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 10,
//     marginTop: 30,
//     fontWeight: "500",
//   },
// });
