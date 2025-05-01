import React, { createContext, useState, ReactNode, useEffect } from 'react';

type StoreType = {
  currentUser: { email: string };
  setUserLogin: React.Dispatch<React.SetStateAction<{ email: string }>>;
};

type StoreProps = {
  children: ReactNode;
};

const StoreContext = createContext<StoreType | null>(null);

const Store = ({ children }: StoreProps) => {
  const [userLogin, setUserLogin] = useState({
    email: 'ducduc@gmail.com',
  });

  const store = { currentUser: userLogin, setUserLogin };

  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  );
};

export default Store;
export { StoreContext };