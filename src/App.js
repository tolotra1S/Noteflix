import './App.css';

import {Route,Routes, useParams} from "react-router-dom";
import Home from './component/Home/Home';
import Resultat from './component/Resultat/Resultat';
import Login from './component/Login/Login';
import Etudiant from './component/Etudiant/Etudiant';
import Navbar from './component/Navbar/Navbar';
import Matiere from './component/Matiere/Matiere';
import New from './component/Matiere/New';
import Detail from './component/Matiere/Detail';
import Result from './component/Resultat/Result';
import EtudiantList from './component/Etudiant/EtudiantList';
import AddNote from './component/Etudiant/AddNote';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import {useState, useEffect} from 'react';


function App() {
  const [loading, setLoading] = useState (false)  
  useEffect (() => {
      setLoading(true)
      setTimeout(()=> {
        setLoading(false)
      },3000)
  },
[]);
  return (
    <>
      { loading ?
      <div className='loading'><ClimbingBoxLoader size={25} thickness={100} speed={100} color="#61dafb" secondaryColor="#61dafb" /></div>
    :
    <div>
    <Routes>
      <Route path='/' element={<Login />}> </Route>
    </Routes>

    <Navbar/>

    <Routes>
      
      <Route path='/Home' element={<Home />}> </Route>
      <Route path='/Resultat' element={<Resultat />}></Route>
      <Route path='/Resultat/Result/:level/:id' element={<Result />}></Route>
      <Route path='/Etudiant/Etudiant/:id' element={<Etudiant />}></Route>
      <Route path='/Etudiant/EtudiantList' element={<EtudiantList />}></Route>
      <Route path='/Etudiant/EtudiantList/AddNote' element={<AddNote />}></Route>
      <Route path='/Matiere' element={<Matiere />}></Route>
      <Route path='/Matiere/New' element={<New />}></Route>
      <Route path='/Matiere/Detail/:id' element={<Detail />}></Route>

    </Routes>
      
      </div>
    }
    
    </>
  );
}

export default App;

