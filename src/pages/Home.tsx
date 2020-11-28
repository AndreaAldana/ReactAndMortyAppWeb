import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ItemsCarrousel from '../components/ItemsCarrousel';

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="jumbotron banner-bg">
        <div className="row">
          <div className="col-12 col-sm-8 col-md-5 my-5">
            <h1 className="display-4 text-white font-weight-bolder mb-4 wow fadeInUp" data-wow-delay="2s">Wanna know more about Rick And Morty?</h1>
            <p className="text-white mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quisquam quaerat accusantium eaque reprehenderit, sequi necessitatibus laborum tempore, eum praesentium beatae a ab nemo voluptates impedit provident debitis illo molestiae.</p>
            <Link className="btn btn-success" to="/register">Register to keep in touch</Link>
          </div>
          <div className="col-12 col-sm-4 col-md-5">
          </div>
        </div>
      </div>

      <ItemsCarrousel dataquery="https://rickandmortyapi.com/api/character/?page=1" title="Characters" routelink="detailCharacter" />
      <ItemsCarrousel dataquery="https://rickandmortyapi.com/api/episode/?page=1" title="Episodes" routelink="detailEpisode" />
      <ItemsCarrousel dataquery="https://rickandmortyapi.com/api/location/?page=1" title="Locations" routelink="detailLocation" />
    </div>
  );
}

export default Home; 