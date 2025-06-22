import React, { useState } from "react";
import "./Tabs.css";

export const Tabs = ({ defaultValue, children }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);
  const enhancedChildren = React.Children.map(children, (child) =>
    React.cloneElement(child, { activeTab, setActiveTab })
  );
  return <>{enhancedChildren}</>;
};

export const TabsList = ({ children }) => {
  return <div className="tabs-list">{children}</div>;
};

export const TabsTrigger = ({ value, children, activeTab, setActiveTab }) => {
  const isActive = activeTab === value;
  return (
    <button
      className={`tab-trigger ${isActive ? "active" : ""}`}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </button>
  );
};
