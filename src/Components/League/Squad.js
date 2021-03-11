import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

function Squad({team_id}) {

    const [Attackers, setAttackers] = useState([])
    const [Midefielders, setMidefielders] = useState([])
    const [Defenders, setDefenders] = useState([])
    const [GoalKeepers, setGoalKeepers] = useState([])
    const [Manager, setManager] = useState()
    
    useEffect(() => {
        
        
        
        const options = {
            method: 'GET',
            url: `https://api-football-v1.p.rapidapi.com/v2/players/squad/${team_id}/2020-2021`,
            headers: {
              'x-rapidapi-key': '43bcb52111msh8f02b2a97f0cda8p12d0cdjsna9f3d3e29c66',
              'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function  (response) {
            console.log(response.data.api);
             const attacker=[]
             const defenders=[]
             const midfielders=[]
             const gks=[]

            response.data.api.players.forEach(player => {
                switch (player.position) {
                    case 'Attacker':
                        attacker.push(player)
                        break;
                    case 'Defender':
                        defenders.push(player)
                        break
                    case "Midfielder":
                        midfielders.push(player)
                        break
                    case 'Goalkeeper':
                        gks.push(player)
                        break
                    default:
                        break;
                }
            });
            setAttackers(attacker)
            setDefenders(defenders)
            setMidefielders(midfielders)
            setGoalKeepers(gks)
            
          }).catch(function (error) {
            console.error(error);
          });

          const options_manager = {
            method: 'GET',
            url: `https://api-football-v1.p.rapidapi.com/v2/coachs/team/${team_id}`,
            headers: {
              'x-rapidapi-key': '43bcb52111msh8f02b2a97f0cda8p12d0cdjsna9f3d3e29c66',
              'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
            }
          };
          
          axios.request(options_manager).then(function (response) {
              //console.log(response.data.api.coachs[0])
              setManager(response.data.api.coachs[0])
          }).catch(function (error) {
              console.error(error);
          });

        return () => {
            
        }
    }, [team_id])
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                
                <div className="d-flex flex-column">
                    
                
                <div>
                    Attackers
                </div>
                <div className="d-flex flex-row flex-wrap justify-content-center">
                    {
                        !Attackers?'':
                        Attackers.map(player=><div className="p-2" key={player.player_id}>
                            <Link to={`/player/${player.player_id}`}>{player.player_name}</Link>
                        </div>)
                    }
                </div>
                <div className="p-2">
                    Midfielders
                </div>
                <div className="d-flex flex-row flex-wrap justify-content-center">
                    {
                        !Midefielders?'':
                        Midefielders.map(player=><div className="p-2" key={player.player_id}>
                            <Link to={`/player/${player.player_id}`}>{player.player_name}</Link>
                        </div>)
                    }
                </div>
                <div className="p-2">
                Defenders
                </div>
                <div className="d-flex flex-row flex-wrap justify-content-center">
                    {
                        !Defenders?'':
                        Defenders.map(player=><div className="p-2" key={player.player_id}>
                            <Link to={`/player/${player.player_id}`}>{player.player_name}</Link>
                        </div>)
                    }
                </div>
                <div className="p-2">
                Goal Keepers
                </div>
                <div className="d-flex flex-row flex-wrap justify-content-center">
                    {
                        !GoalKeepers?'':
                        GoalKeepers.map(player=><div className="p-2" key={player.player_id}>
                            <Link to={`/player/${player.player_id}`}>{player.player_name}</Link>
                        </div>)
                    }
                </div>
                <div className="p-2">
                    Manager : {Manager? Manager.name : ''}
                </div>
                </div>
            </div>
        </div>
    )
}

export default Squad
