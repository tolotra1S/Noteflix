import React from 'react';
import './Home.css';
import GraphBarchart from "./graphBarchart";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import Img2 from './icode.png';
import GraphLinechart from './graphLinechart';
import GraphLinechart2 from './graphLinechart2';
import GraphPiechart from './graphPiechart';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import {useState, useEffect} from 'react';

export default function Home() {
   const [loading, setLoading] = useState (false)  
  useEffect (() => {
      setLoading(true)
      setTimeout(()=> {
        setLoading(false)
      },3000)
  },
[]);
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
    { width: 2400, itemsToShow: 4 },
  ];
  
  return (  
    
    
  <div className='scrollable-div'>
    { loading ?
      <div className='loading'><ClimbingBoxLoader size={25} thickness={100} speed={100} color="#61dafb" secondaryColor="#61dafb" /></div>
    :
    <div>
    <div>
        <h1 className='dash'>Dashboard</h1>
        <div className='Wlc'>
          <div className='icode'>
            <img src={Img2} alt="icode"/>
          </div>
          <div className='Hello'>
            <h1>
              HELLO!
            </h1>
            <h3>
              Admin , Welcome to Noteflix, a web-app specialized in processing grades of the students of a college in a all-in-one unique platform.
            </h3>
          </div>
          </div>
         
        <div>
          <Carousel>
            <Item>
            <div className='stat-etud stat-etud1'>
              <h1>TAUX DE REUSSITE AUX EXAMENS/an</h1>
              <div className='barchart'>
                <GraphBarchart/>
              </div>
            </div>
            <div className='stat-etud1'>
            <h1>STATISTIQUE DE NOMBRE D'ETUDIANT/an</h1>
              <div className='linechart2' >
                <GraphLinechart2/>
              </div>
            </div>
            </Item>
            
            <Item>

            <div className='stat-etud1'>
            <h1>NOMBRE DE FEMME/an</h1>
              <div className='linechart'><GraphLinechart/>
              </div>
            </div>
            <div className='stat-etud1'>
            <h1>NOMBRE D'ETUDIANT ABANDON/an</h1> 
              <div className='linechart'><GraphPiechart/>
              </div>
            </div>
            </Item>
            
          </Carousel>

        </div>
      
    </div>
    </div>
    }
    </div>
      
  )
}
