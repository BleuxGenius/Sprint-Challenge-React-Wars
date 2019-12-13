import React, {useState, useEffect} from "react";
import axios from "axios";
import StarWarCards from "./StarWarCards"


function StarWarsList (){
    const [cards, setCards] = useState([]);

    useEffect(() => {
        axios.get("https://swapi.co/api/people/")
        .then(response => {
            const characterData = response.data.results;
            setCards(characterData);
        })
        .catch(error => {
            console.log('No response', error)
        })
    }, []);

    return(
        <div className="container">
        <div className='people'>
            {cards.map((card, index) => {
                return(
                    <StarWarCards
                    key={index}
                    name = {card.name}
                    birth_year = {card.birth_year}
                    eye_color = {card.eye_color}
                    gender = {card.gender}
                    created = {card.created}
                    />
                )
            })
            }
   </div>
   </div>
    )
        }
        export default StarWarsList
