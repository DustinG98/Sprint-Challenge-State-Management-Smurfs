import { FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAIL, ADD_SMURF_START, ADD_SMURF_SUCCESS, ADD_SMURF_FAIL } from '../actions'

const initialState = {
    smurfs: [],
    isFetching: false,
    isPosting: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SMURFS_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false,
                error: ''
            }
        case FETCH_SMURFS_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case ADD_SMURF_START:
            return {
                ...state,
                isPosting: true
            }
        case ADD_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isPosting: false
            }
        case ADD_SMURF_FAIL:
            return {
                ...state,
                isPosting: false,
                error: action.payload
            }
        default: 
            return state;
    }
}