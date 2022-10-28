import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import './Etudiant.css';
import * as html2pdf from 'html2pdf.js';
import {Link, useParams} from 'react-router-dom';

export default function Etudiant() {
  const day = new Date().getDate()
  const month = new Date().getMonth()
  const year = new Date().getFullYear()
  const months = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']

  console.log(day , months[month], year);
  const PDF =()=> {
    const element = document.getElementById('pdf');
     var opt = {
     /*  width:        522, */
      margin:       -1,
      filename:     'releve.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    }; 
   
     html2pdf().set(opt).from(element).save(); 
    
} 


  const{id} = useParams()
  const [data, setData] = useState ([]);
  const [avg, setAvg] = useState ([]);

  
  useEffect (() => {
    axios.get(`http://127.0.0.1:8000/api/list/${id}`, {id}).then((res)=>{
      setData(res.data) 
      console.log(res)
    })
  },[]);
  
  useEffect (() => {
    axios.get(`http://127.0.0.1:8000/api/avg/${id}`).then((res)=>{
      setAvg(res.data) 
      console.log(res)
    })
  },[]);

  
  return (
    <div className="scrollable-div"   >
      <container id='pdf'>
    <h1> Les notes de l'étudiant {id}: </h1>
    {data.map((note)=>{
      return(
        <div>
          <br></br>
          <br></br>
        <h1>
          {note.nom} {note.prenom}
        </h1>
        <table className='releve' id='pdf' >
          <thead>
          <tr>
            <th className='th3'>Code</th>
            <th className='th3'>Matière</th>
            <th className='th3'>Coeff</th>
            <th className='th3'>Note</th>
            <th className='th3'>Note pondérée</th>
          </tr>
        </thead>
        <tbody>
          {note.notes.map((notes)=>{
            return(
            <tr  key={notes.id}>
              <td className='center1'> {notes.module.code} </td>
              <td className='center1'> {notes.module.nom_module} </td>
              <td className='center1'> {notes.module.coeff} </td>
              <td className='center1'> {notes.note} </td>
              <td className='center1'> {notes.module.coeff*notes.note} </td>
            </tr>)
          })}
          <td></td>
          <td></td>
          <td></td>
          <td><h3>Moyenne :</h3></td>
          <td className='moyen'>{avg.map((avg)=> {
          return(
            <td>

            <h3 >  {avg.moyenne} </h3> </td>
          )
        })}</td>

                
        </tbody>
        
        
    </table>{/* 
      <h4 className='DDE'>Le Directeur des Etudes</h4> */}
      <div className="row mt-2 mb-lg-5">
                <div className="col-9"></div>
                <div className="col-3">
                    <h4 className='DATE'>Antananarivo, le {day}  {months[month]} {year}</h4>
                    <br/> <h3 className='DDE'>Le directeur des Etudes</h3>
                </div>
            </div>
    
    
    
    </div>)
  })}
  </container>
          <td className='butnpdf'>
          <button onClick={PDF} className='butn'> Export to pdf</button>  
          <button className='butn'> <Link to='/Etudiant/EtudiantList/AddNote' class='link'> Modifier </Link></button>
          <button><Link to='/Etudiant/EtudiantList/AddNote' class='link'> Ajouter du note </Link></button>
          </td> 
    </div>
    
  )
  
}

