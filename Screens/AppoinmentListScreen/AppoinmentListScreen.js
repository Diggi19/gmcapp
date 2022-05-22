import { StyleSheet, Text, View, ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import TextFieldCustom from '../../components/TextFieldCustom'
import { Calendar } from 'react-native-calendars'
import SingleAppoinment from '../../components/SingleAppoinment'
import { AntDesign } from '@expo/vector-icons'; 
// navigation
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'

const dummyData = []

const AppoinmentListScreen = () => {
    const navigation = useNavigation()
    const [selectedDate, setSelectedDate] = React.useState('')
    const [slots_avil,setslot_avil] = React.useState(0)
    const date = '2022-05-12'
    const [Appoinments,setAppoinments] = React.useState([])
    const callData = () => {
        axios.get('http://192.168.0.155:3000')
        .then(res => {
            setAppoinments(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }
    React.useEffect(()=>{
        callData()
    },[])
    console.log(Appoinments)
    React.useEffect(()=>{
        console.log(selectedDate)
    },[selectedDate])
  return (
    <View style={styles.container}>
        {/* <View style={styles.header}>
            <View style={styles.headercont}>
                <AntDesign name="arrowleft" size={24} color="black" style={styles.icon}/>
                <Text style={styles.headertitle}>Appointments</Text>
            </View>
        </View> */}
        {/* <View style={styles.calinder}>
        <Calendar
            onDayPress={(day) => {setSelectedDate(day.dateString)}}
            // Collection of dates that have to be marked. Default = {}
            markedDates={{
                [selectedDate]: {selected: true, marked: false},
            }}
        />
        </View> */}
        <View style={styles.listhold}>
            <ScrollView 
                horizontal={false}
                showsVerticalScrollIndicator={false}
            >                
        <Calendar
            style={{marginBottom:10}}
            onDayPress={(day) => {setSelectedDate(day.dateString)}}
            // Collection of dates that have to be marked. Default = {}
            markedDates={{
                [selectedDate]: {selected: true, marked: false},
            }}
        />      
                {Appoinments.length > 0 && Appoinments.map((appoin,index)=><SingleAppoinment key={index} {...appoin}/>)}
            </ScrollView>
        </View>
    </View>
  )
}

export default AppoinmentListScreen

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        backgroundColor:'lightgray',
        justifyContent:'space-around'
    },
    calinder:{
        width: '100%',
        height: '50%',
        marginTop:0,
    },
    listhold:{
        width: '100%',
        height: '100%',

    }
    
})