import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import './New.css'
import axios from "axios";
import swal from "sweetalert";
/* import swal from '@sweetalert/with-react'; */

//onchange = changer valeur input

function New() {
  const [code, setCode] = useState([]);
  const [nom_module, setModule] = useState([]);
  const [ue, setUE] = useState([]);
  const [coeff, setCoeff] = useState([]);
  const [niveau_id, setNiveau] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const Etudiant = { nom_module, code, ue, coeff, niveau_id };
    const res = await axios.post("http://localhost:8000/api/modules", Etudiant).catch((error)=>{
      if (error.response) {
        console.log(error.response)
      }
    });
    if (res) {
       swal({
        title: "Sucèss",
        text: "Vous avez ajouté du note",
        icon: "success",
        button: "OK",
      });
      console.log(res) 
      /* alert("Succesful add !"); */
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h1>
                Données sur les Modules
                <Link to={"/Matiere"} className="btn btn-primary btn-sm float-end">
                  
                </Link>
              </h1>
            </div>
            <div className="center">
            <h1>Nouveau Module</h1>
              <form onClick={handleSubmit}>
                <div className="txt_field">
                  <input
                      type="text"
                      name="code"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      className="form-control"
                      required
                    ></input>
                    <span></span>
                    <label> Code </label>                 
                </div>

                <div className="txt_field">
                  <input
                      type="text"
                      name="nom_module"
                      className="form-control"
                      value={nom_module}
                      onChange={(e) => setModule(e.target.value)}
                      required
                    ></input>
                    <span></span>
                    <label> Nom du module </label>
                    
                </div>

                <div className="txt_field">
                  <input
                    type="text"
                    name="ue"
                    className="form-control"
                    value={ue}
                    onChange={(e) => setUE(e.target.value)}
                    required
                  ></input>
                  <span></span>
                  <label>Unité d'enseignement</label>
                </div>

                <div className="txt_field">
                  <input
                    type="number"
                    name="niveau_id"
                    className="form-control"
                    value={niveau_id}
                    onChange={(e) => setNiveau(e.target.value)}
                    required
                  ></input>
                  <span></span>
                  <label> Niveau </label>
                </div>

                <div className="txt_field">
                  <input
                    type="number"
                    name="coeff"
                    className="form-control"
                    value={coeff}
                    onChange={(e) => setCoeff(e.target.value)}
                    required
                  ></input>
                  <span></span>
                    <label>Coeff</label>
                </div>
                <div className="form-group mb-3">
                <button
                    type="submit"
                    value="Envoyer"
                    onSubmit={handleSubmit}
                    className="btn btn-primary"
                  > 
                 {/* <Link to={"/Matiere"} className="btn btn-primary btn-sm float-end">
                   */}
                  
                
                    Enregistrer{/* </Link> */}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default New;
