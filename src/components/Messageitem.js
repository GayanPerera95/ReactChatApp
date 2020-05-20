import React from 'react'
import {StyleSheet, View, Text, Image} from 'react-native'
import Constants from '../const/Images'
import Images from '../const/Images'
import Color from '../utils/Colors'
import firebase, {firestore} from '../firebase/Firebase'

function MessageItem({item}) {
    const userID = firebase.auth().currentUser.uid

  function messageView(){
      if (userID == item.senderID){
          return(
              <View style = {styles.otherMessageContainerView}>
                  <Text style={[styles.senderName, {textAlign: 'right'}]}>{item.senderEmail}</Text>
                  <Text style={[styles.message, {textAlign: 'right'}]}>{item.message}</Text>
              </View>
          )
      } else{
          return(
              <View style= {styles.myMessageContainerView}>
                  <Text style={styles.senderName}>{item.senderEmail}</Text>
                  <Text style={styles.message}>{item.message}</Text>
              </View>
          )
      }
  }

}

const styles = StyleSheet.create({
    othersMessageContainerView:{
        width:Constants.screenWidth*0.8,
        backgroundColor:Color.OtherMessageColor,
        borderRadius:5,
        marginRight:40,
        marginTop:5,
        marginBottom:5,
        padding:10,
        height:60
    },
    myMessageContainerView:{
        width:Constants.screenWidth*0.8,
        backgroundColor:Color.MessageColor,
        borderRadius:5,
        margin:5,
        padding:8,
        marginLeft:40,
        height:60
    },
    senderName:{
        color:Color.white,
        fontSize:15,
        fontWeight:'bold',
        textAlign:"right"
      //  marginLeft:170
        
    },
    message:{
        color:Color.white,
        fontSize:14,
        textAlign:"right"
}
})

export default MessageItem