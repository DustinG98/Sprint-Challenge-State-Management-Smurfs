import axios from 'axios'

//ACTIONS TO FETCH SMURFS
export const FETCH_SMURFS_START = "FETCH_SMURFS_START"
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS"
export const FETCH_SMURFS_FAIL = "FETCH_SMURFS_FAIL"

//FETCH SMURFS 
export const fetchSmurfs = () => dispatch => {
    dispatch({type: FETCH_SMURFS_START});
    axios.get('http://localhost:3333/smurfs')
        .then(res => {
            dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({type: FETCH_SMURFS_FAIL, payload: err})
        })
}

//ACTIONS TO ADD NEW SMURF
export const ADD_SMURF_START = "ADD_SMURF_START"
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS"
export const ADD_SMURF_FAIL = "ADD_SMURF_FAIL"

//ADD NEW SMURF
export const addSmurf = (smurf) => dispatch => {
    dispatch({type: ADD_SMURF_START})
    axios.post('http://localhost:3333/smurfs', smurf)
        .then(res => {
            dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: ADD_SMURF_FAIL, payload: err })
        })
}

//EDITING SMURFS
export const SET_SMURF_TO_EDIT = "SET_SMURF_TO_EDIT"

//UPDATE SMURF
export const UPDATE_SMURF_START = "UPDATE_SMURF_START"
export const UPDATE_SMURF_SUCCESS = "UPDATE_SMURF_SUCCESS"
export const UPDATE_SMURF_FAIL = "UPDATE_SMURF_FAIL"

export const updateSmurf = (smurf, id) => dispatch => {
    dispatch({ type: UPDATE_SMURF_START })
    axios.put(`http://localhost:3333/smurfs/${id}`, smurf)
        .then(res => {
            dispatch({ type: UPDATE_SMURF_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: UPDATE_SMURF_FAIL, payload: err })
        })
}