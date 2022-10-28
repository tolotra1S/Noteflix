import axios from 'axios';
import {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
/* import './resultat.css'; */
import './Result.css';

function Result() {
    const [data, setData] = useState ([]);
    const {level} = useParams()
    const {id} = useParams()

    useEffect (() => {
      axios.get(`http://127.0.0.1:8000/api/note_etu/${id}`)
      .then((res)=>{
        setData(res.data)
        console.log(res)
      })
    },[id]);
  
    return (
      <div className="scrollable-div">
        <h1> Résultat des examens des étudiants en {level} </h1>
        <table border={1} className="table1">
          
            <tr id="header" className='tr'>
              <th class="th"> Matricule </th>
              <th class="th"> Nom </th>
              <th class="th"> Genre </th>
              <th class="th"> Groupe </th>
              <th class="th"> Modules à rattraper </th>
              <th class="th"> </th>
            </tr>
         
            {data.map((etudiant)=>{
              return(
              <tr  key={etudiant.id} className="tr">
                <td className="td"> {etudiant.matricule} </td>
                <td className="td"> {etudiant.nom} {etudiant.prenom} </td>
                <td className="td"> {etudiant.genre} </td>
                <td className="td"> {etudiant.groupe} </td>
                <td className="td">
                  {etudiant.notes.map((data) => {
                    return(
                    <div> {data.module.code} </div>
                  )
                })}
                </td>
                <td> <button> <Link to="#"> Admettre </Link> </button></td>
              </tr>)
            })}
          
        </table>
      </div>
  
    )
  }
  export default Result;