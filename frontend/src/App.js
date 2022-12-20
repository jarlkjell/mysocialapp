import './App.css';
import Login from './components/login/loginComponents/Login';
import Register from './components/register/Register';
import Profil from './components/profil/Profil';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'





function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/profile" element= {<Profil/>}/>
      </Routes>

      </Router>

  );
}

export default App;
