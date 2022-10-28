import React from 'react';
import axios from 'axios';
import ClipLoader from "react-spinners/ClipLoader";
import {useState, useEffect} from 'react';

import './EtudiantList.css'; 
import {Link} from 'react-router-dom';

export default function EtudiantList() {
    const [loading, setLoading] = useState (false)  

    const [data, setData] = useState ([]);

    useEffect (() => {
        axios.get(`http://127.0.0.1:8000/api/liste`).then((res)=>{
          setData(res.data) 
          console.log(res)
          setLoading(true)
          setTimeout(()=> {
            setLoading(false)
          },5000)
        })
    },[]);

    return(
        <div>
        <div className='scrollable-div'>
            

            
              <button><Link to='/Etudiant/EtudiantList/AddNote' class='link'> Ajouter note </Link></button>
            <h1> Voici la liste des étudiants à l'ESTI </h1>
            <ul>
            {data.map((etudiant) => {
                return(
                <li èkey={etudiant.id}> <div className="etudiant"> <Link to ={`/Etudiant/Etudiant/${etudiant.id}`} class='link'> {etudiant.nom} {etudiant.prenom} </Link> </div> </li>
                )
            })}
            </ul>
        
        
            
        </div>
        </div>)
        
  }
 