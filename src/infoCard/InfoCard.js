import "../infoCard/InfoCard.css";
import bed from "../images/bed.svg";

const InfoCard = ({
  shelterName,
  shelterType,
  shelterOccupancy,
  shelterCapacity,
  shelterLink,
}) => {


  return (
    <div className="infoCard">
      <div className="row justify-content-md-center">
        <div className="col-md-5 textGrid">
          <h1>{shelterName}</h1>
          <h1 className="shelterType">
            <b>{shelterType}</b>
          </h1>
        </div>
        <div className="col-md-5 occupancyGrid">
          <h3>Capacity: {shelterCapacity}</h3>
          <h3>Occupancy: <img src = {bed} class = {(shelterOccupancy == 3) ? 'occupancyred' : (shelterOccupancy == 3) ? 'occupancygreen' : 'occupancygray'}/>
          <img src = {bed} class = {(shelterOccupancy == 3) ? 'occupancyred' : (shelterOccupancy == 2) ? 'occupancygreen' : 'occupancygray'}/>
          <img src = {bed} class = {(shelterOccupancy == 3) ? 'occupancyred' : (shelterOccupancy == 3) ? 'occupancygreen' : 'occupancygray'}/>
           </h3>
          <button class="submitBtn">Location</button>

          {/* <a href="{shelterLink}">
                        <button>Open in Google Maps</button>
                    </a> */}
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
