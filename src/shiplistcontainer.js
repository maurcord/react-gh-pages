import React from 'react'
import Ship1 from './ship1.js';
// import InfoContainer from './infocontainer.js';

function ShipListContainer(props) { 
   let shipList = props.listOfShips
   console.log(shipList)

    return(
    <> 
    <div className='shipContainer'>
        {shipList.map ((ship) => {   
        return(

        <Ship1 shipInfo={ship}/>
            
        )
        } )}
    
        
     </div>
     
     {/* <div>
         <InfoContainer />
     </div> */}
     </>
    )
}

export default ShipListContainer;