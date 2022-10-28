import React from 'react';
import axios from 'axios';
import './Matiere.css';
import {useState, useEffect} from 'react';

import {Route,Routes, useParams, Link} from "react-router-dom";

export default function Matiere() {
  const [data, setData] = useState ([]);

  useEffect (() => {
    axios.get(`http://127.0.0.1:8000/api/modules`).then((res)=> {
        setData(res.data)
    })
}, []);
return (
    <div className = "scrollable-div">
        
        {/* <h1> Liste des notes par modules </h1> */}
        <p> Voici la liste des modules à l'école ESTI, vous pouvez naviguer dessus pour modifier les notes des étudiants </p>
                            <table className='tete'>
                            <th>Code Matiere</th>                   
                            <th>Matiere</th>                   
                            <th>Coefficient</th>
                            </table> 
        {data.map((mods)=>{
            
            return(
                <table border={2} key={mods.id}>
                            
                                              
                            <th><Link to={`./Detail/${mods.id}`}class='link'> {mods.code} </Link></th>
                            <th>{mods.nom_module}</th>
                            <th>{mods.coeff}</th>
                            
                        
                 
                    
                {/* <div class="tab">
                <div className="grid-item"> <a href="./Matiere" class='Matiere'>  </a></div></div>
                <div class="tab">
                <div className="grid-item">  </div></div>
                <div class="tab">
                <div className="grid-item">  </div></div> */}
                </table>
                )
        })}
       <div className="but"> <Link to ='./New' class='link' > <span>+ Ajouter</span><i></i></Link></div>
    </div>
    )
}