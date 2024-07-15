import logo from './logo.svg';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import AddEmp from './pages/AddEmp';
import "./App.css";
function App() {
  return (
    <div className="App">
       <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/about' element={<About/>}/>
           <Route path='/AddEmp' element={<AddEmp/>}/>

           <Route path='/edit/:id' element={<AddEmp/>}/>

       </Routes>
    </div> 
  );
}

export default App;
