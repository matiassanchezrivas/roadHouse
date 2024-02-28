import {useMemo, useState} from 'react';
import {
  AnimatedRef,
  useAnimatedRef,
  useScrollViewOffset,
} from 'react-native-reanimated';
import {AnimatedScrollView} from 'react-native-reanimated/lib/typescript/reanimated2/component/ScrollView';

const useProfileTabScroll = () => {
  const feedRef: AnimatedRef<AnimatedScrollView> = useAnimatedRef();
  const favRef: AnimatedRef<AnimatedScrollView> = useAnimatedRef();
  const eventsRef: AnimatedRef<AnimatedScrollView> = useAnimatedRef();

  const feedScrollHandler = useScrollViewOffset(feedRef);
  const favScrollHandler = useScrollViewOffset(favRef);
  const eventScrollHandler = useScrollViewOffset(eventsRef);

  let scrollHandler = [feedScrollHandler, favScrollHandler, eventScrollHandler];
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const ProfileTabList = useMemo(
    () => [
      {
        color: '#BDEDE0',
        handler: feedScrollHandler,
        id: 1,
        itemQuantity: 2,
        ref: feedRef,
        title: 'Feed',
      },
      {
        color: '#BBDBD1',
        handler: favScrollHandler,
        id: 2,
        itemQuantity: 4,
        ref: favRef,
        title: 'Favourite',
      },
      {
        color: '#B6B8D6',
        handler: eventScrollHandler,
        id: 3,
        itemQuantity: 20,
        ref: eventsRef,
        title: 'Events',
      },
    ],
    [
      eventScrollHandler,
      eventsRef,
      favRef,
      favScrollHandler,
      feedRef,
      feedScrollHandler,
    ],
  );

  const onChangeTab: (index: number) => void = index => {
    setSelectedTab(index);
  };

  return {
    onChangeTab,
    scrollHandler: scrollHandler[selectedTab],
    tabList: ProfileTabList,
  };
};

export default useProfileTabScroll;
