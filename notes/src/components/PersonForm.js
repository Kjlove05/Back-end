import React from 'react'

const PersonForm = ({newName, newNumber, handleNameChange, handleNumberChange}) => {
    return (
    <div>
        name: <input value={newName} onChange={handleNameChange} /> <br/>
        number: <input value={newNumber} onChange={handleNumberChange} />
    </div>
    )
}

export default PersonForm