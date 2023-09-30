import React from 'react'
import { TouchableOpacity, Image} from 'react-native';
import styles from './screenheader.style'
import { useNavigation } from '@react-navigation/native';

const ScreenHeaderBtn = ({iconUrl, dimension,goBack}) => {
    const navigate = useNavigation()
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={() => goBack && navigate.goBack()}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
}

export default ScreenHeaderBtn
