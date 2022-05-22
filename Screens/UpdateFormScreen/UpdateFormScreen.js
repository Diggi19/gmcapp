import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import TextFieldCustom from '../../components/TextFieldCustom'
import { useNavigation, useRoute } from '@react-navigation/native'
import { dummyData } from '../formScreen/data'
import axios from 'axios'
const UpdateFormScreen = () => {
    const navigation = useNavigation()
    const {date,name,age,hospid,gender,phone,docid,patientid,date_appt,findingsplan,num_slots,indication,platlet,creatinine,hiv,echo_valve,procedure_planned,ddssynum,duration} = useRoute().params
    const handleUdate = ()=>{
        navigation.navigate('UpdatePreviewScreen')
    }
    console.log(date,name,age,hospid,gender,phone,docid,patientid,date_appt,findingsplan,num_slots,indication,platlet,creatinine,hiv,echo_valve,procedure_planned,ddssynum,duration)
    const handleUpdate = (values)=>{
        axios.post(`http://192.168.0.155:3000/booking/updateappoinment/${patientid}`,{...values})
        .then(res=>{
            console.log(res.data)
            if(res.data){
                navigation.navigate('UpdatePreviewScreen',{...values})
            }else{
                alert('There was an error updating data kindly try again')
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return (
    <ScrollView style={styles.container}>
        <Formik
            initialValues={{date,name,age,hospid,gender,phone,docid,patientid,date_appt,findingsplan,num_slots,indication,platlet,creatinine,hiv,echo_valve,procedure_planned,ddssynum,duration}}
            onSubmit={(values) => handleUpdate(values)}
        >
            {({ handleChange, handleBlur, handleSubmit, values })=>{
                return(
                    <View style={styles.fieldholder}>
                        <View style={styles.header}>
                            <Text style={styles.headertext}>Update Appointment</Text>
                        </View>
                        {dummyData.map((field,index)=>(
                        <View style={styles.container2} key={index}>
                            {/* <Text style={styles.text}>{name}</Text> */}
                            <TextInput
                            style={[styles.input,{height:field.type === 'Procedure'?100:50}]}
                            placeholder={field.value}
                            value={values[field.value].toString()}
                            numberOfLines={field.value === 'procedure' ? 4 : 1}
                            textBreakStrategy={field.value === 'procedure' ? 'balanced' : 'simple'}
                            multiline={field.type === 'procedure' ? true : false}
                            placeholderTextColor="#c1bbbb"
                            onBlur={handleBlur(field.value)}
                            onChangeText={handleChange(field.value)}
                            />
                        </View>

                        ))}
                        <TouchableOpacity style={styles.button} onPress={()=>handleSubmit()}>
                            <Text style={{color:'white',fontWeight:'bold',fontSize:16}}>Update</Text>
                        </TouchableOpacity>
                    </View>
                )
            }}
        </Formik>
    </ScrollView>
  )
}

export default UpdateFormScreen

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        backgroundColor:'white'
    },
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
        
      },
  
    fieldholder:{
        width: '90%',
        height: '100%',
        alignSelf: 'center',
        borderTopRightRadius:50,
    },
    button:{
        width:200,
        height:40,
        marginTop:10,
        marginBottom:10,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        backgroundColor:'#4291f7',
        borderRadius:5,
        },
    header:{
        width:'100%',
        height:50,
        justifyContent:'center',
        alignItems:'center',
    },
    headertext:{
        fontSize:20,
        fontWeight:'bold',
        marginTop:20,
    },
})