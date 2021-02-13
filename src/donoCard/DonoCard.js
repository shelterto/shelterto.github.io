import '../donoCard/DonoCard.css'

const DonoCard = ({DonoText, DonoColor, DonoImg}) => {
    

    return(
        <button type="button" class="btn donoCard" style={{backgroundColor:DonoColor}}>
            <h1> {DonoText}  </h1>
            <img className = 'donoImg' src={DonoImg}></img>
        </button>
    );
       
}

export default DonoCard;