import React from "react";
import {DrawerItems} from "react-navigation-drawer";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { AppDrawerNavigator } from "react-navigation-drawer";
import firebase from 'firebase';

export default class CustomSideBarMenu extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <DrawerItems {...this.props}/>
                <View style={{flex:1,justifyContent:'flex-end',paddingBottom:30}}>
                    <TouchableOpacity style={{justifyContent:'center',padding:10,height:30,width:'100%'}} 
                    onPress={()=>{
                        this.props.navigation.navigate("WelcomeScreen")
                        firebase.auth().signOut()
                    }}>
                        <Text>Log out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

var styles = StyleSheet.create({ 
    container:{ 
        flex:1, 
        marginTop:50 
    }, 
    drawerItemsContainer:{ 
        flex:1 
    },
})