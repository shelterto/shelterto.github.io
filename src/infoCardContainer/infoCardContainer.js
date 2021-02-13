import React from 'react';
import '../infoCardContainer/infoCardContainer.css'
import InfoCard from '../infoCard/InfoCard'

const infoCardContainer = () => {
    return(
        <div className="infoCardContainer" id="like-scroll">
            <InfoCard shelterName="Toronto Community Center" shelterType="Women" shelterOccupancy="1050" shelterCapacity="2000"/>
            <InfoCard shelterName="Toronto Community Center" shelterType="Women"/>
            <InfoCard shelterName="Toronto Community Center" shelterType="Women"/>
            <InfoCard shelterName="Toronto Community Center" shelterType="Women"/>
        </div>
    )

}

export default infoCardContainer;