import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
interface LanguageState {
    code: string;
}

const savedLanguage = localStorage.getItem("language");


const initialState: LanguageState = {
    code: savedLanguage ? savedLanguage.toLowerCase() : "en",
};

const LanguageSlice = createSlice({
    name: "language",
    initialState,
    reducers: {
        setLanguage: (state, action: PayloadAction<string>) => {
            state.code = action.payload.toLowerCase();
            localStorage.setItem("language", state.code);
        }
    }
})

export const {setLanguage} = LanguageSlice.actions;
export default LanguageSlice.reducer;