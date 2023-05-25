/* eslint-disable */
// @ts-ignore
import React from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import {COLORS, SIZES } from '../constants';
import { Nearbyjobs, Popularjobs, Welcome } from '../components';


const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flex: 1, padding: SIZES.medium}}>
          <Welcome />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
