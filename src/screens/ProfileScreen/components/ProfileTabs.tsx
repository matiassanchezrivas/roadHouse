import React from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {useTabContext} from '@screens/ProfileScreen/context/TabContext';
import {colors, radius, spacing} from '@theme/theme';

const tabs = [
  {id: 1, title: 'Feed'},
  {id: 2, title: 'Favourite'},
  {id: 3, title: 'Events'},
];

export const ProfileTabs: React.FC = ({}) => {
  return (
    <View style={styles.container}>
      {tabs.map(t => (
        <TabBtn tabId={t.id} key={t.id} title={t.title} />
      ))}
    </View>
  );
};

interface TabButtonProps {
  title: string;
  tabId: number;
}

export const TabBtn: React.FC<TabButtonProps> = ({title, tabId}) => {
  const {selectTab, selectedTab} = useTabContext();
  const isSelected = selectedTab === tabId;
  return (
    <TouchableOpacity
      onPress={() => selectTab(tabId)}
      style={[styles.button, isSelected ? styles.buttonSelected : {}]}>
      <Text
        style={[
          styles.buttonText,
          isSelected ? styles.buttonTextSelected : {},
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#f0f0f0',
    borderRadius: radius.s,
    flexGrow: 1,
    justifyContent: 'center',
    marginHorizontal: spacing.xs,
    ...Platform.select({
      android: {
        elevation: 5,
      },
      ios: {
        shadowColor: colors.textPri,
        shadowOffset: {
          height: 2,
          width: 0,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
    }),
  },
  buttonSelected: {
    backgroundColor: colors.primary,
  },
  buttonText: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: '700',
    padding: spacing.s,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  buttonTextSelected: {
    color: 'white',
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.m,
  },
});

export default ProfileTabs;
