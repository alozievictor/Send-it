import { ActivityIndicator, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'

const Loader = ({visible = false }) => {

    const {width, height} = useWindowDimensions();

  return  visible && <View style={[styles.container, {width, height}]}> 
    <View style={styles.loader}>
        <Text style={{marginLeft:10, fontSize:16}}>
            <ActivityIndicator size="large" color="#6c63ff" />
        </Text>
    </View>
  </View>

}

export default Loader;

const styles = StyleSheet.create({
    container: {
        flex:1,
        position:'absolute',
        zIndex:100,
        justifyContent:'center',
        backgroundColor:'rgba(0,0,0,0.6)',
        width:"100%",
        height:'100%'
    },
    loader: {
        // height:70,
        // backgroundColor:"white",
        // marginHorizontal:50,
        // borderRadius:5,
        // flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        // paddingHorizontal:20
    }
})