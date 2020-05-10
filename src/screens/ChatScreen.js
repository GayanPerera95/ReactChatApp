import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

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
    fontSize: '24',
    fontWeight: 'bold',
  }
})

export default ChatScreen
