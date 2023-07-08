import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import styles from './popularjobs.style';
import {COLORS, SIZES} from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import { useFetch } from '../../../hook/useFetch';

const Popularjobs = () => {
 const {data, loading, error} = useFetch('search', {
   query: 'React developer',
   num_pages: 1,
 });
//  console.log(data);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {loading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({item, i}) => <PopularJobCard key={i} item={item} />}
            keyExtractor={item => item.id}
            // key={item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{columnGap: SIZES.medium}}
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
