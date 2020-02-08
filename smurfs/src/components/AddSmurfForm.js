import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addSmurf } from '../actions'

const AddSmurfForm = () => {
    const dispatch = useDispatch()
    const [newSmurf, setNewSmurf] = useState({
        name: "",
        age: "",
        height: ""
    })

    const handleChanges = (e) => {
        setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addSmurf(newSmurf))
    }
    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                {console.log(newSmurf)}
                <input name="name" type="text" value={newSmurf.name} placeholder="Name" onChange={e => handleChanges(e)} required/>
                <input name="age" type="text" value={newSmurf.age} placeholder="Age" onChange={e => handleChanges(e)} required/>
                <input name="height" type="text" value={newSmurf.height} placeholder="Height" onChange={e => handleChanges(e)} required/>
                <button type="submit">Add Smurf</button>
            </form>
        </div>
    )
}

export default AddSmurfForm