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
}
type TabLabelProps = {
  children: React.ReactNode;
  name: string;
  onSelected?: () => void;
}
type TabContentProps = {
  children: React.ReactNode;
  className?: string;
  name: string;
}
type TabsContextInterface = {
  activeTab: string;
  tabClass: string;
  inactiveTabClass: string;
  activeTabClass: string;
  // eslint-disable-next-line no-unused-vars
  setActiveTab: (tab: string) => void;
  // eslint-disable-next-line no-unused-vars
  addTab: (tab: string) => void;
}

const TabsContext = createContext<TabsContextInterface>({
  activeTab: "",
  tabClass: "",
  inactiveTabClass: "",
  activeTabClass: "",
  setActiveTab: () => ({}),
  addTab: () => ({}),
});

export const TabWrapper = ({
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

export const TabLabel = ({
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
    <button
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
    </button>
  );
};

export const TabContent = ({ children, className, name }: TabContentProps) => {
  const { activeTab } = useContext(TabsContext);
  if (activeTab !== name) {
    return null;
  }
  return <div className={className}>{children}</div>;
};
