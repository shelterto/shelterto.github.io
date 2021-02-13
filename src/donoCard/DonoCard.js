import '../donoCard/DonoCard.css'

const DonoCard = ({DonoText, DonoColor, DonoImg}) => {
    

    return(
        <button className="donoCard" style={{backgroundColor: DonoColor}}> 
            <h1> {DonoText}  </h1>
            <img className = 'donoImg' src={DonoImg} />
        </button>
    )
}

export default DonoCard;