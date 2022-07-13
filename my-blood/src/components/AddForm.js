import React, {useState, useEffect} from 'react';
import {RiDeleteBin2Line} from 'react-icons/ri';
import {TiEdit} from "react-icons/ti";
import {MdFileDownloadDone} from "react-icons/md";
import {GrAddCircle} from "react-icons/gr"

const AddForm = () => {
    const [results, setResults] = useState([]);
    const [result, setResult] = useState("");
    const [quantity, setQuantity] = useState("");
    const [unit, setUnit] = useState();
    const [resultEditing, setResultEditing] = useState(null);
    const [editingText, setEditingText] = useState("");
    const [editQuantity, setEditQuantity] = useState("");
    const [editUnit, setEditUnit] = useState();
    const [date, setDate] = useState([]);

    useEffect(() => {
        const loadedResults = JSON.parse(localStorage.getItem("bloodResults"));
        if (loadedResults) {
            setResults(loadedResults)
        }
        console.log(results);
    }, []);

    useEffect(() => {
        localStorage.setItem("bloodResults", JSON.stringify(results));
        console.log(results);
    }, [results]);


    const handleSubmit = (e, id) => {
        e.preventDefault();

        const newResult = {
            id: new Date().getTime(),
            parameter: result,
            quantity: quantity,
            unit: unit
        }
        const newDate = new Date().toLocaleString();
        setDate([...date, newDate]);
        setResults([...results, newResult]);
        setEditingText(result);
        setEditQuantity(quantity);
        setEditUnit(unit);
        setQuantity("");
        setUnit("");
        setResult("");
    }

    const deleteResult = id => {
        const updateResults = [...results].filter((el) => el.id !== id)

        setResults(updateResults)
    }

    const editResult = id => {
        const updatedResults = [...results].map((item) => {
            if (item.id === id) {
                item.parameter = editingText;
                item.unit = editUnit;
                item.quantity = editQuantity;
            }
            return item;
        })
        setResults(updatedResults);
        setResultEditing(null);
    }

    return (
        <div className="cardsContainer"> {date[date.length - 1]}

            <form className="addForm" onSubmit={handleSubmit}>
                <input
                    className="parameterInput"
                    type="text"
                    placeholder="parametr"
                    onChange={(e) => setResult(e.target.value)}
                    value={result}/>
                <input
                    className="quantityInput"
                    placeholder="wynik"
                    value={quantity}
                    onChange={e => setQuantity(e.target.value)}
                />
                <select
                    value={unit}
                    onChange={e => setUnit(e.target.value)}
                >
                    <option value="jednostka">jednostka</option>
                    <option value="tys/μl">tys/μl</option>
                    <option value="mln/μl">mln/μl</option>
                    <option value="g/dl">g/dl</option>
                    <option value="%">%</option>
                    <option value="fl">fl</option>
                    <option value="pg">pg</option>
                    <option value="mg/l">mg/l</option>
                    <option value="U/l">U/l</option>
                </select>
                <button className="listBtn" type="submit"><GrAddCircle/></button>

            </form>
            <ul className="card">
                {results.map(el => {
                    return (
                        <li className="addForm" key={el.id}>{resultEditing === el.id ? (
                                <>
                                    <input
                                        className="parameterInput"
                                        type="text"
                                        placeholder="parametr"
                                        onChange={(e) => setEditingText(e.target.value)}
                                        value={editingText}
                                    />
                                    <input className="quantityInput"
                                           placeholder="wynik"
                                           value={editQuantity}
                                           onChange={e => setEditQuantity(e.target.value)}
                                    />
                                    <select
                                        value={editUnit}
                                        onChange={e => setEditUnit(e.target.value)}
                                    >
                                        <option value="jednostka">jednostka</option>
                                        <option value="tys/μl">tys/μl</option>
                                        <option value="mln/μl">mln/μl</option>
                                        <option value="g/dl">g/dl</option>
                                        <option value="%">%</option>
                                        <option value="fl">fl</option>
                                        <option value="pg">pg</option>
                                        <option value="mg/l">mg/l</option>
                                        <option value="U/l">U/l</option>
                                    </select>
                                </>)
                            :
                            (<span className="listValues">{el.parameter} {el.quantity} {el.unit}</span>)}
                            {resultEditing === el.id
                                ? (<button className="listBtn" onClick={() => editResult(el.id)}><MdFileDownloadDone/>
                                </button>)
                                : (<button className="listBtn" onClick={() => {
                                    setResultEditing(el.id)
                                }}><TiEdit/></button>)}
                            <button className="listBtn" onClick={() => {
                                deleteResult(el.id)
                            }}><RiDeleteBin2Line/>
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
};

export default AddForm;