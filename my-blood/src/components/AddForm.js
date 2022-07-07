import React, {useState, useEffect} from 'react';
import {useForm} from "react-hook-form";
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
    const {register, handleSubmit, reset, unregister} = useForm();
    const [inputData, setInputData] = useState([]);
    const [inputValue, setInputValue] = useState("")

    const onSubmit = (data) => {
        console.log(data);
        setInputData(prevState => [...prevState, data]);
        reset({ parameter: "", result: "", unit: "wybierz jednostkę" });
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("parameter", {required: true})} placeholder="parametr"/>
                <input {...register("result", {required: true})} placeholder="wynik"/>
                <select {...register("unit", {required: true})}>
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
                <button onClick={()=>{}}>Nowa karta wyników</button>
            </form>
            <ul className="resultsList"> <li>{new Date().toLocaleString()}</li>
                {inputData.map((item) => <li key={item.parameter}>{item.parameter} {item.result} {item.unit}
                    <button>Edytuj</button>
                    <button onClick={() => unregister("parameter")}>Usuń</button></li>)}
            </ul>
        </>
    )
}


export default AddForm;