import React from 'react'
import Leagues from './League/Leagues'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import LeagueDetails from './League/LeagueDetails'
import Team from './League/Team'
import Player from './Player/Player'
const x=0
function Home() {
    return (
        <div>
            <Router>
            <nav className="navbar navbar-expand-xs navbar-light bg-light">
                <a className="navbar-brand" href="#">My Football Arena</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    
                    
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Leagues
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        
                            <Leagues/>
                        </div>
                    </li>
                    
                    </ul>
                    
                </div>
            </nav>
            <Route path="/leagues/:league_id" component={LeagueDetails}></Route>
            <Route path="/team/:team_id" component={Team}></Route>
            <Route path="/player/:player_id" component={Player}></Route>
            </Router>
        </div>
    )
}

export default Home
