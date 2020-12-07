import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import {useHistory} from 'react-router-dom';
import { Link } from 'react-router-dom'

const DetailCharacter = () => {

  const [data, setData] = useState({
    name: '',
    id: '',
    image: '',
    gender: '',
    species: '',
    status: ''
  });
  const [loading, setLoading] = useState(true)


  const history = useHistory();  

  const goBack = () => history.goBack();
  

  useEffect (() => {
    const fetchData = async () => {
      
      
      const result = await Axios.get(`https://rickandmortyapi.com/api/character/${window.location.pathname.split('/')[2]}`);
    
      setData(result.data);
      setLoading(false);
      console.log(data)
    };

    fetchData();
  }, [])

  return (
    
        <div className="container mt-5">
          <div className="row">
            <div className="col-12 col-sm-6 offset-sm-3">
              <div className="card mb-3">
                <div className="row no-gutters">
                  <div className="col-md-5">
                    <img src={data.image} className="card-img" alt="..." />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h5 className="card-title">{data.name}</h5>
                      <p className="card-text">Species: {data.species}, Status: {data.status}</p>
                      <p className="card-text">Gender: {data.gender}</p>
                        <Link to="/" className="btn btn-success">Go back</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
                    {/* <h5 classNameName="card-title">{data.name}</h5> */}
      </div>
  )
}

export default DetailCharacter;