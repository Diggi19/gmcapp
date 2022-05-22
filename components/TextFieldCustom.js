import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'

const TextFieldCustom = ({name,handleBlur, handleChange, values}) => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>{name}</Text> */}
      <TextInput
        style={[styles.input,{height:name === 'procedure' ? 100 : 50}]}
        placeholder={name} 
        numberOfLines={name === 'procedure' ? 4 : 1}
        textBreakStrategy={name === 'procedure' ? 'balanced' : 'simple'}
        multiline={name === 'procedure' ? true : false}
        placeholderTextColor="#c1bbbb"
        // onBlur={handleBlur(values)}
        // onChangeText={handleChange(values)}
      />
    </View>
  )
}

export default TextFieldCustom

const styles = StyleSheet.create({
    container2: {
      width: '100%',
      height: 70,
      justifyContent: 'center',
    },
    text:{
      fontSize: 20,
      marginTop:3,
      marginBottom:3,
      fontWeight: 'bold',
      color:'383636'
    },
    input:{
      width: '100%',
      height:35,
      maxWidth:322,
      // backgroundColor:'#ede8e8',
      borderRadius: 5,
      borderColor:'gray',
      borderBottomWidth:1,
      
    }

})