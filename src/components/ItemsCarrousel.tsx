import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import CharacterCard from './CharacterCard';
import Loader from './Loader';


const ItemsCarrousel = ({ dataquery, title, routelink }: any) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState([])


  const sliderSettings = {
    dots: true,
    slidesToShow: 5.5,
    slidesToScroll: 4,
    autoplay: false,
    arrows: true,
    infinite: false
  }

  useEffect (() => {
    const fetchData = async () => {
      console.log(dataquery);
      const result = await Axios.get(dataquery);

      setData(result.data["results"]);
      setIsLoading(false);
    };

    fetchData();
  }, [dataquery])

  React.useMemo(
    () => {
        const result:any = data.filter((dat:any) => {
            return query === '' ? data : dat.name
                .toLowerCase()
                .includes(query.toLowerCase());
        })
        setFilteredData(result)
    }, [data, query]
    );

  return (
    
    <div className="row mt-4">
      <div className="col-12 px-4">
        <div className="d-flex justify-content-between mb-2">
          <h4 className="text-white">{title}</h4>
          <div className="d-flex">
            <div className="input-group search-input-container d-flex align-items-center input-group-sm">
              <FontAwesomeIcon icon={faSearch} className="" color="#969696" />
              <input value={query} onChange={(e) => { setQuery(e.target.value)}} type="text" className="form-control search-input"
               placeholder="Search"/>
            </div>
          </div>
        </div>

        {isLoading ? (
          <Loader /> ) : 
          (<Slider {...sliderSettings}>
            { filteredData.map((item: any) => {
              return (
                <CharacterCard key={item.id} character={item} routelink={routelink} />)
              })
            }
          </Slider>)
        }
      </div>
    </div>
  )
    
}

export default ItemsCarrousel;