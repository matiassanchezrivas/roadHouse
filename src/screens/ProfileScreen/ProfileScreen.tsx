import React from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import {Tabs} from 'react-native-collapsible-tab-view';

import {colors, spacing} from '@theme/theme';

import {NavigationBar} from './components/NavigationBar';
import RenderSkeletonItem from './components/SkeletonItem';
import ProfileInfo from './components/ProfileInfo';
import useProfileTabScroll from './hooks/useProfileTabScroll';

const ProfileScreen: React.FC = ({}) => {
  const {scrollHandler, onChangeTab, tabList} = useProfileTabScroll();

  return (
    <SafeAreaView style={styles.container}>
      <NavigationBar scrollValue={scrollHandler} />
      <Tabs.Container
        onIndexChange={onChangeTab}
        renderHeader={() => <ProfileInfo />}>
        {tabList.map(tab => (
          <Tabs.Tab key={tab.id} name={tab.title}>
            <Tabs.FlatList
              data={Array.from({length: tab.itemQuantity}, (_, index) =>
                index.toString(),
              )}
              keyExtractor={item => item}
              ref={tab.ref as React.RefObject<FlatList<string>>}
              renderItem={() => <RenderSkeletonItem color={tab.color} />}
              scrollEventThrottle={16}
              style={styles.tabContainer}
            />
          </Tabs.Tab>
        ))}
      </Tabs.Container>
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
  tabContainer: {
    padding: spacing.l,
  },
});

export default ProfileScreen;
