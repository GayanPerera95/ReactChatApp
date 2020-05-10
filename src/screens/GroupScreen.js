import React,{useLayoutEffect, useState, useEffect} from 'react';
import {StyleSheet, View, Text,FlatList,TouchableOpacity,Alert, SnapshotViewIOS} from 'react-native';
import ButtonWidthBackground from '../components/ButtonWithBackground';
import Images from '../const/Images'
import GroupItem from '../components/Groupitems'
import firebase,{firestore} from '../firebase/Firebase'


function GroupScreen({navigation})
{
  const[groups, setgroups] = useState([])
  
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

    useEffect(() =>{
      getChats()
    }, [])

    function getChats(){
      const db = firestore
      var groupArray = []

      db.collection("groups").onSnapshot(function (snapshot){
        snapshot.docChanges().forEach(function(change){
          if (change.type == "added"){
            console.log("New Group: ",change.doc.data())
            groupArray.push(change.doc.data())
          }
          if(change.type == "modified"){
            console.log("Modified Group: ",change.doc.data())
          }
          if(change.type == "removed"){
            console.log("Removed Group: ",change.doc.data())
          }
          setgroups(groupArray)
        })
      })
    }
  
    
  return (
    <View style={styles.container}>
    
    <View style = {styles.view}>

    </View>
    
        <FlatList 
        data = {groups}
        keyExtractor = {(item, index) => 'key'+index}
        renderItem = {({item}) => {
          return(
            
            <TouchableOpacity onPress = {() => {
              navigation.navigate('ChatScreen'),{
                item
              }
            }}>
                <GroupItem item = {item}></GroupItem>
            </TouchableOpacity>
            
          )
        }}>
        </FlatList>
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
  },
  view: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  }
})

export default GroupScreen
