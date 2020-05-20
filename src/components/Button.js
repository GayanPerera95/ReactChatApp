import React from 'react';
import { StyleSheet, Text, TouchableOpacity,View,ActivityIndicator } from 'react-native';
import Color from '../utils/Colors';


const Button = (props) => {
const {title ="Enter",style={},textStyle={},onPress,isLoading}=props
const loader=()=>{
    return(
        <ActivityIndicator animating={isLoading
        }/>
    )
}
const button =()=>{
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button,style]}>
            <Text style={[textStyle,styles.text]}>{title}</Text>
        </TouchableOpacity>
    );  
}
return (
   
    <View style={[styles.button,style]}> 
    {isLoading?loader():button()}

    </View>
);
}

const styles= StyleSheet.create({
 button:{
     display:'flex',
     height:50,
     borderRadius:5,
     paddingLeft:20,
     paddingRight:20,
     justifyContent:'center',
     alignItems:'center',
     margin:0,

     backgroundColor:Color.uaStudioGreen,
     shadowColor:Color.uaStudioGreen,
     shadowOpacity:0.4,
     shadowOffset:{height:10,width:10},
     shadowRadius:20,


 },
 text:{
     fontSize:16,
     textTransform:'uppercase',
     color:Color.white,
 }
})
export default Button