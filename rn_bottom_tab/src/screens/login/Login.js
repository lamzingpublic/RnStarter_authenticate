import React from 'react';
import { View, ScrollView } from 'react-native';
import { Stack, Text, FormControl, Input, Button } from 'native-base';
import { StackActions } from '@react-navigation/native';
import { connect } from 'react-redux';
import styles from '../../styles';

const Login = (props) => {

  const [textEmail, onChangeTextEmail] = React.useState("");
  const [password, onChangeTextPassword] = React.useState("");

  const login = () => {
    let userData = {
      username: "raikumar",
      email: "raik.kh@gmail.com",
      user_id: 3,
      status: 1,
      token: "12345"
    }
    props.addAuthUser(userData);
    props.navigation.dispatch(
      StackActions.replace('Authenticated'),
    );
  }
  return <View style={styles.container}>
    <ScrollView>
      <Stack space={4} px={4} safeArea mt={6}>
        <Text fontSize={'xl'} bold underline alignSelf={'center'}>
          Login
        </Text>
        <FormControl>
          <FormControl.Label >Username/Email</FormControl.Label>
          <Input fontSize={'md'} placeholder='exmple@domain.com' onChange={(text)=>onChangeTextEmail(text)}/>
         
          <FormControl.ErrorMessage>
            Something is wrong.
          </FormControl.ErrorMessage>
        </FormControl>
      
     
       
        <FormControl  >
          <FormControl.Label /*_invalid={{
            _text: {
              color: "rose.500",
              fontWeight: "bold"
            }
          }}*/>
            Password
          </FormControl.Label>
          <Input placeholder='Password' fontSize={'md'} secureTextEntry={true} onChange={(text)=>onChangeTextPassword(text)}/>
       
          <FormControl.ErrorMessage>
            Something is wrong.
          </FormControl.ErrorMessage>
        </FormControl>

        <Button onPress={login} >Login</Button>
      </Stack>
    </ScrollView>

  </View>
};

function mapStateToProps(state) {
  console.log("Logout checking.......... 23 " + JSON.stringify(state))
  return {
    authCheck: state.authCheck
  };
}

function mapDispatchToProps(dispatch) {
  return {
    //addGlobalToken: product => dispatch({type: 'ADDED_KEY', payload: product}),
    addAuthUser: userdata => dispatch({ type: 'LOGIN_SUCCESS', payload: userdata })
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);