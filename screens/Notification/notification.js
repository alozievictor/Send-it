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

const Notification = () => {

  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      style={{
        paddingTop: insets.top,
        backgroundColor: "#fafafa",
        flex: 1,
        paddingHorizontal: 20,
      }}
    >
      <View>
        <View style={{ flexDirection: "row", alignItems: "center", marginBottom:15 }}>
          <TouchableOpacity style={{ backgroundColor:"#ddd", borderRadius:50, padding:2,}}>
            <Feather name="chevron-left" size={24} color="black" />
          </TouchableOpacity>
          <Text style={{ paddingLeft:5, fontSize:20, fontWeight:'500' }}>Notifications</Text>
        </View>
        <ScrollView 
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={200}
          decelerationRate="fast"
          pagingEnabled={true}
          contentContainerStyle={styles.contentContainer}
          // style={{borderWidth:2, borderColor:'#ccc',}}
        >
          
          <View style={{ borderWidth:0.5, borderColor:'#ccc', flexDirection:"row", justifyContent:'space-around', alignItems:'center', borderRadius:5, marginVertical:5}}>
            <View style={{flexDirection:"row", alignSelf:'center', borderWidth:2, borderColor:'#ccc'}}>
            <Ionicons name="wallet" size={25} color="#e7a368" />
            </View>
          <View style={{paddingVertical:7}}>
            <Text style={{fontSize:SIZES.h4,fontWeight:'500', color:COLORS.title}}>Recharge successfully</Text>
            <View>
              <Text style={{fontSize:SIZES.h5, color:"gray"}}>You just deposited the sum of 5000 to your faxxway wallet.</Text>
              <Text style={{fontSize:SIZES.h6, color:"gray"}}>2023-05-18, 2:30 pm</Text>
            </View>
          </View>
          </View>
          <View style={{ borderWidth:0.5, borderColor:'#ccc', flexDirection:"row", justifyContent:'space-around', alignItems:'center', borderRadius:5, marginVertical:5}}>
            <View >
            <Ionicons name="wallet" size={25} color="#e7a368" />
            </View>
          <View style={{ paddingVertical:7}}>
            <Text style={{fontSize:SIZES.h4,fontWeight:'500', color:COLORS.title}}>Recharge successfully</Text>
            <View>
              <Text style={{fontSize:SIZES.h5, color:"gray"}}>You just deposited the sum of 5000 to your faxxway wallet.</Text>
              <Text style={{fontSize:SIZES.h6, color:"gray"}}>2023-05-18, 2:30 pm</Text>
            </View>
          </View>
          </View>
          <View style={{ borderWidth:0.5, borderColor:'#ccc', flexDirection:"row", justifyContent:'space-around', alignItems:'center', borderRadius:5, marginVertical:5}}>
            <View style={{padding:10}}>
            <Ionicons name="wallet" size={25} color="#e7a368" />
            </View>
          <View style={{paddingHorizontal:7.5, paddingVertical:7}}>
            <Text style={{fontSize:SIZES.h4,fontWeight:'500', color:COLORS.title}}>Recharge successfully</Text>
            <View>
              <Text style={{fontSize:SIZES.h5, color:"gray"}}>You just deposited the sum of 5000 to your faxxway wallet.</Text>
              <Text style={{fontSize:SIZES.h6, color:"gray"}}>2023-05-18, 2:30 pm</Text>
            </View>
          </View>
          </View>

        </ScrollView>
        <Text>Notification</Text>
      </View>
    </SafeAreaView>
  );
};

export default Notification;

const styles = StyleSheet.create({});
