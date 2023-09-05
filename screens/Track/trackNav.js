import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tracker from './tracker';

const Stack = createNativeStackNavigator();


const TrackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ()=> null
      }}
    >
      <Stack.Screen name='Tracker' component={Tracker}/>
      {/* <Stack.Screen name='Prof' component={Prof}/>
      <Stack.Screen name='DogProf' component={DogProf}/> */}
    </Stack.Navigator>
  )
}

export default TrackNav;

const styles = StyleSheet.create({})