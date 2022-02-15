import React, {useEffect} from 'react';
import { Text, View } from 'react-native';
import styles from "../../styles/index.js";
import {StackActions} from '@react-navigation/native';
import { connect } from 'react-redux';
const Splash = (props) => {
    useEffect(() => {
       if(props.authCheck.userStatus.status === 3){
           
           props.navigation.dispatch(StackActions.replace('Login'));
       }else{
        props.navigation.dispatch(StackActions.replace('Authenticated'));
       }
      });

    return <View  style={styles.centerContainer}>
        <Text style={styles.headText}>Splash Screen</Text>
    </View>
};

function mapStateToProps(state) {
    return {
      authCheck: state.authCheck
    };
  }

  
  export default connect(mapStateToProps)(Splash);
