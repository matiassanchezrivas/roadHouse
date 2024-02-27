import React, {useRef} from 'react';
import {SafeAreaView, ScrollView, Animated, StyleSheet} from 'react-native';

import DynamicHeader from 'screens/ProfileScreen/components/DynamicHeader';
import {colors} from '@theme/theme';

import {NavigationBar} from './components/NavigationBar';
import {useTabContext} from './context/TabContext';
import Skeletons from './components/Skeletons';

const ProfileScreen: React.FC = ({}) => {
  let scrollOffsetY = useRef(new Animated.Value(0)).current;

  const {selectedTab} = useTabContext();
  return (
    <SafeAreaView style={styles.container}>
      <NavigationBar />
      <DynamicHeader scrollValue={scrollOffsetY} />
      <ScrollView
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollOffsetY}}}],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={16}>
        {selectedTab === 1 && <Skeletons quantity={10} color="#BDEDE0" />}
        {selectedTab === 2 && <Skeletons quantity={20} color="#BBDBD1" />}
        {selectedTab === 3 && <Skeletons quantity={6} color="#B6B8D6" />}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundPri,
    flex: 1,
    margin: 0,
    paddingTop: 10,
  },
  scrollText: {
    color: '#000',
    fontSize: 19,
    padding: 20,
    textAlign: 'center',
  },
});

export default ProfileScreen;
