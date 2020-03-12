import React from 'react';
import { StyleSheet, Text, Image, FlatList, SafeAreaView } from 'react-native';

import AccelerationComponent from '../components/AccelerationComponent';
import HeaderComponent from '../components/HeaderComponent';

const Acceleration = () => (
  <SafeAreaView style={{ paddingTop: 20 }}>
    <HeaderComponent/>
    <AccelerationComponent/>
  </SafeAreaView>
);


export default Acceleration;
