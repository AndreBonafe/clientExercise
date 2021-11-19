import { Route, Routes } from 'react-router';
import './App.css';
import Clients from './Pages/Clients';
import Home from './Pages/Home';
import Login from './Pages/Login';
import NewClients from './Pages/NewClients';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="login" element={ <Login /> } />
      <Route path="clients" element={ <Clients /> } />
      <Route path="newclient" element={ <NewClients /> } />
    </Routes>
  );
}

export default App;
