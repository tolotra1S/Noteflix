import React from 'react';
import './Home.css';
import { useState} from "react";
/* import BarChart from "./BarChart"; */
import LineChart from "./LineChart";
/*import PieChart from "./PieChart"; */
import { UserData} from "./Data";


export default function GraphLinechart2() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Nombre d'étudiant",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "#2a06ad",
          "#18006d",
          "#5432ce",
          "#18006d",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
 
    
    
  return (  
    
    
      
        <div style={{ width: 500 }} className='barchart'>
            <LineChart chartData={userData} />
        </div>
      
     
      
     
  )
}
