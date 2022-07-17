import React, {useRef, useEffect, useState } from "react";
import {Button, Divider, Grid, IconButton, Typography } from "@material-ui/core";
import useStyles from "../styles"
import { Favorite } from "@material-ui/icons";
import axios from "axios";

const Twite = ({user}) => {
    const Rendertwite = (twite) => {return{__html : twite.replace(/#+([a-zA-Z0-9_]+)/ig,value =>`<a href='/hashtag/${value.substring(1)}'>${value}</a>`)}}
    const classes = useStyles();

    return(
        <div>
        {/* <div style={{backgroundColor:"white"}}>
        <Grid container alignItems="" className={classes.newtwite}>
            <img src="/images/logooo.png"/>
            <input className={classes.input} placeholder="توییت کن ..."/>
        </Grid>
        <Grid container direction="row-reverse">
            <Grid style={{margin:".5rem",borderRadius:".5rem"}}>
            <Button variant="contained" color="primary" >توییت</Button>
            </Grid>
            <IconButton>
            <img src="/images/logoooo.png" />
            </IconButton>
        </Grid>
        </div> */}
        <div style={{backgroundColor:"white",marginTop:".5rem"}}>
        {user.map((event) => 
        <Grid>
            <Grid container item className={classes.newtwite}>
                <img src={event.data.img}/>
                    <Typography style={{fontSize:'20',padding:"10px"}}>{event.data.name}</Typography>
                    <Typography style={{padding:"15px",color:'rgba(0,0,0,.38)',fontSize : ".75rem"}}>{event.data.id}</Typography>
                    <Grid container item className={classes.twite}>
                    <Typography dangerouslySetInnerHTML={Rendertwite(event.data.twite)}/>
                    </Grid>
            </Grid>
            <Grid container direction="row-reverse" alignItems="center">
                <IconButton>
                <img src="/images/logooooo.png" />
                </IconButton>
                <IconButton>
                <Favorite style={{color : "red"}}/>
                </IconButton>
                <Typography style={{fontSize:".8rem",color:'rgba(0,0,0,.38)',marginLeft:".5rem"}}>{event.data.number}</Typography>
            </Grid>
            <Divider/>
        </Grid>)}
        </div>
        </div>
    )
}

export default Twite;