import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import {Link, useHistory} from 'react-router-dom';

const DetailLocation = () => {

  const [data, setData] = useState({
    name: '',
    id: '',
    type: '',
    dimension: ''
  });

  const [loading, setLoading] = useState(true)

  const history = useHistory();  

  const goBack = () => history.goBack();

  useEffect (() => {
    const fetchData = async () => {
      
      
      const result = await Axios.get(`https://rickandmortyapi.com/api/location/${window.location.pathname.split('/')[2]}`);
    
      setData(result.data);
      setLoading(false);
    };

    fetchData();
  }, [])

  return (
          <div className="container mt-5" style={{display:"flex", alignItems:"center", justifyContent:"space-around"}}>
            <div className="row">
              <div className="col-12">
                 <div className="card text-center" style={{width:"18rem"}}>
                     <div className="card-body">
                        <h5 className="card-title">{data.name}</h5>
                        <p className="card-text">Dimension: {data.dimension}</p>
                        <p className="card-text">Typer: {data.type}</p>
                        <Link to="/" className="btn btn-success">Go back</Link>
                    </div>
                </div>
            </div>
          </div>
      </div>
  )
}

export default DetailLocation;