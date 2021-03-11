import React, { useEffect, useState } from 'react'
import axios from "axios";
import {Link} from 'react-router-dom'
function Leagues() {
    const [leagues, setleagues] = useState([])
    
    useEffect(() => {
        
        const ids=[61,39,78,140,135]
        const l=[]
        ids.forEach(i=>{
            
              const options = {
                method: 'GET',
                url: 'https://api-football-v1.p.rapidapi.com/v3/leagues',
                params: {id: i},
                headers: {
                  'x-rapidapi-key': '43bcb52111msh8f02b2a97f0cda8p12d0cdjsna9f3d3e29c66',
                  'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
                }
              };
            axios.request(options).then(function (response) {
                const LL={
                    league_id:response.data.response[0].league.id,
                    name:response.data.response[0].league.name,
                    flag:response.data.response[0].country.flag,
                }
                setleagues(pre=>[...pre,LL])
                
            
            }).catch(function (error) {
                console.error(error);
            });

        })
       
        
        

        return () => {
    
        }
    }, [])

    return (
        <>

                        {/* <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a> */}
                        {
                            leagues? leagues.map(l=>
                                <Link key={l.league_id} className="dropdown-item" to={`/leagues/${l.league_id}`}><span><img className="flag" src={l.flag} alt=""/></span>{l.name}<span></span></Link>
                            ) : ''
                        }
            
        </>
    )
}

export default Leagues
