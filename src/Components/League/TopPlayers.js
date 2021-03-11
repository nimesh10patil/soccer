import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

function TopPlayers({league_Id}) {
    const [Players, setPlayers] = useState([])
    useEffect(() => {

        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/players/topscorers',
            params: {league: league_Id, season: '2020'},
            headers: {
              'x-rapidapi-key': '43bcb52111msh8f02b2a97f0cda8p12d0cdjsna9f3d3e29c66',
              'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
             setPlayers(response.data.response);
          }).catch(function (error) {
              console.error(error);
          });
        
        return () => {
            
        }
    },[league_Id])
    return (
        
            

<div className="container-fluid">
            
            <div className="row mt-1">

            </div>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                        

                    <table className="table table-sm">
                    <thead className="thead-dark">
                        <tr>
                        <th>Rank</th>
                        <th scope="col">Name</th>
                        <th scope="col">Goals</th>
                        <th scope="col">Assists</th>
                        <th scope="col">Played</th>

                        </tr>
                    </thead>
                    <tbody>
                    {
                        !Players ? 'Loading ...' :
                        Players.map((player,index)=>
                        <tr>
                            <td>{index+1}</td>
                            <td><div><span><img className="flag" src={player.player.photo} alt=""/></span><span><Link to={`/player/${player.player.id}`}>{player.player.name}</Link></span></div></td>
                            <td>{player.statistics[0].goals.total}</td>
                            <td>{player.statistics[0].goals.assists ? player.statistics[0].goals.assists:'0'}</td>
                            <td>{player.statistics[0].games.appearences}</td>
                        </tr>
                        )
                    }
                        
                    </tbody>
                    </table>
                </div>
                
            </div>
        </div>


       
    )
}

export default TopPlayers
