import React from 'react';
import '../infoCardContainer/infoCardContainer.css'
import InfoCard from '../infoCard/InfoCard'

const infoCardContainer = () => {
    return(
        <div className="infoCardContainer" id="like-scroll">
            <InfoCard shelterName="Kevins sintky home arlene hnds " shelterType="Women" shelterOccupancy="10" shelterCapacity="2000"/>
            <InfoCard shelterName="Toronto Community Center" shelterType="Women" shelterOccupancy="10" shelterCapacity="2000"/>
            <InfoCard shelterName="Toronto Community Center" shelterType="Women" shelterOccupancy="10" shelterCapacity="2000"/>
            <InfoCard shelterName="Toronto Community Center" shelterType="Women" shelterOccupancy="10" shelterCapacity="2000"/>
        </div>
    )

}

export default infoCardContainer;