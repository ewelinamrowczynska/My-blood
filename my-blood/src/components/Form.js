import React, {useEffect, useState} from 'react';
import FakeAPI from "./FakeAPI";
import {useNavigate} from "react-router-dom";
import Nav from "./Nav";

const Form = ({isLogged, setIsLogged}) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState({});
    const [msg, setMsg] = useState("");
    let navigate = useNavigate();

    useEffect(() => {
        if (isLogged) {
            navigate("/");
        }
    }, [isLogged]);

    const handleSubmit = (e) => {
        e.preventDefault();
        FakeAPI.login({
            username: login,
            password: password
        }).then(user => {
            console.log(user);
            setUser(user);
            setIsLogged(true);
        }).catch(err => {
            setMsg(err);
            setIsLogged(false);
            console.log("Nie udalo sie zalogować", err);
        })
    }

    if (isLogged) {
        navigate("/");
    }

    return (
        <>
            {msg.length > 0 && <h2>{msg}</h2>}
            <form className="form" onSubmit={handleSubmit}>
                <h4>Zaloguj się do MY_BLOOD</h4>
                <div className="form__input">
                    <label id="login">Login
                        <input
                            type="text"
                            name="username"
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                        />
                    </label>
                    <label id="password">Hasło
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <button className="log__btn">Zaloguj</button>
                </div>
            </form>
        </>
    );
};

export default Form;