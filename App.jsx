import React from 'react';

import react, { useState } from 'react';

import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  Pressable
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import mongoose from 'mongoose';
import coustom from './vendor/bundle/ruby/2.7.0/coustomscreen/coustom';
import Icon from 'react-native-vector-icons/AntDesign';
import icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  const [ username,setUsername]=useState("");
  const [email, setEmail] = useState("");
 const [phonenumber,setPhonenumber]=useState("");
 const [entrypoint,setEntrypoint]=useState("");
 const [exitpoint,setExitpoint]=useState("");

 mongoose.connect("");

 const Employe = mongoose.Schema({
   name: String,
   email:String,
   phonenumber: Number,
   entrypoint: String,
   exitpoint: String
 })

 const Employee= mongoose.model("employee",Employe);

 const em1=new Employee({
   name: "varshit",
   email: "abc@gmail.com",
   phonenumber: 12345677,
   entrypoint: "BLCOK-A",
   exitpoint: "Bloack-r"
 })
 em1.save();

  return (

    <View style={styles.container}>
    <Text style ={styles.fontSize}>
       REGISTERATION
    </Text> 
<Image style ={{
        resizeMode:"cover",
        height :300
        ,width : 300
      }}
      source ={require("./vendor/bundle/ruby/2.7.0/images/logo-white.png")}
      ></Image>

 
      
      
      <View style ={styles.inputView}>
      
      
        <TextInput
       
        style ={styles.TextInput}
        
        placeholder ="enter User Name"
        
        
        placeholderTextColor= "black"
        onChangeText={(username) => setUsername(username)}
         >

        </TextInput>
        
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="✉️enter Email ID"
          placeholderTextColor="black"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="☏ enter phone no"
          placeholderTextColor="black"
          onChangeText={(phonenumber) => setPhonenumber(phonenumber)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="entry point"
          placeholderTextColor="black"
          onChangeText={(entrypoint) => setEntrypoint(entrypoint)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="exit point"
          placeholderTextColor="black"
          onChangeText={(exitpoint) => setExitpoint(exitpoint)}
        />
      </View>
      
     
 
      <TouchableOpacity style={styles.loginBtn}>
      <Button
      title="RIGISTER"
      color={'white'}
      

      ></Button>
       
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor: "black",
    height :70,
    fontSize : 80,
    alignItems: "center",
    justifyContent: "center",
  },
  fontSize:{
    fontSize:40,
    fontStyle:"bold",
  },
 
  image: {
    marginBottom: 30,
  },
 
  inputView: {
    borderColor :"white",
    borderWidth :"7",
   marginTop:10,
    marginBottom :30,
    backgroundColor: "silver",
    borderRadius: 30,
    width: "70%",
    height: 50,
    marginBottom: 20,
    marginLeft : 0,
    alignItems: "flex",
  },
 
  TextInput: {
    
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    alignItems : "baseline",
  },
 
  
 
  loginBtn: {
    width: "80%",
    borderRadius: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "silver",
  },
});
