import React, { useEffect } from 'react'
import axios from "axios";

function Matches({league_Id}) {
    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v2/fixtures/league/2/next/5',
            headers: {
              'x-rapidapi-key': '43bcb52111msh8f02b2a97f0cda8p12d0cdjsna9f3d3e29c66',
              'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
            console.log(response.data);
          }).catch(function (error) {
            console.error(error);
          });
        return () => {
            
        }
    })
    return (
        <div>
            matches
        </div>
    )
}

export default Matches
