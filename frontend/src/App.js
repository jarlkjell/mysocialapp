import './App.css';
import Login from './components/login/loginComponents/Login';
import Register from './components/register/Register';
import Sidebar from './components/profil/SideBar';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'





function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/profile" element= {<Sidebar/>}/>
      </Routes>

      </Router>

  );
}

export default App;
