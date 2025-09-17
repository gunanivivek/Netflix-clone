import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
interface LanguageState {
    code: string;
}

const initialState: LanguageState = {
    code: "en",
}

const LanguageSlice = createSlice({
    name: "language",
    initialState,
    reducers: {
        setLanguage: (state, action: PayloadAction<string>) => {
            state.code = action.payload.toLowerCase();
        }
    }
})

export const {setLanguage} = LanguageSlice.actions;
export default LanguageSlice.reducer;