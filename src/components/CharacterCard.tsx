import React from 'react';
import Character from '../interfaces/character';
import { Link } from 'react-router-dom'

type CharacterCardProps = { 
    character: Character,
    routelink: string
}

const CharacterCard = ({ character, routelink }: CharacterCardProps) => {
    return(
        <div className="card bg-dark text-white mr-4 position-relative">
            <img src={character.image ?? 'https://via.placeholder.com/100'} className="card-img" alt={character.name} />
            <div className="card-img-overlay card-overlay">
            </div>
            <Link to={`/${routelink}/${character.id}`}> 
                <div className="card-img-overlay">
                    <h5 className="card-title card-link">{character.name}</h5>
                </div>
            </Link>
        </div>
    )
}

export default CharacterCard;