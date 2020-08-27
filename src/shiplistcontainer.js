import React from 'react'
import Ship1 from './ship1.js';
import Ship2 from './ship2.js';
import Ship3 from './ship3.js';
import Ship4 from './ship4.js'
import InfoContainer from './infocontainer.js';

function ShipListContainer() {
    return(
    <> 
    <div className='shipContainer'>
        <Ship1 />
        <Ship2 />
        <Ship3 />
        <Ship4 /> 
     </div>
     
     <div>
         <InfoContainer />
     </div>
     </>
    )
}

export default ShipListContainer;