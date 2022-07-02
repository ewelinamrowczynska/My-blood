import {useState} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Table from "./components/Table";
import AddForm from "./components/AddForm";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Nav from "./components/Nav";
import "./scss/main.scss";

function App() {
    const [isLogged, setIsLogged] = useState(false);
  return (
      <>
      <Router>
          {
              isLogged && <div className="header">
                  <Nav/>
                  {/*<span className="userName">Zalogowany użytkownik {user.name}</span>*/}
              </div>
          }
          <Routes>
              <Route path="/" element={<Home isLogged={isLogged} />}/>
              <Route path="/tabela" element={<Table isLogged={isLogged}/>}/>
              <Route path="/dodajwyniki" element={<AddForm isLogged={isLogged}/>}/>
              <Route path="/kontakt" element={<Contact isLogged={isLogged}/>}/>
              <Route path="/logowanie" element={<Form isLogged={isLogged} setIsLogged={setIsLogged}/>}/>
          </Routes>
          <Footer/>
      </Router>
      </>
  );
}

export default App;
