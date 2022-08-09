import {Alert, StyleSheet,
  Text, View, Image, TextInput,
  Button, TouchableOpacity,} from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native';



export default function LoginScreen({ navigation }) {
  const [] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  return (
   
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/shovel.png')} />
      <StatusBar style="auto" />
      <View style={styles.header}>
      <Text style={styles.headerContent}>Welcome to De-Icing</Text>
      <Text style={styles.description}>UNDER CONSTRUCTION!</Text>
      <Text style={styles.description}>Please click login to navigate through app.</Text>

    </View>

    <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter your User Name."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder=" Enter Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText} onPress={() => navigation.navigate('Main')}>LOGIN</Text>
      </TouchableOpacity>
  <TouchableOpacity>
        <Text style={styles.forgot_button} onPress={() => navigation.navigate('ForgotPassword')}>Forgot Password?</Text>
      </TouchableOpacity>
 <TouchableOpacity>
        <Text style={styles.forgot_button} onPress={() => navigation.navigate('SignUp')}>Click here for Sign Up</Text>
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
      backgroundColor: "#90E1EC",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,
   
      alignItems: "center",
    },
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },
    forgot_button: {
      height: 25,
      marginBottom:20,
    },
   
    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 5,
      marginBottom:10,
      backgroundColor: "#90E1EC",
    },
     
});