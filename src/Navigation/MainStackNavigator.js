import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SignInScreen from '../screens/SignInScreen';
import GroupScreen from '../screens/GroupScreen';
import AddGroupScreen from '../screens/AddGroupScreen';
import ChatScreen from '../screens/ChatScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createStackNavigator();

function ChatFlow() {
  return (
    <NavigationContainer>
    <Stack.Navigator name="chat">
    
    <Stack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={{ headerTransparent: true,title: '' }} 
        />
    <Stack.Screen
          name="AddGroupScreen"
          component={AddGroupScreen}
          options={{title: 'Add Group'}}
        />
    
  
        
        
         <Stack.Screen
          name="GroupScreen"
          component={GroupScreen}
          options={{ headerTransparent: true,title: 'GroupScreen' }}
        />
         <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{title: ''}}
        />
        
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{title: 'Chats'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MainStackNavigator() {
  return ChatFlow();
}

export default MainStackNavigator;
