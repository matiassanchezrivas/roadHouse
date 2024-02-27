import React, {createContext, useContext, useState} from 'react';

interface TabContextValue {
  selectedTab: number;
  selectTab: (tab: number) => void;
}

export const TabContext = createContext<TabContextValue | undefined>(undefined);

interface TabContextProps {
  children: React.ReactNode;
}

export const TabProvider: React.FC<TabContextProps> = ({children}) => {
  const [selectedTab, setSelectedTab] = useState<number>(2);

  const value: TabContextValue = {
    selectedTab,
    selectTab: (tab: number) => {
      setSelectedTab(tab);
    },
  };

  return <TabContext.Provider value={value}>{children}</TabContext.Provider>;
};

export const useTabContext = (): TabContextValue => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error('useTabContext must be used within a TabProvider');
  }
  return context;
};
