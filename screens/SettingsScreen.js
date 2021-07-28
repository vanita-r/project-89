import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Touchable, Alert, Modal, KeyboardAvoidingView, ScrollView } from 'react-native';
import firebase from "firebase";

export default class SettingsScreens extends React.Component{
    constructor(){
        super()
        this.state={
            emailId   : '',
            firstName : '',
            lastName  : '',
            address   : '',
            contact   : '',
            docId     : ''
        }
    }

    getUserDetails=()=>{
        var email = firebase.auth().currentUser.email;
        db.collection('users').where('email_id','==',email).get()
        .then(snapshot => {
          snapshot.forEach(doc => {
          var data = doc.data()
            this.setState({
              emailId   : data.email_id,
              firstName : data.first_name,
              lastName  : data.last_name,
              address   : data.address,
              contact   : data.contact,
              docId     : doc.id
            })
          });
        })
    }

    updateData=()=>{
        db.collection('users').doc(this.state.docId)
        .update({
          "first_name": this.state.firstName,
          "last_name" : this.state.lastName,
          "address"   : this.state.address,
          "contact"   : this.state.contact,
          "email_Id"  : this.state.emailId
        })
    
        Alert.alert("Profile Updated Successfully")
    
    }
    addBarters(){
      db.collection("users").doc(this.state.DocID)
    }
    
      componentDidMount(){
        this.getData()
    }

    render(){
        return(
          <View style={styles.container} >
            <View style={styles.formContainer}>
                <TextInput
                  style={styles.formTextInput}
                  placeholder ={"First Name"}
                  maxLength ={8}
                  onChangeText={(text)=>{
                    this.setState({
                      firstName: text
                    })
                  }}
                  value ={this.state.firstName}
                />
                <TextInput
                  style={styles.formTextInput}
                  placeholder ={"Last Name"}
                  maxLength ={8}
                  onChangeText={(text)=>{
                    this.setState({
                      lastName: text
                    })
                  }}
                  value ={this.state.lastName}
                />
                <TextInput
                  style={styles.formTextInput}
                  placeholder ={"Contact"}
                  maxLength ={10}
                  keyboardType={'numeric'}
                  onChangeText={(text)=>{
                    this.setState({
                      contact: text
                    })
                  }}
                  value ={this.state.contact}
                />
                <TextInput
                  style={styles.formTextInput}
                  placeholder ={"Address"}
                  multiline = {true}
                  onChangeText={(text)=>{
                    this.setState({
                      address: text
                    })
                  }}
                  value ={this.state.address}
                />
                <TextInput
                  style={styles.formTextInput}
                  placeholder ={"Email"}
                  maxlength={30}
                  onChangeText={(text)=>{
                    this.setState({
                      emailId: text
                    })
                  }}
                  value ={this.state.emailId}
                />
                <TouchableOpacity style={styles.button}
                onPress={()=>{
                    this.updateData()
                  }}>
                  <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  onPress={()=>{
                    this.addBarters()
                  }}
                  <Text>My Barters</Text>
                </TouchableOpacity>
            </View>
          </View>
        )
      }
    }
    
    
    const styles = StyleSheet.create({
      container : {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
      },
      formContainer:{
        flex:1,
        width:'100%',
        alignItems: 'center'
      },
      formTextInput:{
        width:"75%",
        height:35,
        alignSelf:'center',
        borderColor:'#ffab91',
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        padding:10,
      },
      button:{
        width:"75%",
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        backgroundColor:"#ff5722",
        shadowColor: "#000",
        shadowOffset: {
           width: 0,
           height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
        marginTop:20
      },
      buttonText:{
        fontSize:25,
        fontWeight:"bold",
        color:"#fff"
      }
})