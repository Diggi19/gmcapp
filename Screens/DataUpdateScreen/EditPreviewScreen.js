import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const EditPreviewScreen = () => {
    const navigation = useNavigation()
    const {date,name,age,hospid,gender,phone,docid,patientid,date_appt,findingsplan,num_slots,indication,platlet,creatinine,hiv,echo_valve,procedure_planned,ddssynum,duration} = useRoute().params

  return (
    <View style={styles.container}>
        <View style={styles.animation}>
            <LottieView
                source={require('../../assets/95088-success.json')}
                autoPlay
                style={{width:200,height:200}}
            />
        </View>
        <View style={styles.previewData}>
            <ScrollView style={styles.data} showsVerticalScrollIndicator={false} >
                {/* personal details */}
                <Text style={styles.subtopics}>Personal details</Text>
                <View style={styles.under}></View>
                    <View style={styles.details}>
                        <Text style={styles.label}>id :</Text>
                        <Text style={styles.value}> {hospid}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.label}>Name :</Text>
                        <Text style={styles.value}> {name}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.label}>Age :</Text>
                        <Text style={styles.value}> {age}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.label}>Date of Birth :</Text>
                        <Text style={styles.value}> 12/06/22</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.label}>Gender :</Text>
                        <Text style={styles.value}> {gender}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.label}>Phone :</Text>
                        <Text style={styles.value}> {phone}</Text>
                    </View>

                {/* address info */}
                <Text style={styles.subtopics}>Address</Text>
                <View style={styles.under}></View>
                    <View style={[styles.details,{height:80}]}>
                        <Text style={styles.label}>Address :</Text>
                        <Text style={styles.value}>Sagun Apartments, porvorim goa</Text>
                    </View>

                {/* medical info */}
                <Text style={styles.subtopics}>Medical Data</Text>
                <View style={styles.under}></View>
                    <View style={styles.details}>
                        <Text style={styles.label}>Allergies :</Text>
                        <Text style={styles.value}> none</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.label}>Medications :</Text>
                        <Text style={styles.value}> none</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.label}>Surgeries :</Text>
                        <Text style={styles.value}> none</Text>
                    </View>

                {/* appointment info */}
                <Text style={styles.subtopics}>Appointment Info</Text>
                <View style={styles.under}></View>
                    <View style={styles.details}>
                        <Text style={styles.label}>Procedure :</Text>
                        <Text style={styles.value}> X-ray</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.label}>Slot_req :</Text>
                        <Text style={styles.value}> 1</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.label}>Duration:</Text>
                        <Text style={styles.value}> 45 min</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.label}>Arrived :</Text>
                        <Text style={styles.value}> yes</Text>
                    </View>
                    <TouchableOpacity style={styles.homebtn} onPress={()=>navigation.navigate('HomeScreen')}>
                        <Text style={styles.homebtntext}>Home</Text>
                    </TouchableOpacity>
            </ScrollView>
        </View>
    </View>
  )
}

export default EditPreviewScreen

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',

    },
    animation:{
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    previewData:{
        width: '100%',
        height: 420,
    },
    data:{
        width: '90%',
        height: 350,
        alignSelf:'center',
    },
    homebtn:{
        width: 200,
        height: 40,
        backgroundColor: '#4291f7',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    homebtntext:{
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
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