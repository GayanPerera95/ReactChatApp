import React,{useState, useEffect} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, FlatList, KeyboardAvoidingView, Alert, Button} from 'react-native'
import firebase,{firestore} from '../firebase/Firebase'
import MessageFieldView from '../components/MessageFieldView'
import Color from '../utils/Colors'
import constants from '../const/Constants'
import String from '../const/String'
import DismissKeyboard from '../components/DismissKeyboard'
import MessageItem from '../components/MessageItem'


function ChatScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Chat Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  
  text: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  }
})

export default ChatScreen
