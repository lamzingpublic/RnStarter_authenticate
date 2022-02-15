import React, {Component} from 'react';
import {View} from 'react-native';
import styles from '../styles/index'
import TabRouter from '../router/TabRouter';
const Authenticated = props => {
  return (
    <View style={[styles.container]}>
      <TabRouter  props={props} />
    </View>
  );
};
export default Authenticated;
