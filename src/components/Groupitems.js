import React from 'react'
import {StyleeSheet,View,Test,Image} from 'react-native'
import Constants from '../const/Constants'
import Images from '../const/Images'
import Color from '../utils/Colors'

function GroupItems({item}){
    return(
        <View>
            <View style = {styles.container}>
                <Image source = {Images.groups}/>
                <View style = {{justifyContent: 'center'}}>
                    <Text style = {styles.groupTitle}>{item.groupName}</Text>
                    <Text style = {styles.groupMembers}>{item.groupMembers}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleeSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        height: 50,
        width: Constants.screenHeight,
        margin: 10
    },
    descriptionContainer:{
        margin: 5
    },
    Image:{
        width: 40,
        height: 40,
        borderRadius:20,
        shadowColor: Color.gray,
        shadowOffset:{height:1,width:1},
        shadowRadius: 2,
        backgroundColor: Color.theme

    },
    groupTitle:{
        color: Color.gray,
        fontSize:14,
        fontWeight: 'bold',
        marginHorizontal: 10
    },
    separator:{
        height: 0.5,
        width: Constants.width,
        backgroundColor: Color.theme
    }
})
 