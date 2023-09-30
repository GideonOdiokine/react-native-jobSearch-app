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
import {useFetch} from '../../../hook/useFetch';
import {useNavigation} from '@react-navigation/native';

const Popularjobs = () => {
  const navigation = useNavigation();

  const {data, loading, error} = useFetch('search', {
    query: 'React developer',
    num_pages: 1,
  });

  const [selectedJob, setSelectedJob] = useState();

  const handleCardPress = item => {
    navigation.navigate('JobDetails', {id: item?.job_id});
    setSelectedJob(item.job_id);
  };

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
            renderItem={({item, i}) => (
              <PopularJobCard
                key={i}
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={item => item.job_id}
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
