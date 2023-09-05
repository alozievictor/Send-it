import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Animated,
  Image
} from "react-native";
import React from "react";
import { Feather, Ionicons, AntDesign, MaterialCommunityIcons, FontAwesome5, Entypo, MaterialIcons } from "@expo/vector-icons";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { AnimatedView, COLORS, SIZES } from "../../constant/Theme";
import Button from "../../component/Button"

const Profile = ({navigation}) => {

  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      style={{
        // paddingTop: insets.top,
        backgroundColor: "#fff",
        flex: 1,
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 15, paddingVertical:3}}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={()=> navigation.goBack()}
          style={{ backgroundColor: "#ddd", borderRadius: 50, padding: 2, marginVertical:3 }}
        >
          <Feather name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ paddingLeft: 10, fontSize: 20, fontWeight: "500" }}>
          Profile
        </Text>
      </View>
      <View>
        <View style={{ flexDirection:'row', alignItems:'center', padding:25, borderRadius: 5, elevation:2, backgroundColor: "#fff", marginTop:20 }}>
            <View style={{paddingHorizontal:20}}>
              <Text style={{fontSize:18, fontWeight:'500', color:''}}>UserName</Text>
              <Text style={{fontSize:15, fontWeight:'500', color:COLORS.small}}>useraccount@gmail.com</Text>
            </View>
        </View> 

        <View style={{paddingVertical:20,}}>
          <TouchableOpacity onPress={()=> navigation.goBack()} activeOpacity={0.8} style={{ flexDirection:'row', justifyContent:'space-between' , alignItems:'center', paddingVertical:5, marginVertical:1, paddingHorizontal:5, borderBottomColor:'#ccc', borderBottomWidth:0.5 }}>
            <View style={{ flexDirection:'row', alignItems:'center', paddingVertical:10, width:"50%"}}>
            <View style={{width:"25%",}}>
              <MaterialCommunityIcons name="view-dashboard" size={24} color="#737a80" />
              </View>
              <Text style={{fontSize:16, fontWeight:'500', color:COLORS.small}}>Dashboard</Text>
            </View>
            <View style={{width:"50%"}}>
              <AntDesign style={{alignSelf:'flex-end'}} name="right" size={20} color="#737a80" />
            </View> 
          </TouchableOpacity>

          <TouchableOpacity onPress={()=> navigation.navigate("Edit")} activeOpacity={0.8} style={{ flexDirection:'row', justifyContent:'space-between' , alignItems:'center', paddingVertical:5, marginVertical:1, paddingHorizontal:5, borderBottomColor:'#ccc', borderBottomWidth:0.5 }}>
            <View style={{ flexDirection:'row', alignItems:'center', paddingVertical:10, width:"50%"}}>
            <View style={{width:"25%",}}>
              <FontAwesome5 name="user-alt" size={24} color="#737a80" />
              </View>
              <Text style={{fontSize:16, fontWeight:'500', color:COLORS.small}}>Edit Profile</Text>
            </View>
            <View style={{width:"50%"}}>
              <AntDesign style={{alignSelf:'flex-end'}} name="right" size={20} color="#737a80" />
            </View> 
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.8} style={{ flexDirection:'row', justifyContent:'space-between' , alignItems:'center', paddingVertical:5, marginVertical:1, paddingHorizontal:5, borderBottomColor:'#ccc',  borderBottomWidth:0.5 }}>
            <View style={{ flexDirection:'row', alignItems:'center', paddingVertical:10, width:"50%"}}>
              <View style={{width:"25%",}}>
                <Entypo name="address" size={24} color="#737a80" />
              </View>
              <Text style={{fontSize:16, fontWeight:'500', color:COLORS.small}}>Save Address</Text>
            </View>
            <View style={{width:"50%"}}>
              <AntDesign style={{alignSelf:'flex-end'}} name="right" size={20} color="#737a80" />
            </View> 
          </TouchableOpacity>
        </View>

        <View style={{paddingVertical:5}}>
          <TouchableOpacity activeOpacity={0.8} style={{ flexDirection:'row', justifyContent:'space-between' , alignItems:'center', paddingVertical:5, marginVertical:1, paddingHorizontal:5, borderBottomColor:'#ccc',  borderBottomWidth:0.5 }}>
            <View style={{ flexDirection:'row', alignItems:'center', paddingVertical:10, width:"50%"}}>
              <View style={{width:"25%",}}>
                <AntDesign name="setting" size={24} color="#737a80"/> 
              </View>
              <Text style={{fontSize:16, fontWeight:'500', color:COLORS.small}}>Settings</Text>
            </View>
            <View style={{width:"50%"}}>
              <AntDesign style={{alignSelf:'flex-end'}} name="right" size={20} color="#737a80" />
            </View> 
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.8} style={{ flexDirection:'row', justifyContent:'space-between' , alignItems:'center', paddingVertical:5, marginVertical:1, paddingHorizontal:5, borderBottomColor:'#ccc',  borderBottomWidth:0.5 }}>
            <View style={{ flexDirection:'row', alignItems:'center', paddingVertical:10, width:"50%"}}>
              <View style={{width:"25%"}}>
                <AntDesign name="question" size={24} color="#737a80" /> 
              </View>
              <Text style={{fontSize:16, fontWeight:'500', color:COLORS.small}}>About Us</Text>
            </View>
            <View style={{width:"50%"}}>
              <AntDesign style={{alignSelf:'flex-end'}} name="right" size={20} color="#737a80" />
            </View> 
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.8} style={{ flexDirection:'row', justifyContent:'space-between' , alignItems:'center', paddingVertical:5, marginVertical:1, paddingHorizontal:5, borderBottomColor:'#ccc',  borderBottomWidth:0.5 }}>
            <View style={{ flexDirection:'row', alignItems:'center', paddingVertical:10, width:"50%", }}>
              <View style={{width:"25%",}}>
                <MaterialIcons style={{alignSelf:'flex-start'}} name="privacy-tip" size={24} color="#737a80" />
              </View>
              <Text style={{fontSize:16, fontWeight:'500', color:COLORS.small}}>Privacy</Text>
            </View>
            <View style={{width:"50%"}}>
              <AntDesign style={{alignSelf:'flex-end'}} name="right" size={20} color="#bbb" />
            </View> 
          </TouchableOpacity>
        </View>
        <View style={styles.btnDiv}>
          <Button title="Log out" onPress={() => navigation.navigate("Login")} />
        </View>
        
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  btnDiv: { 
    marginTop:30,
    
},
});
