import {faUser} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {PROFILE_HEADER_MAX} from '@screens/constants';
import {colors, radius, spacing} from '@theme/theme';
import {commonStyles} from 'theme/common';

const PROFILE_PIC_SIZE = 100;

const ProfileInfo: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cover} />
      <View style={styles.infoContainer}>
        <View style={styles.profilePic}>
          <FontAwesomeIcon size={40} style={styles.iconStyle} icon={faUser} />
        </View>
        <View style={styles.textContainer}>
          <Text style={[commonStyles.text, commonStyles.title]}>
            Logan Martin
          </Text>
          <Text style={commonStyles.subtitle}>@loganmartin</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>
            {
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tellus nisi, commodo laoreet euismod eget, semper ut dolor.'
            }
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundPri,
    height: PROFILE_HEADER_MAX,
    overflow: 'hidden',
    padding: spacing.s,
    pointerEvents: 'none',
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
  textContainer: {
    alignItems: 'center',
    marginTop: PROFILE_PIC_SIZE / 2 + spacing.s,
  },
});

export default ProfileInfo;
