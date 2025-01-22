import React, { createContext, useContext, useState } from 'react';

const DemoContext = createContext(null);

export function DemoProvider({ children }) {
  const [isDemo, setIsDemo] = useState(false);

  const value = {
    isDemo,
    setIsDemo
  };

  return (
    <DemoContext.Provider value={value}>
      {children}
    </DemoContext.Provider>
  );
}

export function useDemo() {
  const context = useContext(DemoContext);
  if (!context) {
    throw new Error('useDemo must be used within a DemoProvider');
  }
  return context;
}