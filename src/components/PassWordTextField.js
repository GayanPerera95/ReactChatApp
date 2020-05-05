import React from 'react';
import { StyleSheet, Text,View,TextInput } from 'react-native';
import Color from '../utils/Colors';
import  Constants from '../const/Constants';


const PasswordTextFiled = ({term,placeholder,onTermChange,onValidatePassword,error})=>{
    return (<View>
                <Text style={styles.ErrorText}>{error}</Text>
                <View style={styles.TextFieldView}>
                    <TextInput
                        secureTextEntry
                        autoCorrect={false}
                        style={styles.TextField}
                        placeholder={placeholder}
                        value={term}
                        onChangeText={onTermChange}
                       onEndEditing={onValidatePassword}
                    />
                </View>
            </View>);
}
const styles=StyleSheet.create({
   TextField:{
       fontSize:14,
       flex:1,
       marginHorizontal:20
   },
   TextFieldView:{
       height:45,
       width:Constants.screenWidth*0.85,
       borderRadius:10,
       marginTop:5,
       marginBottom:10,
       borderColor:Color.black,
       borderWidth:1,
       justifyContent: "center",
       backgroundColor: Color.smoke,
   },
   ErrorText:{
       fontSize:12,
       color:Color.Error,
       marginBottom:-5,
       marginHorizontal:20,
    
   }
});
export default PasswordTextFiled;