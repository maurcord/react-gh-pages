import React, {useState} from 'react'


const Ship1 = (props) => {
console.log(props.name)
   
const showShipInformation =()=> {
 console.log(props.shipInfo)
}

return(
    <div onClick={showShipInformation}>
    <div>
        <p>
         Ship:{props.shipInfo.name} 
        
        </p>
    </div>
    </div>
 )

}

export default Ship1;