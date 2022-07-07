import React, {useState} from 'react';
import FakeAPI from "./FakeAPI";
import Nav from "./Nav";
import Home from "./Home";
import AddForm from "./AddForm";
import FilterForm from "./FilterForm";
import Footer from "./Footer";

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
                    <Nav/>
                    <span className="userName">Zalogowany użytkownik {user.name}</span>
                </div>
                <Home/>
                <AddForm/>
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