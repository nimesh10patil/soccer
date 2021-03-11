import React, { useEffect, useState } from 'react'
import axios from "axios";
import Fextures from './Fextures';
import Squad from './Squad';

function Team(props) {
    const [NextFiveFixtures, setNextFiveFixtures] = useState([])
    const [LastFiveFixtures, setLastFiveFixtures] = useState([])
    useEffect(() => {
        const getFixture=(which)=>{
            const options = {
                method: 'GET',
                url: `https://api-football-v1.p.rapidapi.com/v2/fixtures/team/${props.match.params.team_id}/${which}/5`,
                headers: {
                  'x-rapidapi-key': '43bcb52111msh8f02b2a97f0cda8p12d0cdjsna9f3d3e29c66',
                  'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
                }
              };
              
              axios.request(options).then(function (response) {
                console.log(response.data.api.fixtures);
                if(which=='next'){
                    setNextFiveFixtures(response.data.api.fixtures)
                }else{
                    setLastFiveFixtures(response.data.api.fixtures)
                }
                
              }).catch(function (error) {
                console.error(error);
              });
        }
        getFixture('next')
        getFixture('last')
        return () => {
            
        }
    },[props.match.params.team_id])

    return (
        <div className="container-fluid">
            
            <div>
           
           <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
                <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Fixtures</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Squad</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Top Players</a>
            </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <Fextures Features_list={LastFiveFixtures}/>
                <Fextures Features_list={NextFiveFixtures}/>
                </div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <Squad team_id={props.match.params.team_id}/>
                </div>
                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                    top players
                </div>
            </div>
        </div>
        </div>
    )
}

export default Team
