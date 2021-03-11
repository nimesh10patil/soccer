import React, { useEffect, useState } from 'react'
import axios from "axios";

function Player(props) {
    const [Profile, setProfile] = useState()
    useEffect(() => {


        const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/players',
        params: {id: props.match.params.player_id, season: '2020'},
        headers: {
            'x-rapidapi-key': '43bcb52111msh8f02b2a97f0cda8p12d0cdjsna9f3d3e29c66',
            'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
        }
        };

        axios.request(options).then(function (response) {
            console.log(response.data.response[0]);
            setProfile(response.data.response[0])
        }).catch(function (error) {
            console.error(error);
        });

        
        return () => {
            
        }
    }, [])
    return (
        <div>
            {
                !Profile ? 'Loading . . .' :
                
                <div className="row">
                    <div className="col-12  col-sm-4">
                        <div className="card border-primary profile-card">
                            <div className="profile-div border-primary">
                                <img className="card-img-top profile" src={Profile.player.photo} alt="Card image cap"/>
                            </div>
                            <div className="card-body text-primary">
                            <h5 className="card-title">{Profile.player.name}</h5>
                            <p className="card-text">DOB: {Profile.player.birth.date} ({Profile.player.birth.place} / {Profile.player.birth.country} )</p>
                            <p className="card-text">{Profile.statistics[0].games.position} : {Profile.statistics[0].team.name}/{Profile.player.nationality}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-8 ">
                        <table className="table table-sm table-primary">
                            <thead className="thead-dark">
                                <tr>
                                    <th>League</th>
                                    <th>P</th>
                                    <th>G</th>
                                    <th>A</th>
                                    <th>C</th>
                                    <th>Y</th>
                                    <th>R</th>
                                </tr>

                            </thead>
                            <tbody>
                                {
                                    Profile.statistics.map((league,i)=>
                                    <tr key={i}>
                                        <td><span><img src={league.league.flag ? league.league.flag:league.league.logo} className="flag" alt=""/> <span>{league.league.name}</span></span></td>
                                        <td>{league.games.appearences ? league.games.appearences:'0'}</td>
                                        <td>{league.goals.total ? league.goals.total:'0'}</td>
                                        <td>{league.goals.assists ? league.goals.assists:'0'}</td>
                                        <td>{league.goals.conceded ? league.goals.conceded :'0'}</td>
                                        <td>{league.cards.yellow }</td>
                                        <td>{league.cards.red }</td>

                                    </tr>    
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            }
        </div>
    )
}

export default Player
