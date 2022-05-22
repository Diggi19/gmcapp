import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import { useRoute } from '@react-navigation/native';

const SinglePatientScreen = () => {
    const {date,patient_details,appoinment_details} = useRoute().params
    
  return (
    <View style={styles.container}>
        {/* <View style={styles.header}>
            <TouchableOpacity style={styles.arrow}>
                <AntDesign name="arrowleft" size={30} color="black" />
            </TouchableOpacity>
            <Text style={styles.headerText}>Patient Info</Text>
        </View> */}
        <View style={styles.body}>
            <ScrollView>
                {/* personal info */}
                <Text style={styles.subtopics}>Personal details</Text>
                <View style={styles.under}></View>
                <View style={styles.details}>
                        <Text style={styles.label}>id :</Text>
                        <Text style={styles.value}> {patient_details.hospid}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.label}>Name :</Text>
                        <Text style={styles.value}> {patient_details.name}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.label}>Age :</Text>
                        <Text style={styles.value}> {patient_details.age}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.label}>Date of Birth :</Text>
                        <Text style={styles.value}> 12/06/22</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.label}>Gender :</Text>
                        <Text style={styles.value}> {patient_details.gender}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.label}>Phone :</Text>
                        <Text style={styles.value}> {patient_details.phone}</Text>
                    </View>

                {/* address info */}
                <Text style={styles.subtopics}>Address</Text>
                <View style={styles.under}></View>
                    <View style={[styles.details,{height:80}]}>
                        <Text style={styles.label}>Address :</Text>
                        <Text style={styles.value}>Sagun Apartments,porvorim goa</Text>
                    </View>

                {/* medical info */}
                <Text style={styles.subtopics}>Medical Data</Text>
                <View style={styles.under}></View>
                    <View style={styles.details}>
                        <Text style={styles.label}>platlet :</Text>
                        <Text style={styles.value}> none</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.label}>creatinine :</Text>
                        <Text style={styles.value}> none</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.label}>hiv :</Text>
                        <Text style={styles.value}> none</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.label}>echo_valve :</Text>
                        <Text style={styles.value}> none</Text>
                    </View>

                {/* appointment info */}
                <Text style={styles.subtopics}>Appointment Info</Text>
                <View style={styles.under}></View>
                    <View style={styles.details}>
                        <Text style={styles.label}>docid :</Text>
                        <Text style={styles.value}> X-ray</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.label}>patientid :</Text>
                        <Text style={styles.value}> 1</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.label}>date_appt:</Text>
                        <Text style={styles.value}> 45 min</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.label}>findingsplan :</Text>
                        <Text style={styles.value}> yes</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.label}>num_slots :</Text>
                        <Text style={styles.value}> yes</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.label}>indication :</Text>
                        <Text style={styles.value}> yes</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.label}>procedure_planned :</Text>
                        <Text style={styles.value}> yes</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.label}>ddssynum :</Text>
                        <Text style={styles.value}> yes</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.label}>duration :</Text>
                        <Text style={styles.value}> yes</Text>
                    </View>
            </ScrollView>
        </View>
    </View>
  )
}

export default SinglePatientScreen

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',

    },
    header:{
        width: '100%',
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    arrow:{
        width: 50,
        marginLeft: 20,
    },
    headerText:{
        width: '60%',
        fontSize: 20,
        fontWeight: 'bold',
    },
    body:{
        width: '100%',
        height: '98%',
        marginTop: 12,
    },
    subtopics:{
        fontSize: 19,
        fontWeight: 'bold',
        color: '#7f7c7c',
        marginLeft: 20,
        marginTop: 20,
    },
    under:{
        width: '90%',
        height: 1,
        backgroundColor: '#bcbaba',
        marginLeft: 20,
        marginTop: 10,
        marginBottom: 10,
    },
    details:{
        width: '100%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        marginTop: 4,
        marginBottom: 4,
    },
    label:{
        width: 150,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#4291f7',
        marginLeft: 20,
    },
    value:{
        width: 180,
        fontSize: 16,
        color: '#3f3e3e',
        fontWeight: 'bold',
 
    }
})