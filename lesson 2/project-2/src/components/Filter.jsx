import { useState } from 'react'

const Filter = ({filterValue, setFilterValue}) => {
    const change = (event) => {
        setFilterValue(event.target.value)
    }

    return (
        <div>
            Filter with <input value={filterValue} onChange={change}/>
        </div>
    )

}


export default Filter