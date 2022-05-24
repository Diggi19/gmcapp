import { StyleSheet, Text, View,Image, TouchableOpacity,Modal } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'; 
import axios from 'axios'

// navigation
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contextapi/Context';
const HomeScreen = () => {
    const navigation = useNavigation()
    const {isAuth,setisAuth} = React.useContext(AuthContext)

    const [modalVisible, setModalVisible] = React.useState(false);

    
  return (
    <View style={styles.container}>
        <Modal
            visible={modalVisible}
            animationType="fade"
            transparent={true}
            statusBarTranslucent={true}
        >
            <View style={styles.modalhold}>
                <View style={styles.space}>
                    <View style={styles.info}>
                        <View style={styles.detailhold}>
                            <Ionicons style={{marginRight:10}} name="person" size={24} color="black" />
                            <Text style={styles.name}>
                                Full Name
                            </Text>
                        </View>
                        <View style={styles.detailhold}>
                            <Ionicons style={{marginRight:10}} name="mail" size={24} color="black" />
                            <Text style={styles.email}>
                                textname@gmail.com
                            </Text>
                        </View>
                        <View style={styles.detailhold}>
                            <Ionicons style={{marginRight:10}} name="call" size={24} color="black" />
                            <Text style={styles.phone}>
                                7777777777
                            </Text>
                        </View>
                    </View>
                    <View style={styles.btnhold}>
                        <TouchableOpacity style={[styles.btn,{backgroundColor:'#959496'}]} onPress={()=>setisAuth(false)}>
                            <Text style={styles.actext}>LogOut</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.btn,{backgroundColor:'#f78080'}]} onPress={()=>setModalVisible(false)}>
                            <Text style={styles.actext}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
        <View style={styles.top}>
            
            <Image source={require('../../assets/hospital_flashscreen.jpg')} resizeMode="cover" style={styles.image}/>
            <TouchableOpacity style={styles.accountbtn} onPress={()=>setModalVisible(true)}>
                <Ionicons name="person" size={24} color="white" />
            </TouchableOpacity>
        </View>
        <View style={styles.bottom}>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('FormScreen')}>
                <Text style={styles.btntext}>Book Appointment Text</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('AppoinmentListScreen')}>
                <Text style={styles.btntext}>Appoinment List</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('EditScreen')}>
                <Text style={styles.btntext}>Edit Appoinments</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.footerhold}>
            <Text style={styles.footer}>Any queries ?</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('AboutScreen')}> 
                <Text style={{color:'#948ddd'}} > About</Text> 
            </TouchableOpacity>
        </View>
        
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '80%',
                
    },
    top:{
        width: '100%',
        height: '55%',
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
    },
    image:{
        width: '100%',
        height: '100%',
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        opacity:0.8,
    },
    bottom:{
        width:'100%',
        height:'60%',
        alignItems:'center',
        justifyContent:'center',

    },
    button:{
        width:250,
        height:40,
        marginTop:30,
        marginbottom:30,
        backgroundColor:'#4291f7',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        elevation:8,
    },
    btntext:{
        color:'white',
        fontSize:16,
        fontWeight:'bold'
    },
    footerhold:{
        width:'100%',
        height:'10%',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        marginTop:-20
    },
    footer:{
        color:'#b5b1b1'
    },
    accountbtn:{
        position:'absolute',
        top:10,
        right:5,
        width:40,
        height:40,
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#b2aeae',
        opacity:0.8,
        elevation:8,
    },
    modalhold:{
        width:'100%',
        height:'100%',
        backgroundColor:'rgba(0,0,0,0.5)',
        justifyContent:'center',
        alignItems:'center',

    },
    space:{
        width:'98%',
        height:350,
        backgroundColor:'white',
        borderRadius:20,
        
    },
    info:{
        width:'100%',
        height:'50%',
        justifyContent:'center',
        marginTop:30,
    },
    name:{
        fontSize:30,
        fontWeight:'bold',
        marginTop:5,
        marginBottom:5,
    },
    email:{
        fontSize:20,
        fontWeight:'bold',
        marginTop:5,
        marginBottom:5,
       
    },
    phone:{
        fontSize:20,
        fontWeight:'bold',
        marginTop:5,
        marginBottom:5,
        
    },
    detailhold:{
        width:'100%',
        height:40,
        flexDirection:'row',
        alignItems:'center',
        marginLeft:70

    },
    btnhold:{
        width:'100%',
        height:60,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    btn:{
        width:110,
        height:40,
        marginLeft:10,
        marginRight:10,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
    },
    actext:{
        fontSize:16,
        fontWeight:'bold',
        color:'white',
    },

    
    
    
})