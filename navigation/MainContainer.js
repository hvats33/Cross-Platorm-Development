import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/HomeScreen';
import HistoryScreen from './screens/JobHistory';
import ScheduleScreen from './screens/JobScheduled';
import ProfileScreen from './screens/Profile';
import LoginScreen from './screens/LoginScreen';
import ForgotPass from './screens/forgotPass';
import SignUp from './screens/signUp';

//Screen names
const LoginName = "Login";
const ForgotPassName = "ForgotPassword";
const SignUpName = "SignUp";
const homeName = "Home";
const historyName = "History";
const scheduleName = "Schedule";
const profileName = "Profile";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
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
          activeTintColor: '#bedef7',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>
        <Tab.Screen name={LoginName} component={LoginScreen} />
        <Tab.Screen name={ForgotPassName} component={ForgotPass} />
        <Tab.Screen name={SignUpName} component={SignUp} />
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={historyName} component={HistoryScreen} />
        <Tab.Screen name={scheduleName} component={ScheduleScreen} />
        <Tab.Screen name={profileName} component={ProfileScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;