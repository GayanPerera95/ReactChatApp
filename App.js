import 'react-native-gesture-handler'
import {decode, encode} from 'base-64'

if (! global.btoa) {global.btoa = encode}

if (! global.atob) {global.atob = decode}

import React from 'react';

import MainStackNavigator from './src/Navigation/MainStackNavigator';

export default function App() {
  return <MainStackNavigator />
}
