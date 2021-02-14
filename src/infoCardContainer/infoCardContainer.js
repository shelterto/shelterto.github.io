import React, {useState, useEffect} from 'react';import '../infoCardContainer/infoCardContainer.css'
import InfoCard from '../infoCard/InfoCard'
import LocationHeader from "../locationHeader/LocationHeader"
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
  ClearRefinements,
  RefinementList,
  Configure,
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';

const searchClient = algoliasearch('A8LQ861XZY', '0b476f98a04f33f57d6f0b459a403111');

const InfoCardContainer = () => {
    const [items, setItems] = useState([]);
    const [address, setAddress] = useState("Please select a location");

    useEffect (() => {
        const fetchData = async () => {
          const response = await fetch("https://jsonplaceholder.typicode.com/comments");
          const data = await response.json();
          setItems(data)   
        };
        fetchData();
        console.log(items)
      },[])

      const changeLocationHeader = (address) => {
        setAddress(address);
        console.log(address)
    }

    function Hit(props) {
        return (  
          <div className="infoCardContainer"  id="like-scroll">
            <InfoCard key={props.hit.objectID} shelterName={props.hit.FACILITY_NAME} shelterType={props.hit.SECTOR} shelterOccupancy={props.hit.OCCUPANCY} shelterCapacity={props.hit.CAPACITY} onClick={() => changeLocationHeader(props.hit.SHELTER_ADDRESS
        )}/>
          </div>
        );
      }
      
      Hit.propTypes = {
        hit: PropTypes.object.isRequired,
      };

    return(
    <div>
        <div className="row">
            <div col-md-6>
                <div className="ais-InstantSearch">
                <InstantSearch indexName="demo_geo_3" searchClient={searchClient}>
                <div className="right-panel">
                    <SearchBox />
                    <div className="infoCardContainer"  id="like-scroll">
                        <Hits hitComponent={Hit} />
                    </div>
                </div>
                </InstantSearch>
                </div>
            </div>
            <div col-md-6>
                    <LocationHeader shelterAddress={address} />
            </div>
        </div>
    </div>

       
    )
}



export default InfoCardContainer;