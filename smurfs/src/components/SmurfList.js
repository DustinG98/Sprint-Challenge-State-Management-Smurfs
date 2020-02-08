import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchSmurfs, SET_SMURF_TO_EDIT, deleteSmurf } from '../actions'

const SmurfList = () => {
    //Define state from redux
    const state = useSelector(state => state);

    //define dispatch
    const dispatch = useDispatch();

    //initial data
    useEffect(() => {
        dispatch(fetchSmurfs())
    }, [dispatch])

    //edit smurf handler
    const editSmurf = (smurf) => {
        dispatch({type: SET_SMURF_TO_EDIT, payload: smurf})
    }

    //delete smurf handler
    const handleDeleteSmurf = (id) => {
        dispatch(deleteSmurf(id))
    }
    return (
        <div>
            <h2>Smurfs</h2>
            {state.smurfs.map(smurf => {
                return  <div key={smurf.id}>
                            <h1>{smurf.name}</h1>
                            <p>Age: {smurf.age}</p>
                            <p>Height: {smurf.height}</p>
                            <button onClick={() => editSmurf(smurf)}>Edit</button>
                            <button onClick={() => handleDeleteSmurf(smurf.id)}>Delete</button>
                        </div>
            })}
        </div>
    )
}

export default SmurfList