import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tracker from './tracker';
import PackageDetails from './PackageDetails';
import PackageList from './PackageList';

const Stack = createNativeStackNavigator();

const TrackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ()=> null
      }}
    >
      <Stack.Screen name='PackageList' component={PackageList}/>
      <Stack.Screen name='PackageDetails' component={PackageDetails}/>
    </Stack.Navigator>
  )
}

export default TrackNav;

const styles = StyleSheet.create({})