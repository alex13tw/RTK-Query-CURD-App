import './App.css';
import CreateUser from './Components/CreateUser';
import EditUser from './Components/EditUser';
import Header from './Components/Header';
import User from './Components/User';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <Header/>

    <Routes>
      <Route path='/' element={<User/>} />
      <Route path='/create' element={<CreateUser/>} />
      <Route path='/edit/:id' element={<EditUser/>} />
    </Routes>
    </BrowserRouter>
    
    
    
  );
}

export default App;
