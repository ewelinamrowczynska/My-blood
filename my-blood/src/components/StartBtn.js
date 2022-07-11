import React, {useState} from 'react';
import AddForm from "./AddForm";

const StartBtn = () => {
    const [start, setStart] = useState(false);

    const handleStartBtn = (e) => {
        e.preventDefault();
        setStart(true);
    }

    if (start) return (
        <>
            <button className="btn newCardBtn" type="button" onClick={(handleStartBtn)}
            >Nowa karta wyników
            </button>
            <ul>
                <li>
                    <AddForm/>
                </li>
            </ul>
        </>
    )
    return (
        <button className="btn newCardBtn" type="button" onClick={(handleStartBtn)}
        >Nowa karta wyników</button>

    );

};

export default StartBtn;