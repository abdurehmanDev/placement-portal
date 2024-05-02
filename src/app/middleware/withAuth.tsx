"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { auth } from 'src/app/services/firebase/config';

const withAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  const AuthChecker: React.FC<P> = (props) => {
    const router = useRouter();

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (!user) {
          router.replace('/login'); 
        }
      }); 

      return () => unsubscribe();
    }, []);

    return <WrappedComponent {...props} />;
  };

  return AuthChecker;
};

export default withAuth;
