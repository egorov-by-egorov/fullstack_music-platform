import { bindActionCreators } from 'redux';
import ActionCreators from '../store/actions'
import { useTypedDispatch } from './redux';

export const useActions = () => {
    const dispatch = useTypedDispatch()

    return bindActionCreators( ActionCreators, dispatch )
}