import React, {useState, useEffect} from 'react';
import {BsSearch} from "react-icons/bs"

const FilterForm = () => {
return (
    <div>
        <span>Filtruj wyniki</span>
        <input></input>
        <button className="btn"><BsSearch /></button>
    </div>
)

}
export default FilterForm;