import React from 'react';
import {FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../infrastructure/theme/colors';
import { locationData } from '../../../services/location/mock/data';
import { LocationInfo } from '../components/locationInfo.component';


export const LocationsScreen = ()=> {
    return (<>
      <FlatList 
        data = {locationData}
        renderItem={({item})=><LocationInfo location = {item}/>}
        keyExtractor = {(item)=> item.name}
        contentContainerStyle={{paddingLeft:5,paddingRight:5, paddingTop:5}}      
      />
      </>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:StatusBar.currentHeight,
  },
  list:{
    flex: 1,
    padding: 16,
  },
  title:{
    fontSize:50,
    color: colors.primary
  },
});
