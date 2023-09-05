import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Button = ({title, onPress=()=>{} }) => {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={styles.btnCont}>
        <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button;

const styles = StyleSheet.create({
    btnCont: { 
        height:55, 
        width:'100%', 
        backgroundColor:'#6c63ff',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:35,
        marginTop:20
    },
    btnText: {
        fontSize:18,
        fontWeight:'500',
        color:"white"
    }
})