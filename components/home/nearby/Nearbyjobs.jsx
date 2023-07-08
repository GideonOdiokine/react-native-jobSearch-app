import React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';

import styles from './nearbyjobs.style';
import {COLORS, SIZES} from '../../../constants';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';
import {useFetch} from '../../../hook/useFetch';
import {useNavigation} from '@react-navigation/native';


const Nearbyjobs = () => {
  const navigation = useNavigation();

  const {data, loading, error} = useFetch('search', {
    query: 'React developer',
    num_pages: 1,
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Nearby Jobs</Text>
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
          data?.map((job, i) => (
            <NearbyJobCard
              job={job}
              key={`nearby-job-${i}`}
              handleNavigation={() =>
                navigation.navigate('JobDetails', {id: job?.job_id})
              }
            />
          ))
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
