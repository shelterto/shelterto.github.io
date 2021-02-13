import React from "react";
import "../locationHeader/LocationHeader.css";

const LocationHeader = ({ shelterAddress }) => {
  return (
    <div className="locationHeader">
      <h1>{shelterAddress}</h1>
    </div>
  );
};

export default LocationHeader;
