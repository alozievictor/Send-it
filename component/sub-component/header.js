import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


const Header = (props) => {

  const closeHandler = () => {
    console.log('seconf Func')
    props.onPress()
  }

 
  return (
    <View style={styles.container}>
      <View style={styles.profileCont}>
        <View style={styles.cityCont}>
            {/* <MaterialCommunityIcons name="map-marker" size={23} color="#e7a368" />
            <Text style={{paddingLeft:3, fontSize:16, fontWeight:'500'}}>City</Text> */}
        </View>

        <TouchableOpacity 
          onPress={closeHandler}
          style={styles.cityCont}>
          <FontAwesome5 name="user-circle" size={26} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
    container: {
        width:"100%",
        backgroundColor:'#fafafa',
        paddingVertical:10,
    },
    profileCont: {
       flexDirection:'row',
       justifyContent:"space-between",
       alignItems:'center' 
    },
    cityCont: {
        flexDirection:'row',
        alignItems:'center'
    }
})