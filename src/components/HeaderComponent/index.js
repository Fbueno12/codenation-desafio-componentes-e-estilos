import React from 'react';

import { View, Image } from 'react-native';

import styles from './styles';

const HeaderComponent = () => {
  return (
	  <View style={styles.Container}>
            <Image
                style={styles.Logo} 
                source={require('../../../assets/codenation.png')}
            />
      </View>
  );
}

export default HeaderComponent;