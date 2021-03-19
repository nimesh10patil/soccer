import React, { useCallback,useMemo, useEffect, useState } from 'react'
import axios from "axios";
import FixtureCard from '../FixtureComponents/FixtureCard';
import { makeStyles,Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function formatDate(date) {
  console.log()
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [year, month, day].join('-');
}

const useStyles=makeStyles({
  
    date:{
        marginTop:20,
        backgroundColor:'#007BFF'
    }
})




function Matches({league_Id}) {

    const [fixtures, setfixtures] = useState([])
    const [date, setdate] = useState(new Date())
    const updateDate=(flag)=>{
      console.log(date)
      const newDate=new Date(date.getTime()+(86400000)*(flag? 1 : -1))
      
      //console.log(newDate)
      setdate(newDate)
      console.log(newDate)
    }
    
    const updateFixtures= () => {
        const options = {
          method: 'GET',
          url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
          params: {date:formatDate(date), league: league_Id, season: '2020'},
          headers: {
            'x-rapidapi-key': '43bcb52111msh8f02b2a97f0cda8p12d0cdjsna9f3d3e29c66',
            'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
          }
        };
        
        axios.request(options).then(function (response) {
          setfixtures(response.data.response)
          
          
        }).catch(function (error) {
          console.error(error);
        });
      }
    

    useEffect(() => {
      
  
      
      updateFixtures()
      return () => {
            
      }
    },[league_Id,date])

    const classes=useStyles()

    return (
        <div>
           
                
                <Grid container justify="center" spacing={2} alignItems="center" >
                  <Grid item  xs={12} md={10} >
                      <Card className={classes.date}>
                          <CardContent><span><ArrowBackIosIcon onClick={()=>updateDate(false)}/></span><span>{date.toString().slice(4,15npm )}</span><span><ArrowForwardIosIcon onClick={()=>updateDate(true)}/></span></CardContent>
                      </Card>
                  </Grid>
                  <Grid item  xs={12} md={10}>
                  {
                      fixtures.length==0 ? 'No game scheduled for today : (' :
                      fixtures.map(fixture=><FixtureCard key={fixture.fixture.id}  fixture={fixture}/>)
                  }

                  </Grid>
            </Grid>

            
            <div >
              
            </div>
            
        </div>
    )
}

export default Matches
