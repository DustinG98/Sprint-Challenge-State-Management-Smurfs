import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchSmurfs } from '../actions'

const SmurfList = () => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    console.log(state)

    useEffect(() => {
        dispatch(fetchSmurfs())
    }, [dispatch])
    return (
        <div>
            <h2>Smurfs</h2>
            {state.smurfs.map(smurf => {
                return  <div key={smurf.id}>
                            <h1>{smurf.name}</h1>
                            <p>Age: {smurf.age}</p>
                            <p>Height: {smurf.height}</p>
                        </div>
            })}
        </div>
    )
}

export default SmurfList