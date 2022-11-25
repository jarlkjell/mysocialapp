import './App.css';
import Login from "./components/login/Login"
import Register from './components/register/Register';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'





function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>

      </Router>

  );
}

export default App;
