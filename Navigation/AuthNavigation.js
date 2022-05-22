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
import AuthForm from '../Screens/AuthForms/AuthForm';


const stack = createStackNavigator()



const AuthNavigation = () => {
  return (
    <NavigationContainer>
    <stack.Navigator>
      <stack.Screen  name='AuthScreen' component={AuthForm} options={{headerShown:false}}/>
    </stack.Navigator>
    </NavigationContainer>
  )
}

export default AuthNavigation

const styles = StyleSheet.create({})