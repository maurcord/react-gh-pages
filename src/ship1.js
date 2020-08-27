import React, {useState} from 'react'


const Ship1 = ({name}) => {
const [model, setModel] = useState('')
    fetch(`https://swapi.dev/api/starships/${name}`)
    .then(res=> res.json)
    .then(starwarsResponse => {
        console.log(starwarsResponse);
        const {model} = starwarsResponse[0];
        console.log(model);
        setModel(model)
    })

return(
    <div>
        
        <p>
            Name: {name}
            Model: {model}      
        </p>
    </div>
 )

}

export default Ship1;