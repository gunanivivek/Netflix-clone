import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";
import { auth } from "../../store/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  type User,
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
      return res.user;
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
      return res.user;
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
    setUser: (state, action: PayloadAction<User | null>) => {
      if (action.payload) {
        const { uid, email, displayName, photoURL } = action.payload;
        state.user = { uid, email, displayName, photoURL };
      } else {
        state.user = null;
      }
      state.loading = false;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    const setSerializableUser = (state: AuthState, payload: User | null) => {
      if (payload) {
        const { uid, email, displayName, photoURL } = payload;
        state.user = { uid, email, displayName, photoURL };
      } else {
        state.user = null;
      }
      state.loading = false;
    };

    builder
      .addCase(signup.pending, (state) => {
        state.loading = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        setSerializableUser(state, action.payload);
      })
      .addCase(signup.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      })

      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        setSerializableUser(state, action.payload);
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      })

      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export const { setUser, setLoading } = authSlice.actions;
export default authSlice.reducer;
