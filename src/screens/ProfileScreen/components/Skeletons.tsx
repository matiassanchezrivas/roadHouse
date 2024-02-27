import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import {colors, radius, spacing} from '@theme/theme';

interface SkeletonsProps {
  color: string;
  quantity: number;
}

const Skeletons: React.FC<SkeletonsProps> = ({quantity, color}) => {
  const skeletonData = Array.from({length: quantity}, (_, index) =>
    index.toString(),
  );

  return (
    <FlatList
      data={skeletonData}
      keyExtractor={item => item}
      renderItem={() => <RenderSkeletonItem color={color} />}
      scrollEnabled={false}
      showsVerticalScrollIndicator={false}
      style={styles.flatlistSyle}
    />
  );
};

const RenderSkeletonItem: React.FC<{color: string}> = ({color}) => (
  <View style={styles.skeletonItem}>
    <View style={[styles.skeletonHeader, {backgroundColor: color}]} />
    <View style={[styles.skeletonBody, {height: 10 + Math.random() * 300}]} />
    <View style={styles.skeletonFooter} />
  </View>
);

const styles = StyleSheet.create({
  flatlistSyle: {
    marginVertical: spacing.m,
  },
  skeletonBody: {
    backgroundColor: '#e0e0e0',
    borderRadius: radius.m,
    flex: 1,
    height: 100,
    marginBottom: spacing.s,
  },
  skeletonFooter: {
    backgroundColor: '#e0e0e0',
    borderRadius: radius.m,
    height: spacing.m,
    width: '40%',
  },
  skeletonHeader: {
    backgroundColor: '#e0e0e0',
    borderRadius: radius.m,
    height: spacing.m,
    marginBottom: spacing.s,
    width: '70%',
  },
  skeletonItem: {
    backgroundColor: colors.backgroundSec,
    borderColor: colors.textSec,
    borderRadius: radius.m,
    borderWidth: 0.5,
    marginBottom: spacing.m,
    marginHorizontal: spacing.m,
    padding: spacing.s,
  },
});

export default Skeletons;
