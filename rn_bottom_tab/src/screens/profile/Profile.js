import { Button, ScrollView } from 'native-base';
import React from 'react';
import { Text, View } from 'react-native';
import {connect} from 'react-redux';
import {StackActions} from '@react-navigation/native';
import styles from '../../styles';
const Profile = (props) => {
    const logout = () =>{


        props.removeAuthUser({})   
        props.navigation.dispatch(StackActions.replace('Login'));
       

    }
    return    <View style={styles.container}>
      <ScrollView>
    <View style={styles.innerContainer}>
        <Text style={styles.headText}>Hello, User</Text>
        <Button style={{width: "100%", margin: 30}} onPress={logout}>Logout</Button>
        </View>
       
       
        </ScrollView>
    </View>
};

function mapStateToProps(state) {
    console.log("Logout checking.......... 23 "+JSON.stringify(state))
    return {
      authCheck: state.authCheck
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
      //addGlobalToken: product => dispatch({type: 'ADDED_KEY', payload: product}),
      removeAuthUser: userdata => dispatch({ type: 'LOGIN_OUT', payload: userdata })
    };
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Profile);