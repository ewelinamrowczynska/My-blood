import React from 'react';

const Nav = () => {

    return (
        <div className="nav">
            <button><a href="localhost:3000/home"/>Home</button>
            <button><a href="localhost:3000/tabela"/>Tabela wyników</button>
            <button><a href="localhost:3000/dodajwyniki"/>Dodaj wyniki</button>
            <button><a href="localhost:3000/kontakt"/>Kontakt</button>
        </div>
    );
};

export default Nav;