import React, {useEffect, useState} from 'react';
import FakeAPI from "./FakeAPI";
import Home from "./Home";
import FilterForm from "./FilterForm";
import Footer from "./Footer";
import StartBtn from "./StartBtn";

const Form = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [isLogged, setIsLogged] = useState(false);
    const [user, setUser] = useState({});
    const [msg, setMsg] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        FakeAPI.login({
            username: login,
            password: password
        }).then(user => {
            setUser(user);
            setIsLogged(true);
        }).catch(err => {
            setMsg(err);
            setIsLogged(false);
        })
    }

    if (isLogged) {
        return (
            <>
                <div className="header">
                    <span className="userName">Zalogowany uzytkownik {user.name}</span>
                    <button className="btn logOut" onClick={() => setIsLogged(false)}>Wyloguj</button>
                </div>
                <Home/>
                <StartBtn/>
                <FilterForm/>
                <Footer/>
            </>)
    }

    return (
        <>
            {msg.length > 0 && <h2>{msg}</h2>}
            <form className="form" onSubmit={handleSubmit}>
                <h4>Zaloguj się do MY_BLOOD</h4>
                <div className="form__input">

                    <input
                        placeholder="Login"
                        type="text"
                        name="username"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                    <input
                        placeholder="Hasło"
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="btn">Zaloguj</button>
                </div>
            </form>

        </>
    );
};

export default Form;