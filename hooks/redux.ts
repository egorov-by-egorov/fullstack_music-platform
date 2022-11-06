import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';

const useTypedDispatch: () => AppDispatch = useDispatch;
const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export { useTypedDispatch, useTypedSelector };
