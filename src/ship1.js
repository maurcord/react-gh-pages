import React, {useState} from 'react'

const Ship1 = (props) => {
//console.log(props.name)
   
const showShipInformation =()=> {
 console.log(props.shipInfo)
}

return(
    <div onClick={showShipInformation}>
    <div>
        <p className='shipName'>
         Name:{props.shipInfo.name} 
        </p>
         <p>
         Model:{props.shipInfo.model}
         </p>
         <p>
         Passengers:{props.shipInfo.passengers}
         </p>
         <p>
         Length:{props.shipInfo.length}
         </p>
         <p>
         HyperDrive-Rating:{props.shipInfo.hyperdrive_rating}
         </p>
         <p>
         Crew:{props.shipInfo.crew}
         </p>
    </div>
    </div>
 )

}

export default Ship1;