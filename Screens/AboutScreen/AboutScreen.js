import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const AboutScreen = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerText}>About Us</Text>
            <View style={styles.under}></View>
        </View>
        <View style={styles.data}>
            <Text style={styles.dataText}>Book Appoinment <Text style={styles.datadesc}>:- Select the date and create an new appoinment. Enter all the patient data</Text></Text>
            <Text style={styles.dataText}>View Appoinment <Text style={styles.datadesc}>:- 
                View all the booked appoinments on any date.Just selecting the 
                date will give a list of patients on that day.Selecting a single patient will give you the details of that patient.
            </Text></Text>
            <Text style={styles.dataText}>Edit Appoinment <Text style={styles.datadesc}>:- Select the patient whose data is to be updated fill necessary data and click on update. </Text></Text>


        </View>
        <TouchableOpacity style={styles.homebtn} onPress={()=>navigation.navigate('HomeScreen')}>
            <Text style={styles.homebtntext}>Home</Text>
        </TouchableOpacity>
    </View>
  )
}

export default AboutScreen

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',

    },
    header:{
        width: '100%',
        height: 80,
        // backgroundColor: '#4291f7',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 80,
    },
    headerText:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#3d3b3b',
    },
    under:{
        width: '80%',
        height: 1,
        backgroundColor: '#bcbaba',
        marginTop: 10,
    },
    data:{
        width: '70%',
        height: '65%',
        alignItems: 'flex-start',
    },
    dataText:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#4291f7',
        marginTop: 10,
        marginBottom: 10,
    },
    datadesc:{
        fontSize: 16,
        color: '#a3a1a1',
        fontWeight: 'bold',
        
    },
    homebtn:{
        width: 200,
        height: 40,
        backgroundColor: '#4291f7',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    homebtntext:{
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
    },
})