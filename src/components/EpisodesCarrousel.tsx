import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import Episode from '../interfaces/episode';
import EpisodeCard from './EpisodeCard';
import Loader from './Loader';


const EpisodesCarrousel = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [filteredEpisodes, setFilteredEpisodes] = useState([])

  const sliderSettings = {
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: false,
    arrows: true,
    centerPadding: '12px',
    infinite:false
  }

  useEffect (() => {
    const fetchData = async () => {
      const result = await Axios.get("https://rickandmortyapi.com/api/episode/?page=1");
      
      console.log(result);
      setData(result.data["results"]);
      setFilteredEpisodes(result.data["results"]);
      setIsLoading(false);
    };

    fetchData();
  }, []);


 
  React.useMemo(
    () => {
        const result:any = data.filter((dat:any) => {
            return query === '' ? data : dat.name
                .toLowerCase()
                .includes(query.toLowerCase());
        })
        setFilteredEpisodes(result)
    }, [data, query]
    );


  return (
    <div>
      
    <div className="row">
      <div className="col-12">
      <ul className="list-unstyled" >
        <div className="form-group">
            <label>Filter Episodes</label>
            <input value={query}
                onChange={(e) => { setQuery(e.target.value) }}
                type="text"
                className="form-control" />
        </div>
        </ul>
        <h4 style={{color:"white"}}>Episodes</h4>
        
          {isLoading ? (
            <Loader/>
          ) :
          (
            <Slider {...sliderSettings}>
              {
                filteredEpisodes.map((episode: any) => {
                  return(
                    <EpisodeCard key={episode.id} episode={episode} />
                  )
                }) 
              }
            </Slider>
            
          ) 
        }
      </div>
    </div>
    </div>
  )
    
}


export default EpisodesCarrousel;