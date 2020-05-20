import React from 'react'
import {TextInput, Text, StyleSheet, View } from 'react-native'
import Color from '../utils/Colors'
import Constants from '../const/Constants'
import Button from '../components/Button'
import String from '../const/String'

const MessageFieldView = ({term, placeHolder, onTermChange, onValidateTextField, error, onSubmit,isJoined}) => {

    return(
        <View style = {styles.containerView}>
        <View style = {styles.fieldView}>
            <TextInput
                autoCorrect={false}
                style={styles.textField}
                placeholder={placeHolder}
                value={term}
                onChangeText={onTermChange}
                onEndEditing= {onValidateTextField}
            />
            <Button title = {String.Send} color={Color.white} onPress={onSubmit} />
        </View>
            
        </View>
    )

}

const styles = StyleSheet.create({
    containerView:{
        flex:1,
        backgroundColor:Color.theme,
        width:Constants.screenWidth,
        justifyContent:"space-around",
    },
    fieldView:{
        flex:1,
        flexDirection:'row',
        backgroundColor:Color.theme,
        marginTop:-10,

      
    },
    textField:{
        fontSize:15,
        flex:1,
        marginRight:10,
        paddingLeft:10,
        width:'80%',
        borderColor:Color.gray,
        borderWidth:1,
        justifyContent:'center',
        backgroundColor:Color.smoke,
        height:50,
        marginLeft:10
    },
    Button:{
        flex: 1,
        alignSelf: 'center',
        width: '25%',
        height: '100%'
    }
})

export default MessageFieldView

