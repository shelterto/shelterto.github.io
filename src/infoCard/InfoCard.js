import "../infoCard/InfoCard.css";

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
        <div className="col-md-3 textGrid">
          <h1>{shelterName}</h1>
          <h1 className="shelterType">
            <b>{shelterType}</b>
          </h1>
        </div>
        <div className="col-md-3 occupancyGrid">
          <h3>Occupancy: {shelterOccupancy}</h3>
          <h3>Capacity: </h3>
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
