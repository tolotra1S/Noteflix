import React from 'react'
import {Link} from "react-router-dom";
import './Navbar.css';
import Resultat from "../Resultat/Resultat"
import Img1 from './img1.png';
export default function Navbar() {
  return (
    <nav>
      <div class='image'><Link to ='./' class=''><img src={Img1} alt="logo"/></Link></div>
      <ul>
        <li>
          <div class='bar'>
            <Link to ='./Home'class='link'>Home</Link>
            <Link to ='./Resultat/Result/L1/1'class='link dropdown'>Result <div className='dropdown-content'><Resultat/></div> </Link>
            <Link to ='./Etudiant/EtudiantList'class='link'>Student</Link> 
            <Link to ='./Matiere'class='link'>Module</Link> 
            <Link to ='./' class='logout'> <i class="material-symbols-outlined"> Logout </i>Log Out</Link>
          </div>
        </li>
      </ul>
    </nav>
  )
}

      