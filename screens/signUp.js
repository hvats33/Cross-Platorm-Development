import {Alert, StyleSheet,
    Text, View, Image, TextInput,
    Button, TouchableOpacity,} from 'react-native';
  import React, { useState } from 'react';
  import { StatusBar } from "expo-status-bar";
  import { NavigationContainer } from '@react-navigation/native';
  
  
  
  export default function SignUp({ navigation }) {
    const [] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    return (
     
      <View style={styles.container}>
        <Image style={styles.image} source={require('../assets/shovel.png')} />
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
          <Text style={styles.loginText} >SignUp</Text>
        </TouchableOpacity>
    <TouchableOpacity>
          <Text style={styles.forgot_button} onPress={() => navigation.navigate('ForgotPassword')}>Forgot Password?</Text>
        </TouchableOpacity>
        
      </View>
      
    )
    
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e9f9fb',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
    
      backgroundColor: '#e9f9fb',
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
        backgroundColor: "#90E1EC",
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
        backgroundColor: "#90E1EC",
      },
       
  });