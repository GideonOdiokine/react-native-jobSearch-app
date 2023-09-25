import React, {useState, useCallback} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
} from '../../components';
import {COLORS, icons, SIZES} from '../../constants';
import {useRoute} from '@react-navigation/native';
import {useFetch} from '../../hook/useFetch';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const tabs = ['About', 'Qualifications', 'Responsibilities'];

const JobDetails = () => {
  const route = useRoute();
  const {id}: any = route?.params;
  const Stack = createNativeStackNavigator();

  const {data, loading, error, refetch} = useFetch('job-details', {
    job_id: id,
  });

  const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const onRefresh = useCallback(() => {}, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          {loading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) : error ? (
            <Text>{'Something went wrong'}</Text>
          ) : data.length === 0 ? (
            <Text>{'No data found'}</Text>
          ) : (
            <View style={{flex: 1, padding: SIZES.medium}}>
              <Company
                companyLogo={data[0].employer_logo}
                jobTitle={data[0].job_title}
                companyName={data[0].employer_name}
                location={data[0].job_country}
              />
              {/* <JobAbout data={data} /> */}
              <JobTabs
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </View>
          )}
        </ScrollView>
      </>
    </SafeAreaView>
  );
};

export default JobDetails;
