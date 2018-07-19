import { actionTypes } from './actionTypes';

export const saveComment =  (formData) => ({
    type: actionTypes.ADD_COMMENTS,
    payload: formData
});

