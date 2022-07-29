import React, { useState } from 'react';
import { BsSearch } from "react-icons/bs";
import AddForm from "./AddForm";

const FilterForm = () => {
    const [filterValue, setFilterValue] = useState("");

    const handeSearchBtn = (props) => {
        const filterValuesList = props.filter((el => el.parameter === filterValue));
        console.log(filterValuesList);
        return (
            filterValuesList.map(el => <li key={el.id}>{el.parameter} {el.quantity} {el.unit} </li>)
        )
    }
    return (
        <div>
            <span>Filtruj wyniki: </span>
            <input placeholder="parametr" value={filterValue}
                   onChange={e => setFilterValue(e.target.value)}></input>
            <button className="listBtn" onClick={handeSearchBtn}><BsSearch/></button>
        </div>
    )
}
export default FilterForm;