import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Platform } from 'react-native-web';
import AppNavigation from './Navigation/AppNavigation';
import AuthNavigation from './Navigation/AuthNavigation';
import AboutScreen from './Screens/AboutScreen/AboutScreen';
import AppoinmentListScreen from './Screens/AppoinmentListScreen/AppoinmentListScreen';
import AuthForm from './Screens/AuthForms/AuthForm';
import EditPreviewScreen from './Screens/DataUpdateScreen/EditPreviewScreen';
import EditScreen from './Screens/EditScreen/EditScreen';
import FormScreen from './Screens/formScreen/FormScreen';
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import SinglePatientScreen from './Screens/SinglePatientScreen/SinglePatientScreen';
import StartScreen from './Screens/StartScreen/StartScreen';
import UpdateFormScreen from './Screens/UpdateFormScreen/UpdateFormScreen';
import { AuthContext } from './contextapi/Context';
export default function App() {
  const [isAuth, setisAuth] = React.useState(false);
  
  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setisAuth
      }}
    >
    <View style={styles.container}>
      
      {/* <FormScreen /> */}
      {/* <HomeScreen/> */}
      {/* <AuthForm/> */}
      {/* <StartScreen/> */}
      {/* <AppoinmentListScreen/> */}
      {/* <EditScreen/> */}
      {/* <EditPreviewScreen/> */}
      {/* <AboutScreen/> */}
      {/* <UpdateFormScreen/> */}
      {/* <SinglePatientScreen/> */}
      {/* <AppNavigation/> */}
      {/* <AuthNavigation/> */}
      {isAuth ? <AppNavigation /> : <AuthForm/>}
      <StatusBar style="light" hidden={true} />
    </View>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:0
  },
});
