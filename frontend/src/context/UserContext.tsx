'use client';
import { createContext, useContext } from 'react';

interface User {
  name: string;
  role: 'admin' | 'police' | 'user';
}

interface UserContextType {
  user: User;
}

const UserContext = createContext<UserContextType>({
  user: { name: 'Utilisateur Test', role: 'user' },
});

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const user: User = { name: 'Utilisateur Test', role: 'admin' }; // mock admin

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
};
