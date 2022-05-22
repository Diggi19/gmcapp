import { StyleSheet, Text, View, ScrollView,TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import TextFieldCustom from '../../components/TextFieldCustom'
import { Calendar } from 'react-native-calendars'
import axios from 'axios'
import {dummyData} from './data'
import { useNavigation } from '@react-navigation/native'


const FormScreen = () => {
    const navigation = useNavigation()
    const [selectedDate, setSelectedDate] = React.useState('')
    const [slots_avil,setslot_avil] = React.useState(0)
    const date = '2022-05-12'

    const handleNewBooking = (values)=>{
        const ds = {
            date:selectedDate,
            patient_details:{
                name:values.name,
                age:values.age,
                hosid:values.hosid,
                gender:values.gender,
                phone:values.phone
            },
            appoinment_details:{
                docid:values.docid,
                patientid:values.patientid,
                date_appt:values.date_appt,
                findingsplan:values.findingsplan,
                num_slots:values.num_slots,
                indication:values.indication,
                platlet:values.platlet,
                creatinine:values.creatinine,
                hiv:values.hiv,
                echo_valve:values.echo_valve,
                procedure_planned:values.procedure_planned,
                ddssynum:values.ddssynum,
                duration:values.duration
            }
        }

        const ds2 = {
            date:selectedDate,
            // patient_details
            name:values.name,
            age:values.age,
            hosid:values.hosid,
            gender:values.gender,
            phone:values.phone,
            // appoinment_details
            docid:values.docid,
            patientid:values.patientid,
            date_appt:values.date_appt,
            findingsplan:values.findingsplan,
            num_slots:values.num_slots,
            indication:values.indication,
            platlet:values.platlet,
            creatinine:values.creatinine,
            hiv:values.hiv,
            echo_valve:values.echo_valve,
            procedure_planned:values.procedure_planned,
            ddssynum:values.ddssynum,
            duration:values.duration

        }

        axios.post("http://192.168.0.155:3000/booking/newBooking",{...ds})
            .then(res=>{
                console.log(res)
                if (res.status === 200 && values.length > 0) {
                    navigation.navigate('HomeScreen') 
                }else{
                    alert("please fill all the fields")
                }
                
            })
            .catch(err=>console.log(err))   
    }
    React.useEffect(()=>{
        console.log(selectedDate)
    },[selectedDate])
  return (
    <ScrollView style={styles.container}>
        <View style={styles.calinder}>
        <Calendar
            onDayPress={(day) => {setSelectedDate(day.dateString)}}
            // Collection of dates that have to be marked. Default = {}
            markedDates={{
                [selectedDate]: {selected: true, marked: false},
            }}
/>
        </View>
        <Formik
            initialValues={{name:'',age:'',hospid:'',gender:'',phone:'',docid:'',patientid:'',date_appt:'',findingsplan:'',num_slots:'',indication:'',platlet:'',creatinine:'',hiv:'',echo_valve:'',procedure_planned:'',ddssynum:'',duration:''}}
            onSubmit={(values) => handleNewBooking(values)}
        >
            {({ handleChange, handleBlur, handleSubmit, values })=>{
                return(
                    <View style={styles.fieldholder}>
                        <View style={styles.slothold}>
                            <Text style={styles.slottext}> Available Slots :<Text style={styles.slotsubtext}>10</Text></Text>
                        </View>
                        {dummyData.map((field,id)=>(
                            <View key={id} style={styles.textcontainer}>
                                {/* <Text style={styles.text}>{name}</Text> */}
                                <TextInput
                                    style={[styles.input,{height:field.type === 'procedure' ? 100 : 50}]}
                                    placeholder={field.type} 
                                    numberOfLines={field.type === 'procedure' ? 4 : 1}
                                    textBreakStrategy={field.type === 'procedure' ? 'balanced' : 'simple'}
                                    multiline={field.type === 'procedure' ? true : false}
                                    placeholderTextColor="#c1bbbb"
                                    onBlur={handleBlur(field.value)}
                                    onChangeText={handleChange(field.value)}
                                />
                            </View>

                        ))}    
                        
                        <TouchableOpacity style={styles.button} onPress={()=>handleSubmit()}>
                            <Text style={{color:'white',fontWeight:'bold',fontSize:16}}>Add</Text>
                        </TouchableOpacity>
                    </View>
                )
            }}
        </Formik>
    </ScrollView>
  )
}

export default FormScreen

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        backgroundColor:'white'
    },
    calinder:{
        width: '100%',
        height:325,
        backgroundColor:'#ede6e6'
    },
    fieldholder:{
        width: '90%',
        height: '100%',
        alignSelf: 'center',
        borderTopRightRadius:50,
    },
    slothold:{
        width: 150,
        height: 28,
        marginTop:10,
        marginBottom:-5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor :'#eae8e8',
        borderRadius:10,
    },
    slottext:{
        color:'#383636',
        fontSize:16,
    },
    slotsubtext:{
        fontWeight:'bold',
        fontSize:16,
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
        textcontainer: {
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