import axios from 'axios';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import './resultat.css';

function Resultat() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/niveau`)
    .then((res)=>{
      setData(res.data)
      console.log(res)
    })
  }, []);

  return(
  <>
        <ul>
        {data.map((niveau) => {
          return(
            <li key={niveau.id}> <div className="niveau"> <Link to ={`/Resultat/Result/${niveau.niveau}/${niveau.id}`} className="link1"> {niveau.niveau} </Link> </div> </li>
          )
        })}
        </ul>    
  </>)
}

export default Resultat;
