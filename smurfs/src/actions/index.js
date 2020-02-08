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