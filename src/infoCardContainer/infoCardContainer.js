import React, {useState, useEffect} from 'react';import '../infoCardContainer/infoCardContainer.css'
import InfoCard from '../infoCard/InfoCard'
import LocationHeader from "../locationHeader/LocationHeader"
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  InfiniteHits,
  Pagination,
  Highlight,
  ClearRefinements,
  RefinementList,
  Configure,
  connectSearchBox
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const searchClient = algoliasearch('A8LQ861XZY', '0b476f98a04f33f57d6f0b459a403111');
const SearchBox = ({ currentRefinement, isSearchStalled, refine }) => (
    <form noValidate action="" role="search" >
      <input
        class="searchBox"
        type="search"
        value={currentRefinement}
        onChange={event => refine(event.currentTarget.value)}
      />
      <button onClick={() => refine('')}>Reset query</button>
      {isSearchStalled ? 'My search is stalled' : ''}
    </form>
  );

const CustomSearchBox = connectSearchBox(SearchBox);

const mapStyles = {
    width: "643px",
    height: '100%',
  };

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
                    <CustomSearchBox />
                    <div className="infoCardContainer"  id="like-scroll">
                        <InfiniteHits hitComponent={Hit} />
                    </div>
                </div>
                </InstantSearch>
                </div>
            </div>
            <div col-md-6>
                    {/* <Map
                    google={this.propsgoogle}
                    zoom={8}
                    style={mapStyles}
                    initialCenter={{ lat: 47.444, lng: -122.176}}
                    /> */}
                    <LocationHeader shelterAddress={address} />
            </div>
        </div>
    </div>
    )
}

// export default InfoCardContainer;

export default GoogleApiWrapper({
    apiKey: 'TOKEN HERE'
  })(InfoCardContainer);