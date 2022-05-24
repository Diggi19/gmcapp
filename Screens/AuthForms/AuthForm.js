import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import axios from 'axios'
import RNSecureStorage, { ACCESSIBLE } from 'rn-secure-storage'
import { AuthContext } from '../../contextapi/Context'

const AuthForm = () => {
    const {isAuth,setisAuth} = React.useContext(AuthContext)
    const [signup,setsignup] = React.useState(true)
    console.log(isAuth)
    const handleLogin = (email,password) => {
       axios.post('http://192.168.0.155:3000/auth/login',{email,password})
        .then(res => {
          console.log(res)
          if (res.data) {
            setisAuth(true)
          }
        })
        .catch(err => {
          console.log(err)
        })
    }

    const handleSignup = (email,password,phone) => {
       axios.post('http://192.168.0.155:3000/auth/signin',{email,password,phone})
      .then(res => {
        console.log(res)
        if (res.data) {
          
          setisAuth(true)
        }
      })
      .catch(err => {
        console.log(err)
      })
    }


    if (signup) {
      return(
        <View style={styles.container}>
            <View style={styles.logohold}>
              <Image style={styles.logo} source={require('../../assets/auth.png')}/>
            </View>
            <View style={styles.fieldhold}>
              <Formik
              initialValues={{email:"",password:"",phone:""}}
              onSubmit={(values) => handleSignup(values.email,values.password,values.phone)}
              >
              {({handleBlur,handleChange,handleSubmit,values,errors})=>{
                return(
                    <View style={styles.fieldholder}>
                        <TextInput
                          style={styles.input}
                          placeholderTextColor="gray"
                          placeholder="Email"
                          onBlur={handleBlur("email")}
                          onChangeText={handleChange("email")}
                          value={values.email}
                          
                        />
                        <TextInput
                          style={styles.input}
                          placeholderTextColor="gray"
                          placeholder="Phone"
                          onBlur={handleBlur("phone")}
                          onChangeText={handleChange("phone")}
                        />
                        <TextInput
                          style={styles.input}
                          placeholderTextColor="gray"
                          placeholder="Password"
                          onBlur={handleBlur("password")}
                          onChangeText={handleChange("password")}
                          secureTextEntry={true}
                        />
                        <TouchableOpacity style={styles.button} onPress={()=>handleSubmit()}>
                            <Text style={styles.btntext}>Create</Text>
                        </TouchableOpacity>
                        
                        <View style={styles.footer}>
                            <Text style={styles.footertext}>Already have an account ? <Text style={{color:'#4291f7',fontWeight:'bold'}} onPress={()=>setsignup(false)}> Login</Text></Text>
                        </View>
                    </View>
                  )
                }}
              </Formik>
            </View>

        </View>
      )
    }
  return (
    <View style={styles.container}>
            <View style={styles.logohold}>
              <Image style={styles.logo} source={require('../../assets/auth.png')}/>
            </View>
            <View style={styles.fieldhold}>
              <Formik
              initialValues={{email:"",password:""}}
              onSubmit={(values) => handleLogin(values.email,values.password)}
              >
              {({ handleChange, handleBlur, handleSubmit, values })=>{
                return(
                    <View style={styles.fieldholder}>
                        <TextInput
                          style={styles.input}
                          placeholderTextColor="gray"
                          placeholder="Email"
                          onBlur={handleBlur('email')}
                          onchangeText={handleChange('email')}
                        />
                        <TextInput
                          style={styles.input}
                          placeholderTextColor="gray"
                          placeholder="Password"
                          onBlur={handleBlur('password')}
                          onchangeText={handleChange('password')}
                          secureTextEntry={true}
                        />
                        <TouchableOpacity style={styles.button} onPress={()=>handleSubmit()}>
                            <Text style={styles.btntext}>Login</Text>
                        </TouchableOpacity>
                        
                        <View style={styles.footer}>
                            <Text style={styles.footertext}>Create new account. <Text style={{color:'#4291f7',fontWeight:'bold'}} onPress={()=>setsignup(true)}>Signup</Text></Text>
                        </View>
                    </View>
                  )
                }}
              </Formik>
            </View>

        </View>
  )
}

export default AuthForm

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:'100%',
    
  },
  logohold:{
    width:'100%',
    height:'40%',
    alignItems:'center',
    justifyContent:'center',
  },
  logo:{
    width:'100%',
    height:'100%',
    resizeMode:'contain'
  },
  fieldholder:{
    width:'100%',
    height:'65%',
    marginTop:20,
  },
  input:{
    width:'80%',
    height:40,
    alignSelf:'center',
    marginTop:10,
    marginBottom:10,
    backgroundColor:'#f5f5f5',
    borderRadius:12,
    paddingLeft:10,
  },
  button:{
    width:200,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    backgroundColor:'#4291f7',
    borderRadius:20,
    marginTop:20,
  },
  btntext:{
    color:'white',
    fontSize:18,
    fontWeight:'bold'
  },
  footer:{
    width:'100%',
    height:20,
    justifyContent:'center',
    alignItems:'center',
    marginTop:20,
  },
  footertext:{
    color:'gray',
  }
})