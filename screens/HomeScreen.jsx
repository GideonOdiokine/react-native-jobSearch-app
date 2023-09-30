/* eslint-disable */
// @ts-ignore
import React, {useState} from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import {COLORS, SIZES} from '../constants';
import {Nearbyjobs, Popularjobs, Welcome} from '../components';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flex: 1, padding: SIZES.medium}}>
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                navigation.navigate('SearchScreen', {
                  jobType: searchTerm,
                });
              }
            }}
          />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
