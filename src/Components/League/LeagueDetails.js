
import React, { useEffect, useState } from 'react'
import Matches from './Matches'
import Standings from './Standings'
import TopPlayers from './TopPlayers'
function LeagueDetails(props) {
    const [leagueId, setleagueId] = useState()
    useEffect(() => {
        setleagueId(props.match.params.league_id)
        console.log("league details",leagueId)
        return () => {
            
        }   
    })
    return (
        <>
            
            <div className="row justify-content-start">
                <div className="col-12 justify-content-center">
                    <div className="row justify-content-center m-0">
                        <div className="col-12 ">
                            <ul className="nav  nav-pills justify-content-center " id="pills-tab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Standings</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Matches</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Top Players</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                                {leagueId ? <Standings league_Id={leagueId}/> : 'Loading details'} 
                                        </div>
                                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                                {leagueId ? <Matches league_Id={leagueId}/> : 'Loading details'} 
                                        
                                        </div>
                                        <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                            {leagueId ? <TopPlayers league_Id={leagueId}/> : 'Loading details'} 
                                    
                                        </div>
                            </div>
                        </div>
                    </div>
                
                            
                        </div>
            
            </div>
           
        
        
        </>
    )
}

export default LeagueDetails
