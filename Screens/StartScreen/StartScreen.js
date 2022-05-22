import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const StartScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.logohold}>
            <Image style={styles.logo} source={require('../../assets/app_logo.png')}/>
        </View>
        <View style={styles.btn}>

        </View>
    </View>
  )
}

export default StartScreen

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
    },
    logohold:{
        width:'100%',
        height:'40%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:40
    },
    logo:{
        width:'100%',
        height:'100%',
        resizeMode:'contain'
    },

})