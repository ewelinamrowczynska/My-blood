//import Form from "./components/Form";
import "./scss/main.scss";
import Home from "./components/Home";
import AddForm from "./components/AddForm";
import FilterForm from "./components/FilterForm";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <div className="header">
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
