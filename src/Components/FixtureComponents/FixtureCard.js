import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardHeader, Grid } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      width: 'calc(90%)',
      marginTop:'calc(2%)',
     justifyContent:'center'
      
    },
    content:{
        alignContent:'center',
        alignSelf:'center'
    },
    status:{
        backgroundColor:'#007BFF',
        width:'calc(60%)',
        height:'calc(80%)',
        alignSelf:'center'
        
    }
  });

const getDate=(date)=>{
    return `${(new Date(date).getHours())%24}:${new Date(date).getMinutes()==0 ?'00':(new Date(date).getMinutes())%60}`
    
}
function FixtureCard({fixture}) {
    const theme = useTheme();
    
    const classes=useStyles()
    return (
        <>

                    <Card >
                        
                        <CardContent className={classes.content} >


                            <Grid container direction="row"  justify="flex-start" style={{marginLeft:2}} wrap spacing={useMediaQuery(theme.breakpoints.up('sm'))?2:5}>
                                
                                    <Grid item  xs={2} className={classes.status}>
                                                
                                                {getDate(fixture.fixture.date)}
                                        
                                    </Grid>
                                    <Grid item xs={10} sm={8}>

                                            <Grid container  direction={useMediaQuery(theme.breakpoints.up('sm'))?'row':'column'}  justify="center" spacing={2}>
                                                    <Grid item >
                                                        <Grid  container spacing={2}  justify="flex-end" direction={useMediaQuery(theme.breakpoints.up('sm'))?'row':'row-reverse'} >
                                                            <Grid item>
                                                                {fixture.teams.home.name}
                                                            </Grid>
                                                            <Grid item>
                                                            {  fixture.fixture.status?.short=='FT'? fixture.score.fulltime.home  : <img src={fixture.teams.home.logo}  className="flag" alt=""/> }
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>

                                                    {
                                                        useMediaQuery(theme.breakpoints.up('sm')) &&
                                                        <Grid item >
                                                        - 
                                                        </Grid>
                                                    }
                                                
                                                    <Grid item >
                                                        
                                                            <Grid container justify="start" spacing={2} direction="row">
                                                                <Grid item>
                                                                { fixture.fixture.status?.short=='FT'? fixture.score.fulltime.away  : <img src={fixture.teams.away.logo}  className="flag" alt=""/> }
                                                                </Grid>
                                                                <Grid item>
                                                                    {fixture.teams.away.name}
                                                                </Grid>
                                                            </Grid>
                                                        
                                                    </Grid>
                                                    
                                                
                                            </Grid>

                                    </Grid>

                                    
                            </Grid>

                        </CardContent>
                        
                    </Card>
        </>
                
    )
}

export default FixtureCard
