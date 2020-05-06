import React,{useLayoutEffect, useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ButtonWidthBackground from '../components/ButtonWithBackground';
import Images from '../const/Images';



function GroupScreen({navigation})
{
  
  useLayoutEffect(() => {
    
       navigation.setOptions({
         headerRight:() => (
           <ButtonWidthBackground onPress= {()=>{
              navigation.navigate('AddGroupScreen')
              
           }}
           image = {Images.add}
           />
         ),
         headerLeft:()=>(
           <ButtonWidthBackground onPress={()=>{
              navigation.reset({
                index:0,
                routes:[{name:"SignInScreen"}]
              })
           }}
             image = {Images.logout}
           />
         ),
       })
      
    })
  

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello.!!!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  text: {
    color: 'red',
    fontSize: 14,
    fontWeight: 'bold'
  }
})

export default GroupScreen
