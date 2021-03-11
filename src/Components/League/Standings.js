import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

function Standings({league_Id}) {
    const [leagueTable, setleagueTable] = useState([])
    
    
    useEffect(() => {
        
        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/standings',
            params: {season: '2020', league: league_Id},
            headers: {
              'x-rapidapi-key': '43bcb52111msh8f02b2a97f0cda8p12d0cdjsna9f3d3e29c66',
              'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
            }
          };
        axios.request(options).then(function (response) {
            console.log(response.data.response[0].league.standings[0])
            setleagueTable(response.data.response[0].league.standings[0])
        }).catch(function (error) {
            console.error(error);
        });
        return () => {
            
        }
    },[league_Id])

    return (

        <div className="container-fluid">
            
            <div className="row mt-1 justify-content-center text-primary">
                {leagueTable[0]?.group}
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                        

                    <table className="table table-sm">
                    <thead className="thead-dark">
                        <tr>
                        <th>Rank</th>
                        <th scope="col">team</th>
                        <th scope="col">Played</th>
                        <th scope="col">Won</th>
                        <th scope="col">Lost</th>
                        <th scope="col">For</th>
                        <th scope="col">Against</th>
                        <th scope="col">GD</th>
                        <th scope="col">PTS</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        !leagueTable ? 'Loading ...' :
                        leagueTable.map(team=><tr key={team.rank}>
                            <td>{team.rank}</td>
                            <td><div><span><img className="flag" src={team.team.logo} alt=""/></span><span><Link to={`/team/${team.team.id}`}>{team.team.name}</Link></span></div></td>
                            <td>{team.all.played}</td>
                            <td>{team.all.win}</td>
                            <td>{team.all.lose}</td>
                            <td>{team.all.goals.for}</td>
                            <td>{team.all.goals.against}</td>
                            <td>{team.goalsDiff}</td>
                            <td>{team.points}</td>
                        </tr>)
                    }
                        
                    </tbody>
                    </table>
                </div>
                
            </div>
        </div>
    )
}

export default Standings
