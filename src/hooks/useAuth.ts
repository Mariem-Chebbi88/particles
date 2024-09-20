// hooks/useAuth.ts
import { useState, useEffect } from 'react';

interface User {
  firstname: string;
  lastname: string;
  email: string;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loadingUser, setLoadingUser] = useState<boolean>(true);

  useEffect(() => {
    // Simulate fetching user data
    setTimeout(() => {
      setUser({
        firstname: 'John',
        lastname: 'Doe',
        email: 'john.doe@example.com',
      });
      setLoadingUser(false);
    }, 1000);
  }, []);

  return { user, loadingUser };
};
