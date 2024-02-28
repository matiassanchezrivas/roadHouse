import {faUser} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';

import {PROFILE_HEADER_MAX, PROFILE_HEADER_MIN} from '@screens/constants';
import {colors, radius, spacing} from '@theme/theme';
import {commonStyles} from 'theme/common';

interface ProfileInfoProps {
  scrollValue: Animated.Value;
}

const PROFILE_PIC_SIZE = 100;

const ProfileInfo: React.FC<ProfileInfoProps> = ({scrollValue}) => {
  const opacityMain = scrollValue.interpolate({
    inputRange: [0, PROFILE_HEADER_MAX - PROFILE_HEADER_MIN],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });
  const opacitySecond = scrollValue.interpolate({
    inputRange: [
      (PROFILE_HEADER_MAX - PROFILE_HEADER_MIN) / 2,
      PROFILE_HEADER_MAX - PROFILE_HEADER_MIN,
    ],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });
  const translateY = scrollValue.interpolate({
    inputRange: [
      PROFILE_HEADER_MAX / 2,
      PROFILE_HEADER_MAX - PROFILE_HEADER_MIN,
    ],
    outputRange: [0, PROFILE_HEADER_MIN + 10],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.cover, {opacity: opacityMain}]} />
      <View style={styles.infoContainer}>
        <Animated.View style={[styles.profilePic, {opacity: opacitySecond}]}>
          <FontAwesomeIcon size={40} style={styles.iconStyle} icon={faUser} />
        </Animated.View>
        <Animated.View
          style={[styles.textContainer, {transform: [{translateY}]}]}>
          <Text style={[commonStyles.text, styles.title]}>Logan Martin</Text>
          <Text style={styles.subtitle}>@loganmartin</Text>
        </Animated.View>
        <Animated.View
          style={[styles.descriptionContainer, {opacity: opacityMain}]}>
          <Text style={styles.descriptionText}>
            {
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tellus nisi, commodo laoreet euismod eget, semper ut dolor.'
            }
          </Text>
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundPri,
    pointerEvents: 'none',
    height: PROFILE_HEADER_MAX - PROFILE_HEADER_MIN,
    overflow: 'hidden',
    padding: spacing.s,
  },
  cover: {
    backgroundColor: colors.primary,
    borderRadius: radius.l,
    height: '40%',
  },
  descriptionContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  descriptionText: {
    fontWeight: '300',
    marginHorizontal: spacing.xl,
    textAlign: 'center',
  },
  iconStyle: {
    color: colors.backgroundSec,
    height: PROFILE_PIC_SIZE,
    width: PROFILE_PIC_SIZE,
  },
  infoContainer: {
    alignItems: 'center',
    flex: 1,
    position: 'relative',
  },
  profilePic: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderColor: colors.backgroundSec,
    borderRadius: PROFILE_PIC_SIZE / 2,
    borderWidth: 4,
    height: PROFILE_PIC_SIZE,
    justifyContent: 'center',
    position: 'absolute',
    top: -PROFILE_PIC_SIZE / 2,
    width: PROFILE_PIC_SIZE,
    zIndex: 2,
  },
  subtitle: {
    color: colors.primary,
    fontWeight: '700',
  },
  textContainer: {
    alignItems: 'center',
    marginTop: PROFILE_PIC_SIZE / 2 + spacing.s,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
  },
});

export default ProfileInfo;
