import React, {useState} from 'react';
import AddForm from "./AddForm";

const StartBtn = () => {
    const [start, setStart] = useState(false);
    const [cards, setCards] = useState([]);

    const handleStartBtn = (e) => {
        e.preventDefault();
        setStart(true);

        const newCard = {
            id: new Date().getTime(),
        }
        setCards([...cards, newCard]);
    }

    if (start) return (
        <>
            <button className="btn newCardBtn" type="button" onClick={(handleStartBtn)}
            >Nowa karta wyników
            </button>

            <ul className="newAddFormsList"> {cards.map(el => {
                return (
                    <li className="newAddForm" key={el.id}>
                        <AddForm/>
                    </li>
                )
            })}

            </ul>
        </>
    )
    return (
        <button className="btn newCardBtn" type="button" onClick={(handleStartBtn)}
        >Zaczynajmy!</button>

    );

};

export default StartBtn;