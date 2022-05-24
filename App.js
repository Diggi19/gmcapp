import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigation from './Navigation/AppNavigation';
import AuthForm from './Screens/AuthForms/AuthForm';
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
