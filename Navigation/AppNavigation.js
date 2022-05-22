import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// screens
import HomeScreen from '../Screens/HomeScreen/HomeScreen'
import FormScreen from '../Screens/formScreen/FormScreen'
import AppoinmentListScreen from '../Screens/AppoinmentListScreen/AppoinmentListScreen'
import EditScreen from '../Screens/EditScreen/EditScreen'
import SinglePatientScreen from '../Screens/SinglePatientScreen/SinglePatientScreen'
import EditPreviewScreen from '../Screens/DataUpdateScreen/EditPreviewScreen'
import UpdateFormScreen from '../Screens/UpdateFormScreen/UpdateFormScreen'
import AboutScreen from '../Screens/AboutScreen/AboutScreen'


const stack = createStackNavigator()



const AppNavigation = () => {
  return (
    <NavigationContainer>
    <stack.Navigator>
      <stack.Screen  name='HomeScreen' component={HomeScreen} options={{headerShown:false}}/>
        <stack.Screen name='FormScreen' component={FormScreen} options={{headerShown:false}}/>
        
        <stack.Screen name='AppoinmentListScreen' component={AppoinmentListScreen} options={{headerShown:false}}/>
            <stack.Screen name='SinglePatientScreen' component={SinglePatientScreen} options={{headerShown:false}}/>
        
        <stack.Screen name='EditScreen' component={EditScreen} options={{headerShown:false}}/>
            <stack.Screen name='UpdateFormScreen' component={UpdateFormScreen} options={{headerShown:false}}/>
                <stack.Screen name='UpdatePreviewScreen' component={EditPreviewScreen} options={{headerShown:false}}/>
        
        <stack.Screen name='AboutScreen' component={AboutScreen} options={{headerShown:false}}/>
    </stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation

const styles = StyleSheet.create({})