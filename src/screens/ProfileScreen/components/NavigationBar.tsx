import {faBell} from '@fortawesome/free-regular-svg-icons';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {StyleSheet, View} from 'react-native';

import {PROFILE_HEADER_MIN} from '@screens/constants';
import {colors, spacing} from '@theme/theme';

export const NavigationBar: React.FC = () => {
  return (
    <View style={styles.container}>
      <FontAwesomeIcon style={styles.iconStyle} icon={faArrowLeft} />
      <FontAwesomeIcon style={styles.iconStyle} icon={faBell} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.backgroundPri,
    flexDirection: 'row',
    height: PROFILE_HEADER_MIN,
    justifyContent: 'space-between',
    padding: spacing.m,
    zIndex: 2,
  },
  iconStyle: {
    color: colors.primary,
  },
});
