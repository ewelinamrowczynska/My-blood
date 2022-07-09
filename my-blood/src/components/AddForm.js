import React, {useState, useEffect} from 'react';
import Input from '@mui/material/Input'
import {Button} from "@mui/material";
/*
const AddForm = () => {
    const [form, setForm] = useState({date: new Date(), parameter: "", result: "", unit: ""});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        });
    };
    const handleUnitChange = (e) => {
        const {name, value} = e.target;
        setForm(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        });
    };
    const handleNextBtn = () => {
        return <ul></ul>

    }
    const handleAddBtn = () => {

    }


    return (
        <>
            <form>
                <label>wpisz parametr<input type="text" name="parameter" value={form.parameter}
                                            onChange={handleChange}/></label>
                <label>wartość<input type="text" name="result" value={form.result} onChange={handleChange}/></label>
                <label>jendostka
                    <select value={form.unit} onChange={handleUnitChange}>
                        <option value="tys/μl">tys/μl</option>
                        <option value="mln/μl">mln/μl</option>
                        <option value="g/dl">g/dl</option>
                        <option value="%">%</option>
                        <option value="fl">fl</option>
                        <option value="pg">pg</option>
                        <option value="mg/l">mg/l</option>
                        <option value="U/l">U/l</option>
                    </select></label>
                <button className="nextBtn">następny</button>

            </form>
            <button className="addBtn">Dodaj wyniki</button>
        </>
    );
};


 */


const AddForm = () => {
    const [results, setResults] = useState([]);
    const [result, setResult] = useState("");
    const [quantity, setQuantity] = useState("");
    const [unit, setUnit] = useState();
    const [resultEditing, setResultEditing] = useState(null);
    const [editingText, setEditingText] = useState("");
    const [editQuantity, setEditQuantity] = useState("");
    const [editUnit, setEditUnit] = useState();

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
        <>
            <form onSubmit={handleSubmit}>
                <input type="text"
                       placeholder="parametr"
                       onChange={(e) => setResult(e.target.value)}
                       value={result}/>
                <input
                    placeholder="wynik"
                    value={quantity}
                    onChange={e => setQuantity(e.target.value)}
                />
                <select
                    value={unit}
                    onChange={e => setUnit(e.target.value)}
                >
                    <option value="wybierz jednostkę">wybierz jednostkę</option>
                    <option value="tys/μl">tys/μl</option>
                    <option value="mln/μl">mln/μl</option>
                    <option value="g/dl">g/dl</option>
                    <option value="%">%</option>
                    <option value="fl">fl</option>
                    <option value="pg">pg</option>
                    <option value="mg/l">mg/l</option>
                    <option value="U/l">U/l</option>
                </select>
                <button type="submit">Dodaj wynik</button>
                <button type="button">Nowa karta wyników</button>
            </form>
            <ul>
                {results.map((el) => {
                    return (
                        <li key={el.id}>{resultEditing === el.id ? (
                                <>
                                    <input
                                        type="text"
                                        placeholder="parametr"
                                        onChange={(e) => setEditingText(e.target.value)}
                                        value={editingText}
                                    />
                                    <input
                                        placeholder="wynik"
                                        value={editQuantity}
                                        onChange={e => setEditQuantity(e.target.value)}
                                    />
                                    <select
                                        value={editUnit}
                                        onChange={e => setEditUnit(e.target.value)}
                                    >
                                        <option value="wybierz jednostkę">wybierz jednostkę</option>
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
                            (<div>{el.parameter} {el.quantity} {el.unit}</div>)}
                            {resultEditing === el.id
                                ? (<button onClick={() => editResult(el.id)}>Zapisz zmiany</button>)
                                : (<button onClick={() => {
                                    setResultEditing(el.id)
                                }}>Edytuj</button>)}
                            <button onClick={() => {
                                deleteResult(el.id)
                            }}>Usuń
                            </button>
                        </li>
                    )
                })}
            </ul>
        </>
    )
};

export default AddForm;