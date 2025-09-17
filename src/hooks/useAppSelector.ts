import { useSelector } from "react-redux";
import type { RootState } from "../store/ProStore";

// Typed selector hook
export const useAppSelector: <T>(selector: (state: RootState) => T) => T = useSelector;
