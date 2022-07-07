//import Form from "./components/Form";
import "./scss/main.scss";
import Home from "./components/Home";
import AddForm from "./components/AddForm";
import FilterForm from "./components/FilterForm";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

function App() {
    return (
        <>
            <div className="header">
                <Nav/>
                <span className="userName">Zalogowano</span>
            </div>
            <Home/>
            <AddForm/>
            <FilterForm/>
            <Footer/>
        </>
    );
}

export default App;
