import React from 'react';
import ProfileScreen from '@screens/ProfileScreen/ProfileScreen';
import {TabProvider} from '@screens/ProfileScreen/context/TabContext';

export const App: React.FC = ({}) => {
  return (
    <TabProvider>
      <ProfileScreen />
    </TabProvider>
  );
};

export default App;
