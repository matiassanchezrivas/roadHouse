import {faBell} from '@fortawesome/free-regular-svg-icons';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Animated, {
  Extrapolation,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

import {colors, spacing} from '@theme/theme';
import {commonStyles} from 'theme/common';

interface NavigationBarProps {
  scrollValue: SharedValue<number>;
}

export const NavigationBar: React.FC<NavigationBarProps> = ({scrollValue}) => {
  const animatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      scrollValue.value,
      Platform.OS === 'ios' ? [-180, -130] : [200, 250],
      [0, 1],
      Extrapolation.CLAMP,
    ),
    transform: [
      {
        translateY: interpolate(
          scrollValue.value,
          Platform.OS === 'ios' ? [-180, -130] : [200, 250],
          [30, 0],
          Extrapolation.CLAMP,
        ),
      },
    ],
  }));
  return (
    <View style={styles.container}>
      <View style={styles.overFlow} />
      <FontAwesomeIcon style={styles.iconStyle} icon={faArrowLeft} />
      <Animated.View style={[styles.nameContainer, animatedStyle]}>
        <Text style={[commonStyles.title, styles.title]}>Logan Martin</Text>
        <Text style={[commonStyles.subtitle, styles.subtitle]}>
          @loganmartin
        </Text>
      </Animated.View>
      <FontAwesomeIcon style={styles.iconStyle} icon={faBell} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.backgroundPri,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: spacing.m,
    zIndex: 2,
  },
  iconStyle: {
    color: colors.primary,
  },
  nameContainer: {
    alignItems: 'center',
  },
  overFlow: {
    backgroundColor: colors.backgroundPri,
    height: 200,
    left: 0,
    position: 'absolute',
    right: 0,
    top: -200,
  },
  subtitle: {
    fontSize: 13,
  },
  title: {
    fontSize: 15,
  },
});
