"use client";
import React, { useState, createContext, useContext, useEffect } from "react";

type TabWrapperProps = {
  children: React.ReactNode;
  value?: string;
  tabClass?: string;
  inactiveTabClass?: string;
  activeTabClass?: string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (tab: string) => void;
};
type TabLabelProps = {
  children: React.ReactNode;
  name: string;
  onSelected?: () => void;
};
type TabContentProps = {
  children: React.ReactNode;
  className?: string;
  name: string;
};
type TabsContextInterface = {
  activeTab: string;
  tabClass: string;
  inactiveTabClass: string;
  activeTabClass: string;
  // eslint-disable-next-line no-unused-vars
  setActiveTab: (tab: string) => void;
  // eslint-disable-next-line no-unused-vars
  addTab: (tab: string) => void;
};

const TabsContext = createContext<TabsContextInterface>({
  activeTab: "",
  tabClass: "",
  inactiveTabClass: "",
  activeTabClass: "",
  setActiveTab: () => ({}),
  addTab: () => ({}),
});

/** 
* #Use tabs to switch between a list of items/components.  
* @component **AppTabWrapper**: wrapper element to use tabs
* @param {TabWrapperProps} props - Component props
* @param {string} props.value - current active tab name
* @param {string} props.tabClass - CSS class for every **AppTabLabel** component
* @param {string} props.inactiveTabClass - CSS class for **AppTabLabel** component when inactive
* @param {string} props.activeTabClass - CSS class for **AppTabLabel** component when active
* @param {Function} props.onChange - event emitted when value change
* @example
* <AppTabWrapper
    tabClass="p-5 mx-5 bg-white"
    activeTabClass="bg-red-500"
    value="tab-one"
  >
    <AppTabLabel name="tab-one">
      <span>Tab one button</span>
    </AppTabLabel>  
    <AppTabLabel name="tab-two">
      <span>Tab two button</span>
    </AppTabLabel>  
    <div>
      <AppTabContent name="tab-one">
        <div>Content tab one</div>
      </AppTabContent>
      <AppTabContent name="tab-two">
        <div>Content tab two</div>
      </AppTabContent>
    </div>
  </AppTabWrapper>
*/
export const AppTabWrapper = ({
  children,
  value = "",
  tabClass = "",
  inactiveTabClass = "",
  activeTabClass = "",
  onChange,
}: TabWrapperProps) => {
  const [activeTab, setActiveTab] = useState<string>(value);
  const [tabs] = useState<string[]>([]);
  const values: TabsContextInterface = {
    activeTab,
    tabClass,
    inactiveTabClass,
    activeTabClass,
    setActiveTab,
    addTab(tab: string) {
      if (!tabs.includes(tab)) {
        tabs.push(tab);
      }
    },
  };

  useEffect(() => {
    setActiveTab(value);
  }, [value]);

  useEffect(() => {
    onChange?.(activeTab);
    // eslint-disable-next-line
  }, [activeTab]);

  return <TabsContext.Provider value={values}>{children}</TabsContext.Provider>;
};

/**
 * #Use tabs to switch between a list of items/components.
 *
 * @component **AppTabLabel**: tab button to switch content
 * @param {TabLabelProps} props - Component props
 * @param {string} props.name - tab name to sync with **AppTabContent**
 * @param {Function} props.onSelected - event emitted when specific tab is selected
 */
export const AppTabLabel = ({
  children,
  name,
  onSelected = () => ({}),
}: TabLabelProps) => {
  const {
    activeTab,
    setActiveTab,
    tabClass = "",
    inactiveTabClass = "",
    activeTabClass = "",
    addTab,
  } = useContext(TabsContext);

  useEffect(() => {
    addTab(name);
    // eslint-disable-next-line
  }, []);

  return (
    <div
      role="button"
      tabIndex={0}
      id={`tab-${name}`}
      className={`${tabClass} ${
        name === activeTab ? activeTabClass : inactiveTabClass
      }`}
      onClick={() => {
        setActiveTab(name);
        onSelected();
      }}
    >
      {children}
    </div>
  );
};

/**
 * #Use tabs to switch between a list of items/components.
 * @component **AppTabContent**: Show selected tab content
 * @param {TabWrapperProps} props - Component props
 * @param {string} props.className - tab content wrapper CSS class
 * @param {string} props.name - tab name to sync with **AppTabLabel**
 */
export const AppTabContent = ({
  children,
  className,
  name,
}: TabContentProps) => {
  const { activeTab } = useContext(TabsContext);
  if (activeTab !== name) {
    return null;
  }
  return <div className={className}>{children}</div>;
};
