import React from 'react';
import {FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../infrastructure/theme/colors';
import {data} from '../../../services/queue/data'
import { QueueInfo } from '../components/queueInfoCard.component';

export const QueueScreen = ()=> {
    return (<SafeAreaView style={styles.container}>
      <View style={{alignContent:'center', 
      justifyContent:'center',flexDirection:'row', 
      backgroundColor:colors.titleBackground}}>
        <Text style={styles.title}>Locations</Text>
      </View>
      <FlatList 
        data = {data}
        renderItem={({item})=><QueueInfo queue = {item}/>}
        keyExtractor = {(item)=> item.qId}
        contentContainerStyle={{paddingLeft:5,paddingRight:5, paddingTop:5}}      
      />
          
      </SafeAreaView>)
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
