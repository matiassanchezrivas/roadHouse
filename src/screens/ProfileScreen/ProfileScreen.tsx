import React, {useRef} from 'react';
import {Animated, SafeAreaView, StyleSheet} from 'react-native';
import {Tabs} from 'react-native-collapsible-tab-view';

import {colors, spacing} from '@theme/theme';

import {NavigationBar} from './components/NavigationBar';

import RenderSkeletonItem from './components/SkeletonItem';
import ProfileInfo from './components/ProfileInfo';

export const ProfileTabList = [
  {id: 1, title: 'Feed', color: '#BDEDE0'},
  {id: 2, title: 'Favourite', color: '#BBDBD1'},
  {id: 3, title: 'Events', color: '#B6B8D6'},
];

const ProfileScreen: React.FC = ({}) => {
  let scrollOffsetY = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>
      <NavigationBar />
      <Tabs.Container
        renderHeader={() => <ProfileInfo scrollValue={scrollOffsetY} />}>
        {ProfileTabList.map(tab => (
          <Tabs.Tab key={tab.id} name={tab.title}>
            <Tabs.FlatList
              onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {y: scrollOffsetY}}}],
                {useNativeDriver: false},
              )}
              style={styles.tabContainer}
              data={Array.from({length: tab.id * 3}, (_, index) =>
                index.toString(),
              )}
              renderItem={() => <RenderSkeletonItem color={tab.color} />}
              keyExtractor={item => item}
            />
          </Tabs.Tab>
        ))}
      </Tabs.Container>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    padding: spacing.m,
  },
  container: {
    backgroundColor: colors.backgroundPri,
    flex: 1,
    margin: 0,
    paddingTop: 10,
  },
});

export default ProfileScreen;
