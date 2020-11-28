import React from 'react';
import Location from '../interfaces/location';
import { Link } from 'react-router-dom'

type LocationCardProps = { 
  location: Location
}
const LocationCard = ({ location }: LocationCardProps) => {
    return( 
            <div>
              <Link to={`/DetailLocation/${location.id}`}>
              <div className="card bg-dark text-white m-4">
                  <img src="https://via.placeholder.com/100" className="card-img-top" alt={location.name}/>
                <div className="card-body">
                  <h6 className="text-center">{location.name}</h6>           
                </div>
              </div>
              </Link>
            </div>)
}

export default LocationCard;