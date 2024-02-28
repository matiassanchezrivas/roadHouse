import {StyleSheet} from 'react-native';

import {colors} from './theme';

export const commonStyles = StyleSheet.create({
  iconStyle: {
    color: colors.primary,
  },
  subtitle: {
    color: colors.primary,
    fontWeight: '700',
  },
  text: {
    color: colors.textPri,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
  },
});
