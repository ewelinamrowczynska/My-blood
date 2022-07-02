import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import FakeAPI from "./FakeAPI";

const Home = ({isLogged}) => {
    console.log(isLogged, "isLogged");
    let navigate = useNavigate();

    useEffect(() => {
        if (!isLogged) {
        navigate("/logowanie");
    }
    }, [isLogged]);

    return (
        isLogged && <div>Witaj</div>
    );
};

export default Home;