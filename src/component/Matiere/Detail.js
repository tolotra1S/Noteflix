import axios from 'axios';
import React, { useState, useEffect } from 'react'
import {useParams} from "react-router-dom"
import '../Resultat/resultat.css';
import './Details.css';

export default function Detail() {
    const {id} = useParams()
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/view/${id}`).then((res)=>{
            setData(res.data)
            console.log(res)
        })
    })

    return(
        <>
        
            <h1> Vous pouvez attribuez des notes à tous les élèves</h1>
            <h2> Module n°{id}</h2>
            {data.map((module)=>{
              return(
            <>
                <div class='prem'>
                    <h3 className='hh3'> Code : {module.code} </h3>
                    <h3 className='hh3'> Nom module : {module.nom_module} </h3>
                    <h3 className='hh3'> Crédit : {module.coeff} </h3>
                    <h3 className='hh3'> UE : {module.ue} </h3>
                    <h3 className='hh3'> Niveau_id : {module.niveau_id} </h3>
                </div>
                <h2> Voici les notes des élèves à ce module : </h2>
                    <table>
                        <thead>
                            <th> Nom </th>
                            <th> Prénom </th>
                            <th> Matricule </th>
                            <th> Note </th>
                        </thead>
                        <tbody>
                        {module.note.map((note)=> {
                            return(
                            <tr>
                                <td> {note.etudiant.nom} </td>
                                <td> {note.etudiant.prenom} </td>
                                <td> {note.etudiant.matricule} </td>
                                <td> {note.note} </td>
                            </tr>
                            )
                        })}
                        </tbody>
                    </table>
            </>
            )
            })}
        </>
    )
}