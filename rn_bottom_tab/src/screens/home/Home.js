import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import styles from '../../styles';
const Home = (props) => (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
      <Text style={styles.headText}>Home</Text>
      </View>
       
    </View>
);

function mapStateToProps(state) {
    console.log("State checking... "+JSON.stringify(state))
    return {
      authCheck: state.authCheck
    };
  }

  
  export default connect(mapStateToProps)(Home);
