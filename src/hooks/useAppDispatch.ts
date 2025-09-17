import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/ProStore"

// Typed dispatch hook
export const useAppDispatch: () => AppDispatch = useDispatch;
