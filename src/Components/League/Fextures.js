import React from 'react'
import { Link } from 'react-router-dom'

function Fextures({Features_list}) {
    
    return (
        <div className="container-fluid">
            
        {
            !Features_list ? '' :
            Features_list.map(fixture=>
                <div className="d-flex flex-row mt-2" key={fixture.fixture_id}>
                    
                    <div>
                    
                            {fixture.status=='Match Finished' ? 'FT' : `${fixture.event_date.slice(5,7)}/${fixture.event_date.slice(8,10)}`}
                
                        
                    </div>
                    <div className="d-flex flex-xs-column ml-3">
                        <span><Link to={`/team/${fixture.homeTeam.team_id}`}>{fixture.homeTeam.team_name}</Link></span>
                        <span className="ml-2">{fixture.status=='Match Finished' ? fixture.goalsHomeTeam :<img src={fixture.homeTeam.logo} className="flag" alt=""/>}</span>
                        <span className="ml-2">-</span>
                        <span className="ml-2">{fixture.status=='Match Finished' ? fixture.goalsAwayTeam : <img src={fixture.awayTeam.logo} className="flag" alt=""/>}</span>
                        <span className="ml-2"><Link to={`/team/${fixture.awayTeam.team_id}`}>{fixture.awayTeam.team_name}</Link></span>
                        <span className="ml-1"><img src={fixture.league.logo} className="flag" alt=""/></span>
                    </div>
                    <hr/>
                </div>
                )
        }
        
        
    </div>
    )
}

export default Fextures
