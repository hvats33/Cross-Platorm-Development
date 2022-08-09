import React from 'react';
import { View, Text,TouchableOpacity,StyleSheet,FlatList } from 'react-native';

export default function HistoryScreen({ navigation }) {
    return (
        <View style={styles.container}>
    <View >
<TouchableOpacity style={styles.card}>
    <View style={styles.gridcol1}>
        <Text style={styles.cardText}>Job Name</Text>
        <Text style={styles.cardText}>Status</Text>
        
        </View>
    <View style={styles.gridcol2}>
    <Text style={styles.cardText}>Job Number</Text>
        <Text style={styles.cardText}>Comment</Text>
    </View>
</TouchableOpacity>
    </View>

<View >
<TouchableOpacity style={styles.card}>
    <View style={styles.gridcol1}>
        <Text style={styles.cardText}>Kajal's Driveway</Text>
        <Text style={styles.cardText}>Requested</Text>
        
        </View>
    <View style={styles.gridcol2}>
    <Text style={styles.cardText}>#15302</Text>
        <Text style={styles.cardText}>Extra Slippery</Text>
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
      flex: 1,
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
      cardText: {
padding:10,
fontSize:15,
justifyContent:'space-around',
      },
});