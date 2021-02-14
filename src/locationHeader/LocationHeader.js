import React from "react";
import "../locationHeader/LocationHeader.css";

const LocationHeader = ({ shelterAddress }) => {
  return (
    <div className="locationHeader">
      <h1>931 Yonge St, Toronto, ON M4W 2H2</h1>
      {/* <h1>{shelterAddress}</h1> */}
    </div>
  );
};

export default LocationHeader;
