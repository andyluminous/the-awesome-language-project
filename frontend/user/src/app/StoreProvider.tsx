'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '@/lib/store';
import { setUser } from '@/lib/features/auth/authSlice';

interface IUserSlice {
  username: string;
  isLoggedIn: boolean;
}

export default function StoreProvider({
  user,
  children
}: {
  user: IUserSlice,
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
    if (user) {
      storeRef.current.dispatch(setUser(user))
    }
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}
