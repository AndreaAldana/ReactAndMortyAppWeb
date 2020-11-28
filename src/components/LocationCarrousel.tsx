import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import Loader from './Loader';
import LocationCard from './LocationCard';



const LocationCarrousel = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [filteredLocation, setFilteredLocation] = useState([])


  const sliderSettings = {
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: false,
    arrows: true,
    centerPadding: '12px',
    infinite: false
  }

  useEffect (() => {
    const fetchData = async () => {
      const result = await Axios.get("https://rickandmortyapi.com/api/location/?page=1");
      
      console.log(result);
      setData(result.data["results"]);
      setIsLoading(false);
    };

    fetchData();
  }, [])

  React.useMemo(
    () => {
        const result:any = data.filter((dat:any) => {
            return query === '' ? data : dat.name
                .toLowerCase()
                .includes(query.toLowerCase());
        })
        setFilteredLocation(result)
    }, [data, query]
    );

  return (
     <div className="row">
      <div className="col-12">
      <ul className="list-unstyled" >
        <div className="form-group">
            <label>Filter Locations</label>
            <input value={query}
                onChange={(e) => { setQuery(e.target.value) }}
                type="text"
                className="form-control" />
        </div>
        </ul>
       <h4 style={{color:"white"}}>Locations</h4>
      
        {isLoading ? (
          <Loader/>
        ) :
        (
          <Slider {...sliderSettings}>
            {
              filteredLocation.map((location: any) => {
                return(
                  <LocationCard key={location.id} location={location} />
                )
              }) 
            }
          </Slider>
        ) 
      }
    </div>
  </div>
  )
    
}

export default LocationCarrousel;