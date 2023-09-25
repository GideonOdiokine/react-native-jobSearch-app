import React from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'

import styles from './tabs.style'
import { SIZES } from '../../../constants'

const TabButton = ({name, activeTab, onHandleSearchType})=>(
 <TouchableOpacity onPress={onHandleSearchType} >
    <Text>{name}</Text>
 </TouchableOpacity>
)

const Tabs = ({tabs, setActive, activeTab}) => {
  return (
    <View style={styles.container}>
     <FlatList data={tabs}
     renderItem={({item})=>(
        <TabButton name={item} activeTab={activeTab} onHandleSearchType={()=> setActive(item)} />
     )}
     />
    </View>
  )
}

export default Tabs
