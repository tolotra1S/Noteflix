import axios from 'axios'
import react from 'react'
import {useState, useEffect} from 'react';
import swal from "sweetalert";
export default function AddNote() {
    const[note, setNote] = useState([])
    const[module, setModule] = useState([])
    const[etudiant, setEtudiant] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const mark = {note, module, etudiant}
        const res = await axios.post(`http://127.0.0.1:8000/api/note`, mark).catch((error) => {
            if (error.response) {
              
                console.log(error.response)
            }
        })
        if (res) {
          swal({
            title: "Sucèss",
            text: "Vous avez ajouté du note",
            icon: "success",
            button: "OK",
          });}
          else{
            swal({
              title: "error",
              text: "Il y a quelque chose qui manque ou un erreur de saisie, Verifie bien",
              icon: "error",
              button: "OK",
            });
          }
            /* alert('success') */
        
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="txt_field">
                <input
                    type="number"
                    name="note"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="form-control"
                    required
                ></input>
                    <span></span>
                    <label> Note </label>                 
                </div>

                <div className="txt_field">
                  <input
                      type="text"
                      name="module"
                      className="form-control"
                      value={module}
                      onChange={(e) => setModule(e.target.value)}
                      required
                    ></input>
                    <span></span>
                    <label> Nom du module </label>
                    
                </div>

                <div className="txt_field">
                  <input
                    type="text"
                    name="etudiant"
                    className="form-control"
                    value={etudiant}
                    onChange={(e) => setEtudiant(e.target.value)}
                    required
                  ></input>
                  <span></span>
                  <label> Nom de l'étudiant </label>
                  <br/>
                  <button
                    type="submit"
                    value="Envoyer"
                    onSubmit={handleSubmit}
                    className="btn btn-primary"
                  >
                
                    Enregistrer{/* </Link> */}
                  </button>
                </div>
        </form>
    )
}