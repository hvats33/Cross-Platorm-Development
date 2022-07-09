import {Alert, StyleSheet,
    Text, View, Image, TextInput,
    Button, TouchableOpacity,} from 'react-native';
  import React, { useState } from 'react';
  import { StatusBar } from "expo-status-bar";
  
  
  
  export default function ForgotPass() {
    const [] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    return (
     
      <View style={styles.container}>
        <Image style={styles.image} source={require("/Users/vats_boy/Documents/Moose/BasicApp/assets/shovel.png")} />
        <StatusBar style="auto" />
        <View style={styles.header}>
        <Text style={styles.headerContent}>Forgot Password</Text>
        <Text style={styles.description}>Please enter your Email address to reset Password.</Text>
      </View>
  
      <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="User Name/E-mail"
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
          />
        </View>
   
   <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Reset</Text>
        </TouchableOpacity>
    <TouchableOpacity>
          <Text style={styles.forgot_button}>Log In</Text>
        </TouchableOpacity>
   <TouchableOpacity>
          <Text style={styles.forgot_button}>Click here for Sign Up</Text>
        </TouchableOpacity>
   
        
      </View>
      
    )
    
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
    
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    headerContent: {
      marginBottom:30,
      marginLeft: 0,
      fontSize:25,
    },
    description: {
      marginBottom:30,
      marginLeft: 0,
      fontSize:17,
    },
    image: {
      resizeMode: "contain",
      height: 100,
      width: 200,
      marginBottom: 20,
       },
       inputView: {
        backgroundColor: "#bedef7",
        borderRadius: 25,
        width: "95%",
        height: 45,
        marginBottom: 20,
     
        alignItems: "flex-start",
      },
      TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
        fontSize:14
      },
      forgot_button: {
        height: 20,
        marginBottom:20,
        fontSize:13
      },
     
      loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
        marginBottom:10,
        backgroundColor: "#bedef7",
      },
       
  });