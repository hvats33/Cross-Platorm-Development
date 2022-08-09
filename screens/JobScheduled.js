import React from 'react';
import { View, Text ,TouchableOpacity,Image,StyleSheet,FlatList} from 'react-native';
import { StatusBar } from "expo-status-bar";

export default function ScheduleScreen({ navigation }) {
    return (
      
       <View style={styles.container}>
            <View>
                <TouchableOpacity style={styles.card}>
                    <View style={styles.gridcol1}>
                        <Text style={styles.cardText}>Job Name: clean Backyard area</Text>
                        <Text style={styles.cardText}>Tommorow</Text>
                        <Text style={styles.cardText}>Time : 7:00AM</Text>
                        <Text style={styles.cardText}>Location: Barrie Drive, South</Text>
                        </View>
                </TouchableOpacity>

            </View><View>
                <TouchableOpacity style={styles.card}>
                    <View style={styles.gridcol2}>

                        <Text style={styles.cardText}>Job Name: Clean Roads </Text>
                        <Text style={styles.cardText}>Today</Text>
                        <Text style={styles.cardText}>Time: 12:00PM</Text>
                        <Text style={styles.cardText}>Location: Downtown, barrie terminal</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.card}>
                    <View style={styles.gridcol1}>
                        <Text style={styles.cardText}>Job name: Deep Cleaning</Text>
                        <Text style={styles.cardText}>Tommorow</Text>
                        <Text style={styles.cardText}>Time: 01:00PM</Text>
                        <Text style={styles.cardText}>Location: Georgian Dr., Barrie</Text>
                       </View>
                       </TouchableOpacity>
                    </View>
                    <View>
                <TouchableOpacity style={styles.card}>
                    <View style={styles.gridcol2}>
                        <Text style={styles.cardText}>Job Name: Road Clean </Text>
                        <Text style={styles.cardText}>Tommorow</Text>
                        <Text style={styles.cardText}>Time: 06:00AM</Text>
                        <Text style={styles.cardText}>Location: dunsmore ln,Barrie</Text>
                    </View>
                </TouchableOpacity>
            </View>
            </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
      marginTop:20,
      backgroundColor:'#e9f9fb',
      flex: 1
    },
    card: {
        justifyContent:'space-around',
        flexDirection: 'row',
        marginTop:20,
        backgroundColor:'#90E1EC',
        marginBottom:10,
        marginLeft:'2%',
        shadowColor:'#000',
        width:'96%',
        shadowOpacity:0.2,
        shadowRadius:1,
        shadowOffset:{
            width:3,
            height:3
        }
      },
      container1: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      gridcol1:{
        
        flexWrap: 'wrap',
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
      cardText: {
padding:10,
fontSize:15,
justifyContent:'space-around',
      },
     } );