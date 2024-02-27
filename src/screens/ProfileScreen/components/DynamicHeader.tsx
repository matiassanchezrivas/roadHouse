import * as React from 'react';
import {Animated, StyleSheet, View} from 'react-native';

import ProfileHeader from 'screens/ProfileScreen/components/ProfileInfo';
import {ProfileTabs} from '@screens/ProfileScreen/components/ProfileTabs';
import {PROFILE_HEADER_MAX, PROFILE_HEADER_MIN} from '@screens/constants';

interface DynamicHeaderProps {
  scrollValue: Animated.Value;
}

const DynamicHeader: React.FC<DynamicHeaderProps> = ({scrollValue}) => {
  const height = scrollValue.interpolate({
    extrapolate: 'clamp',
    inputRange: [0, PROFILE_HEADER_MAX - PROFILE_HEADER_MIN],
    outputRange: [PROFILE_HEADER_MAX, PROFILE_HEADER_MIN],
  });
  return (
    <View>
      <Animated.View
        style={[
          styles.header,
          {
            height,
          },
        ]}>
        <View style={styles.headerContainer}>
          <ProfileHeader scrollValue={scrollValue} />
          <View style={styles.sticky}>
            <ProfileTabs />
          </View>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'column',
    left: 0,
    position: 'relative',
    right: 0,
    top: 0,
  },
  headerContainer: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
  },
  headerText: {
    alignSelf: 'flex-end',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  sticky: {
    height: PROFILE_HEADER_MIN,
  },
});

export default DynamicHeader;
