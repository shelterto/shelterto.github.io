import '../infoCard/InfoCard.css'

const InfoCard = ({text},{color}) => {
    

    return(
        <div className="infoCard"> 
            <h1> Hello World  </h1>
            <h1> {text}  </h1>
        </div>
    )
}

export default InfoCard;