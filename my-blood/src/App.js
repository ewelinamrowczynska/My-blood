import Form from "./components/Form";
import "./scss/main.scss";
import Home from "./components/Home";
import StartBtn from "./components/StartBtn";
import FilterForm from "./components/FilterForm";
import Footer from "./components/Footer";


function App() {
    return (
        <>
            <Home />
            <StartBtn />
            <FilterForm />
            <Footer />
        </>
    );
}

export default App;
