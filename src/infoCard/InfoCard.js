import "../infoCard/InfoCard.css";
import bed from "../images/bed.svg";

const InfoCard = ({
  shelterName,
  shelterType,
  shelterOccupancy,
  shelterCapacity,
  onClick,
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
          <h3>Occupancy: <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bed" class="svg-inline--fa fa-bed fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" color = {(shelterOccupancy == 3) ? 'red' : ((shelterOccupancy == 1) ? 'green' : 'gray')} width = "34" height = "34" viewBox="0 0 640 512"><path fill={(shelterOccupancy == 3) ? 'red' : ((shelterOccupancy == 1) ? 'green' : 'gray')} d="M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112z"></path></svg>
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bed" class="svg-inline--fa fa-bed fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" color = {(shelterOccupancy == 3) ? 'red' : ((shelterOccupancy == 2) ? 'yellow' : 'gray')} width = "34" height = "34" viewBox="0 0 640 512"><path fill={(shelterOccupancy == 3) ? 'red' : (shelterOccupancy == 1) ? 'green' : 'gray'} d="M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112z"></path></svg>
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bed" class="svg-inline--fa fa-bed fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" color = {(shelterOccupancy == 3) ? 'red' : ((shelterOccupancy == 3) ? 'red' : 'gray')} width = "34" height = "34" viewBox="0 0 640 512"><path fill={(shelterOccupancy == 3) ? 'red' : (shelterOccupancy == 1) ? 'green' : 'gray'} d="M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112z"></path></svg>
           </h3>
           <button class="submitBtn" onClick={onClick}>Location</button> 
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
