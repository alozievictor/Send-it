import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Notification from './notification';

const Stack = createNativeStackNavigator();

const NotifyNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ()=> null
      }}
    >
      <Stack.Screen name='Notification' component={Notification}/>
      {/* <Stack.Screen name='Prof' component={Prof}/>
      <Stack.Screen name='DogProf' component={DogProf}/> */}
    </Stack.Navigator>
  )
}

export default NotifyNav;

const styles = StyleSheet.create({})