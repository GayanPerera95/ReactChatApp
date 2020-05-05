import React,{useState,useEffect} from 'react';
import {StyleSheet, View, Text, Alert} from 'react-native';
import CustomTextField from '../components/CustomTextField'
import Button from '../components/Button'
import Strings from '../const/String'
import Utility from '../utils/Utility'
import firebase,{firestore} from '../firebase/Firebase'


function AddGroupScreen({navigation}) {
const[groupName, setGroupName] = useState('')
const [fieldError, setFieldError] = useState('')
const [isLoading , setIsLoading] = useState('')

const validateField = () => {
  const isValidField = Utility.isValidField(groupName)
  isValidField ? setFieldError('') : setFieldError(Strings.GroupNameEmpty)
   return isValidField
 }

function createGroupToFireBase(){
  setIsLoading(true)
  const groupsRef = firestore.collection('groups').doc()
  
  const userID = firebase.auth().currentUser.uid
    
  groupsRef.set({
    groupID: groupsRef.id,
    groupName: groupName,
    userID: userID,

  }).then(function (docRef){
    setIsLoading(false)
    console.log("written ID",groupsRef.id)
    addMemberOfChatToFirebase(groupsRef.id, userID)
    console.warn(groupsRef.id,userID)

  }).catch(function(error){
    Alert.alert(error.message)
    setIsLoading(false)
    console.error("Error adding",error)
  })

} 

function addMemberOfChatToFirebase(groupId, userID){
  const membersRef = firestore.collection("members").doc(groupId).collection('member').doc()
  membersRef.set({
    userID: userID
  }).
  catch(function(error){
    setIsLoading(false)
    console.error("Error adding",error)
  })
}

const performCreateGroup =() =>{
  const isValidField =validateField()
  if (isValidField){
    createGroupToFireBase()
  }

}
  return (
    <View style={styles.container}>
      <CustomTextField 
        term = {groupName}
        error = {fieldError}
        placeHolder = {Strings.EnterYourGroupName}
       onTermChange = {newGroupName => setGroupName(newGroupName)}
       onValidateTextField = {validateField}
      />
      
      <Button title = {Strings.CreateGroup} onPress={performCreateGroup} isLoading={isLoading} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  }
  })

export default AddGroupScreen
