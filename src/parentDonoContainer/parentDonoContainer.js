import '../parentDonoContainer/parentDonoContainer.css'
import DonoCard from '../donoCard/DonoCard'
import utensilsImg from '../images/utensils.svg'

const parentDonoContainer = ({shelterName, occupancy}) => {
    
    

    return(
        <div className="parentDonoContainer"> 
            <div className="row">
                <div className="col-md-3 textGrid offset-md-3">
                    <h1>{shelterName}</h1>
                </div>
                <div className="col-md-3 occupancyGrid">
                    <h3>Occupancy: </h3>
                    <h3>Capacity: </h3>
                    <button class="submitBtn" >Submit</button>
                </div>
            </div>
            <h3 style={{margin:"35px 0"}}> What Would you like to donate? </h3>

            <div className="row">
                <div className="col-md-4">
                    <DonoCard DonoColor="#7D9AFF" DonoText="Food" DonoImg={utensilsImg}/>
                </div>
                <div className="col-md-4">
                    <DonoCard DonoColor="#FFDD86" DonoText="Hygiene" DonoImg={utensilsImg}/>
                </div>
                <div className="col-md-4">
                    <DonoCard DonoColor="#FA8787" DonoText="Clothes" DonoImg={utensilsImg}/>
                </div>
                <div className="col-md-4 offset-md-2">
                    <DonoCard DonoColor="#7D9AFF" DonoText="Food" DonoImg={utensilsImg}/>
                </div>
                <div className="col-md-4">
                    <DonoCard DonoColor="#FFDD86" DonoText="Hygiene" DonoImg={utensilsImg}/>
                </div>

            </div>
        </div>
    )
}

export default parentDonoContainer;