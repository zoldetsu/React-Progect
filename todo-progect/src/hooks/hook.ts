import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { AppDispatch, RootStates } from "../store";

export const useAppSelector: TypedUseSelectorHook<RootStates> = useSelector;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
