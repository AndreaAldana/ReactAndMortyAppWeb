import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import {useHistory} from 'react-router-dom';

const DetailEpisode = () => {

  const [data, setData] = useState({
    name: '',
    id: '',
    image: '',
    air_date: '',
    episode: ''
  });

  const [loading, setLoading] = useState(true)

  const history = useHistory();  

  const goBack = () => history.goBack();

  useEffect (() => {
    const fetchData = async () => {
      
      
      const result = await Axios.get(`https://rickandmortyapi.com/api/episode/${window.location.pathname.split('/')[2]}`);
    
      setData(result.data);
      setLoading(false);
      console.log(data)
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
                        <p className="card-text">Episode number: {data.episode}, Air date: {data.air_date}</p>
                        <p className="card-text">Gender: {data.name}</p>
                        <a href="#" onClick={goBack} className="btn btn-success">Go back</a>
                    </div>
                </div>
            </div>
          </div>
      </div>
  )
}

export default DetailEpisode;