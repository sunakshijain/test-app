import {
    actionTypes
} from '../actions/actionTypes';

const initialState = {
    commentDataList : []
}

const comment = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_COMMENTS:
            return {...state, commentDataList: [...state.commentDataList, action.payload] }
        default:
            return state;
    }
}

export default comment;