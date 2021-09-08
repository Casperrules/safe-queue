import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LocationsScreen } from './src/features/locations/screens/locations.screen.js';
import  {Ionicons} from '@expo/vector-icons';
import { Profile } from './src/features/userActions/screens/userProfile.screen';
import { QueueScreen } from './src/features/queues/screens/queues.screen.js';
import {data} from './src/services/users/data';

const TAB_ICON = {
  home: 'md-home',
  locations:'location',
  profile: 'md-person',
}
const Tab = createBottomTabNavigator();
const MyTabs=() =>{

}

const user = await AsyncStorage.getItem(user)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     


const createScreenOptions = ({route})=>{
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({size,color})=>(
      <Ionicons name={iconName} size={size} color={color}/>
    )
  }
}

const Home = ()=><Text>Home</Text>


export default function App() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={createScreenOptions}
          tabBarOptions = {{
            activeTintColor:"tomato",
            inactiveTintColor: "gray",
          }}
        >
          <Tab.Screen name='home' component={Home}/>
          <Tab.Screen name="profile" component={Profile}/>
          <Tab.Screen name='locations' component={LocationsScreen}/>
          {user.type == 'admin' && <Tab.Screen name='Queues' component={QueueScreen}/>}
        </Tab.Navigator>
      </NavigationContainer>
      <ExpoStatusBar style = "auto"/>
    </>
  );
}

