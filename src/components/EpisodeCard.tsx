import React, { useState }  from 'react';
import Episode from '../interfaces/episode';
import { Link } from 'react-router-dom';


type EpisodeCardProps = { 
    episode: Episode
}


const EpisodeCard = ({ episode }: EpisodeCardProps) => {


    return( 
            <div>
              <Link to={`/DetailEpisode/${episode.id}`}>
              <div className="card bg-dark text-white m-4">
                  <img src="https://via.placeholder.com/100" className="card-img-top" alt={episode.name}/>
                <div className="card-body">
                  <h6 className="text-center">{episode.name}</h6>           
                </div>
              </div>
              </Link>
            </div>)
}

export default EpisodeCard;