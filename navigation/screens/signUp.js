import {Alert, StyleSheet,
    Text, View, Image, TextInput,
    Button, TouchableOpacity,} from 'react-native';
  import React, { useState } from 'react';
  import { StatusBar } from "expo-status-bar";
  import { NavigationContainer } from '@react-navigation/native';
  
  
  
  export default function SignUp() {
    const [] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    return (
     
      <View style={styles.container}>
        <Image style={styles.image} source={require("/Users/vats_boy/Documents/Moose/BasicApp/assets/shovel.png")} />
        <StatusBar style="auto" />
        <View style={styles.header}>
        <Text style={styles.headerContent}>New User Sign Up</Text>
        <Text style={styles.description}>Please enter your details below.</Text>
      </View>
  
      <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Full Name."
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
          />
        </View>
   
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email Address"
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Phone #"
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
          />
        </View>
   
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Address line 1."
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Address line 2"
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
          />
        </View>
   
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Select Password"
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Confirm Password"
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
          />
        </View>
   <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>SignUp</Text>
        </TouchableOpacity>
    <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
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
      marginBottom:10,
      marginLeft: 0,
      fontSize:25,
    },
    description: {
      marginBottom:10,
      marginLeft: 0,
      fontSize:17,
    },
    image: {
      resizeMode: "contain",
      height: 50,
      width: 100,
      marginBottom: 20,
       },
       inputView: {
        backgroundColor: "#bedef7",
        borderRadius: 30,
        width: "90%",
        height: 36,
        marginBottom: 20,
     
        alignItems: "flex-start",
      },
      TextInput: {
        height: 20,
        flex: 1,
        padding: 10,
        marginLeft: 20,
        fontSize:10,
      },
      forgot_button: {
        height: 25,
        marginBottom:20,
        fontSize:12,
      },
     
      loginBtn: {
        width: "60%",
        borderRadius: 25,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
        marginBottom:10,
        backgroundColor: "#bedef7",
      },
       
  });