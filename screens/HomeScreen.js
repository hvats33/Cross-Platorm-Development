


import { View, Text,TouchableOpacity,Image, StyleSheet,FlatList } from 'react-native';
import { StatusBar } from "expo-status-bar";
import React, { useState } from 'react';

export default function HomeScreen({ navigation }) {
        const [] = useState(false);
        const [request, setRequest] = useState("");
        
        return (
         <View style={styles.container}>

                    <Text style={styles.headerContent}>WELCOME TO DE-ICING</Text>

                   <TouchableOpacity style={styles.card}>                       
                            <Text style={styles.cardText}>NEWS / ANNOUNCEMENT</Text>
                   </TouchableOpacity>

            
              
                
                    <TouchableOpacity style={styles.card}>
                       
                            <Text style={styles.cardText}>Pending Requests:</Text>
                   </TouchableOpacity>            
                
                <View>
<TouchableOpacity style={styles.card}>
    <View style={styles.gridcol1}>
        <Text style={styles.cardText}>Job Name</Text>
        <Text style={styles.cardText}>Status</Text>
        
        </View>
    <View style={styles.gridcol2}>
    <Text style={styles.cardText}>Job Number</Text>
        <Text style={styles.cardText}>Quoted Amount</Text>
    </View>
</TouchableOpacity>
    </View>

<View>
<TouchableOpacity style={styles.card}>
    <View style={styles.gridcol1}>
        <Text style={styles.cardText}>Kajal's Driveway</Text>
        <Text style={styles.cardText}>Requested</Text>
        
        </View>
    <View style={styles.gridcol2}>
    <Text style={styles.cardText}>#15302</Text>
        <Text style={styles.cardText}>$$$$</Text>
    </View>
</TouchableOpacity>
    </View>
            
            <View style={styles.alternativeLayoutButtonContainer}/>
                <TouchableOpacity style={styles.requestbtn}>
                    <Text style={styles.requestText}>REQUEST</Text>
                </TouchableOpacity>  
                </View>    
            
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9f9fb',
    alignItems: 'center',
    justifyContent: 'center',
  },
    card: {
        justifyContent:'space-around',
        backgroundColor: "#90E1EC",
        flexDirection: 'row',
        marginTop:20,
        borderRadius:10,
        marginBottom:1,
        marginLeft:'2%',
        shadowColor:'#000',
        width:'100%',
        shadowOpacity:0.2,
        shadowRadius:1,
        shadowOffset:{
            width:3,
            height:3
        }
      },
     
      header: {
      
        backgroundColor: '#fff',
        alignItems: 'center',
      },
      headerContent: {
        marginBottom:30,
        fontSize:20,
      },
      
      gridcol1:{
        alignItems: 'flex-start',
        flexDirection: 'column',
        
      },
      gridcol2:{
    
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'column',
      },
    
      image: {
        resizeMode: "contain",
        height: 100,
        width: 200,
        marginBottom: 20,

         },
         alternativeLayoutButtonContainer: {
            margin: 20,
            flexDirection: 'row',
            justifyContent: 'space-between'
          },
          requestbtn: {
            width: "60%",
            borderRadius:25,
            height:50,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 5,
            marginBottom:10,
            backgroundColor: "#90E1EC",
          },
           

         
      cardText: {
padding:10,
fontSize:15,
justifyContent:'space-around',
      },
});