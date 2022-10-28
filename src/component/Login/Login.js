import react from "react";
import React, { useState } from 'react'
import './Login.css'
import Footer from '../Footer'
import {Link} from "react-router-dom";
import logo from "./LogoNote.png";

export default function Login() {
 
    const [form, setForm] = React.useState({
        email: '',
        password: '',
      });
    
      const [toggleClass, setToggleClass] = React.useState(false);
    
      const handleForm = (e) => {
        setForm((formProps) => ({ ...formProps, [e.target.name]: e.target.value }));
      };
    
      const annoyingSubmitButton = () => {
        if (form.password.length < 6) {
          setToggleClass((prevState) => !prevState);
        }
      };
    
      return (
        <>
        
          <section className="form-section">
            <h1 className="heading"> <img src={logo}/> </h1>
            <h1 className="admin"> ADMIN </h1>
            
            <form
              autoComplete="false"
              action="https://formspree.io/f/meqvlgqr"
              method="POST"
            >
              <div className="input-block">
                <label className="label">
                  Email ou Pseudo <span className="requiredLabel">*</span>
                </label>
                <input
                  className={`input ${
                    form.email.length < 6 ? 'wrong-input' : 'correct-input'
                  }`}
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleForm}
                  placeholder="zain.sadaqet@gmail.com"
                  tabIndex={-1}
                  required
                />
              </div>
              <div className="input-block">
                <label className="label">
                  Password <span className="requiredLabel">*</span>
                </label>
                <input
                  className={`input ${
                    form.password.length < 6 ? 'wrong-input' : 'correct-input'
                  }`}
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleForm}
                  minLength="6"
                  tabIndex={-1}
                  required
                />
              </div>
              <div>
                {form.password.length < 6 ? (
                  <p className="warning-message">
                    Le mot de passe doit contenir plus de 6 caractères
                  </p>
                ) : (
                  ''
                )}
              </div>
              <div
                className={`submit-button-wrapper ${toggleClass ? 'float' : ''}`}
              >
                <Link to ='./Home'class='link'> <button
                  tabIndex={-1}
                  className={`submit-button ${
                    form.password.length > 6 ? 'button-success' : ''
                  }`}
                  onMouseEnter={annoyingSubmitButton}
                >
                  Submit
                </button> </Link>
              </div>
            </form>
          </section>
          <Footer />
        </>
      );
    }
    