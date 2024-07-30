// 전달받은 액션의 종류와

// 리듀서 정의
import {handleAction, handleActions} from 'redux-actions';
import { DECREMENT, INCREMENT } from './actionTypes';

// 상태 초기화
const initialState = {
    count : 0
}

// 리듀서
const counterReducer = handleActions(
    {
        [INCREMENT] : (state) => ( {count : state.count + 1} ),
        [DECREMENT] : (state) => ( {count : state.count - 1} ),
    },
    initialState
)

export default counterReducer;