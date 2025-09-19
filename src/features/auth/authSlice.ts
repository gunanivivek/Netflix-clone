import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";
import { auth } from "../../store/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

interface AuthUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

interface AuthState {
  user: AuthUser | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: true,
  error: null,
};
export const signup = createAsyncThunk(
  "auth/signup",
  async (
    { email, password }: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const { uid, email: userEmail, displayName, photoURL } = res.user;
      return { uid, email: userEmail, displayName, photoURL }; // ✅ only return serializable data
    } catch (err: unknown) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }
      return rejectWithValue("An unknown error occurred");
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (
    { email, password }: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      const { uid, email: userEmail, displayName, photoURL } = res.user;
      return { uid, email: userEmail, displayName, photoURL }; // ✅ plain object only
    } catch (err: unknown) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }
      return rejectWithValue("An unknown error occurred");
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await signOut(auth);
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
   setUser: (state, action: PayloadAction<AuthUser | null>) => {
      state.user = action.payload;
      state.loading = false;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },  
  extraReducers: (builder) => {
  builder
    .addCase(signup.pending, (state) => {
      state.loading = true;
    })
    .addCase(signup.fulfilled, (state, action) => {
      state.user = action.payload; // ✅ already serializable
      state.loading = false;
    })
    .addCase(signup.rejected, (state, action) => {
      state.error = action.payload as string;
      state.loading = false;
    })

    .addCase(login.pending, (state) => {
      state.loading = true;
    })
    .addCase(login.fulfilled, (state, action) => {
      state.user = action.payload; // ✅ already serializable
      state.loading = false;
    })
    .addCase(login.rejected, (state, action) => {
      state.error = action.payload as string;
      state.loading = false;
    })

    .addCase(logout.fulfilled, (state) => {
      state.user = null;
      state.loading = false;
    });
}});

export const { setUser, setLoading } = authSlice.actions;
export default authSlice.reducer;
