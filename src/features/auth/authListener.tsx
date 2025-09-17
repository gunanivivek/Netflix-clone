import { type ReactNode, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../store/firebase";
import { setLoading, setUser } from "./authSlice";
import { useAppDispatch } from "../../hooks/useAppDispatch";

type AuthListenerProps = {
  children: ReactNode;
};

const AuthListener = ({ children }: AuthListenerProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      dispatch(setUser(user));
      dispatch(setLoading(false));
    });
    return () => unsubscribe();
  }, [dispatch]);

  return <>{children}</>;
};

export default AuthListener;
