import React, { useEffect, useState } from "react";
import Header from "./header"
import useStyles from "../home/styles";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Divider, Grid, IconButton, Typography } from "@material-ui/core";
import { Favorite } from "@material-ui/icons";

const Twitebyhashtag = () => {
    const Rendertwite = (twite) => {return{__html : twite.replace(/#+([a-zA-Z0-9_]+)/ig,value =>`<a href='/hashtag/${value.substring(1)}'>${value}</a>`)}}
    const classes = useStyles();
    const {hashtag} = useParams()
    const [user1,setuser1] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:3001/homeuser")
        .then((respons)=>{
            setuser1(respons.data)
        })
    },[])
    return(
        <div className={classes.root}>
            <Header hashtag={hashtag}/>
            <Divider style={{color:'#7EBAFF',filter:"opacity(.18)"}}/>
            <div style={{backgroundColor:"white",marginTop:".5rem"}}>
            {user1.map((event) => 
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
    );
}

export default Twitebyhashtag;