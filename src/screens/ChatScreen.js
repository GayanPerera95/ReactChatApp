import React,{useState, useEffect} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, FlatList, KeyboardAvoidingView, Alert, Button} from 'react-native'
import firebase,{firestore} from '../firebase/Firebase'
import MessageFieldView from '../components/MessageFieldView'
import Color from '../utils/Colors'
import constants from '../const/Constants'
import String from '../const/String'
import DismissKeyboard from '../components/DismissKeyboard'
import MessageItem from '../components/Messageitem'


function ChatScreen({route, navigation}) {
      const [messageList, setMessageList] = useState([])
      const [message, setMessage] = useState('')
      const [isJoined, setIsJoined] = useState (false)

      const {item}=route.params
      const userID = firebase.auth().currentUser.uid

      useEffect(() => {
        console.log(item)
        getMessages()
      }, [])

      function getMessages(){
        const db = firestore
        var message = []

        db.collection("message").doc(item.groupID).collection("message")
        .onSnapshot(function (Snapshot){
           Snapshot.docChanges().forEach(function (change){
             if (change.type == "added"){
               console.log("New Message: ",change.doc.data())
               messageList.push(change.doc.data())
             }
             if (change.type == "modified"){
              console.log("Modified Message: ",change.doc.data())
           }
           if (change.type == "removed"){
            console.log("Removed Message: ",change.doc.data())
           }
           setMessageList(messages)
          })
        })
      }


  return (
    <DismissKeyboard>
      <KeyboardAvoidingView style = {{flex: 1, flexDirection: 'column',justifyContent:'center'}}
      behavior="padding" enabled keyboardVerticalOffset={100}>
      <View style = {styles.container}>
        <FlatList
        style = {styles.flatList}
        data= {messageList}
        keyExtractor= {(item, index) => 'key'+ index}
        renderItem = {({item}) => {
          return(
            <TouchableOpacity onPress = {() => {

            }}>
            <MessageItem item = {item}/>
            </TouchableOpacity>
          )
        }}
        />
        
        <View style = {styles.MessageFieldView}>
          <MessageFieldView term = {message}
          placeHolder= {String.typeYourMessage}
          onTermChange = {message => setMessage(message)}
          //onSubmit= {sendMessagesToChat}
          >
            
          </MessageFieldView>
        </View>

      </View>
      </KeyboardAvoidingView>
    </DismissKeyboard>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  
  flatList:{
    marginBottom: 10,
    flex: 0.9
  },
  MessageFieldView:{
    flex: 0.1
  }
  
})

export default ChatScreen
