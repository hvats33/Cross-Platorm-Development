import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Alert, StyleSheet,
  Text, View, Image, TextInput,
  Button, TouchableOpacity,} from 'react-native';
// Screens
import HomeScreen from './screens/HomeScreen';
import HistoryScreen from './screens/JobHistory';
import ScheduleScreen from './screens/JobScheduled';
import ProfileScreen from './screens/Profile';
import LoginScreen from './screens/LoginScreen';
import ForgotPass from './screens/forgotPass';
import SignUp from './screens/signUp';

//Screen names

const homeName = "Home";
const historyName = "History";
const scheduleName = "Schedule";
const profileName = "Profile";

const Tab = createBottomTabNavigator();
function LogoTitle() {
  return (
    <Image
      style={{ width: 40, height: 40 }}
      source={require('./assets/shovel.png')}
    />
  );
}

function MainContainer({ navigation }) {
  return (
    
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === historyName) {
              iconName = focused ? 'list' : 'list-outline';

            } else if (rn === scheduleName) {
              iconName = focused ? 'calendar' : 'calendar-outline';
            }else if (rn === profileName) {
                iconName = focused ? 'person' : 'person-outline';
              }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#90E1EC',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>
        
        <Tab.Screen name={homeName} component={HomeScreen}  options={{
          headerLeft: (props) => <LogoTitle/>,
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('Home')}
              title="Log-Out"
              color="#0a0a0a"
            />
          ),
        }}/>
        <Tab.Screen name={historyName} component={HistoryScreen} options={{
          headerLeft: (props) => <LogoTitle/>,
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('Home')}
              title="Log-Out"
              color="#0a0a0a"
            />
          ),
        }}/>
        <Tab.Screen name={scheduleName} component={ScheduleScreen} options={{
          headerLeft: (props) => <LogoTitle/>,
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('Home')}
              title="Log-Out"
              color="#0a0a0a"
            />
          ),
        }}/>
        <Tab.Screen name={profileName} component={ProfileScreen} options={{
          headerLeft: (props) => <LogoTitle/>,
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('Home')}
              title="Log-Out"
              color="#0a0a0a"
            />
          ),
        }}/>

      </Tab.Navigator>
    
  );
}

export default MainContainer;