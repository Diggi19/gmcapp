import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Entypo } from '@expo/vector-icons'; 
// navigation
import { useNavigation } from '@react-navigation/native'



const SingleAppoinment = ({edit,date,patient_details,appoinment_details}) => {
    const navigation = useNavigation()
    if (edit) {
        return(
            <View style={styles.container} >
                <TouchableOpacity style={styles.checkbox} onPress={()=>navigation.navigate('UpdateFormScreen',{...date,...patient_details,...appoinment_details})}>
                    <Entypo name="edit" size={24} color="black" style={{marginLeft:10}} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.infohold} onPress={()=>navigation.navigate('SinglePatientScreen',{date,patient_details,appoinment_details})}>
                    <Text style={styles.id}>id:<Text style={{fontWeight:'bold'}}>  {patient_details.hospid}</Text></Text>
                    <Text style={styles.name}>Name:<Text style={{fontWeight:'bold'}}>  {patient_details.name}</Text></Text>
                <View style={styles.patientinfo}>
                    <Text style={styles.phone}>Ph:<Text style={{fontWeight:'bold'}}>  {patient_details.phone}</Text></Text>
                    <Text style={[styles.gender,{marginLeft:20}]}>Gender:<Text style={{fontWeight:'bold'}}>  {patient_details.gender}</Text></Text>
                </View>
                    <Text style={styles.duration}>Duration:<Text style={{fontWeight:'bold'}}>  {appoinment_details.duration}</Text></Text>
                </TouchableOpacity>
            </View>
        )
    }
  return (
    <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate('SinglePatientScreen',{date,patient_details,appoinment_details})}>
        <View style={styles.checkbox}>
            <BouncyCheckbox
                size={25}
                style={{marginLeft:30}}
                fillColor="green"
                unfillColor="#FFFFFF"
                iconStyle={{ borderColor: "gray" }}
                checked={true}
            />
        </View>
        <View style={styles.infohold}>
            <Text style={styles.id}>id:<Text style={{fontWeight:'bold'}}>  {patient_details.hospid}</Text></Text>
            <Text style={styles.name}>Name:<Text style={{fontWeight:'bold'}}>  {patient_details.name}</Text></Text>
            <View style={styles.patientinfo}>
                <Text style={styles.phone}>Ph:<Text style={{fontWeight:'bold'}}>  {patient_details.phone}</Text></Text>
                <Text style={[styles.gender,{marginLeft:20}]}>Gender:<Text style={{fontWeight:'bold'}}>  {patient_details.gender}</Text></Text>
            </View>
            <Text style={styles.duration}>Duration:<Text style={{fontWeight:'bold'}}>  {appoinment_details.duration}</Text></Text>
        </View>
    </TouchableOpacity>
  )
}

export default SingleAppoinment

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 150,
        backgroundColor: 'white',
        marginTop: 3,
        marginBottom: 3,
        alignSelf: 'center',
        flexDirection: 'row',
        borderRadius: 10,
        
    },
    checkbox: {
        width: '10%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,  
    },
    infohold: {
        width: '90%',
        height: '100%',
        marginLeft: 30,
        justifyContent: 'center',
    },
    patientinfo: {
        width: '100%',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
    },
    id: {
        fontSize: 16,
        marginTop: 2,
        marginBottom: 2,
    },
    name: {
        fontSize: 14,
        marginTop: 3,
        marginBottom: 3,
    },
    phone: {
        fontSize: 14,
        marginTop: 3,
        marginBottom: 3,
    },
    gender:{
        fontSize: 14,
        marginTop: 3,
        marginBottom: 3,
    },
    duration:{
        fontSize: 14,
        marginTop: 3,
        marginBottom: 3,
    },


})