import { ButtonBase, Divider, Grid, Link, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import useStyle from './styles';
import Cookies from 'js-cookie';
import { useState } from "react";
import axios from "axios"
import Con from "../../pages/auth/authpage"

const Leftsidebar = ({user}) => {
    const classes = useStyle();
    const [run , setrun] = useState()
    axios.get("http://localhost:3001/lurol")
    .then((respons)=>{
        setrun(respons.data)
    })
    // const reguser = run.map((e)=>{return e.data}).join().split(",")
    // console.log(reguser)
    return (
        <div className={classes.root}>
            {Cookies.get("user") && <>
            <a href={`/user/${1}`}>
            <Grid container direction="row-reverse">
                <img src="/images/logooo.png" style={{width : 'max-content'}}/>
                <Grid item container direction="column"style={{width : 'max-content'}} className={classes.proftext}>
                    <Typography className={classes.profname}>
                        name
                    </Typography>
                    <Typography className={classes.profid}>
                        id
                    </Typography>
                </Grid>
            </Grid>
            </a>
            <Grid item container direction="column" className={classes.twitter}>
                <Typography className={classes.twittertitle}>
                    بهترین خبرنگاران
                </Typography>
                <Divider style={{marginRight:"-24px",marginLeft:"-24px"}}/>
                <div>
                    {user.map(event =>
                    <Link href={"/user/"+event.username}>
                        <Grid container direction="row"  style={{marginTop:".5rem",marginBottom:".5rem"}}>
                            <ButtonBase>
                            <img src="/images/logooo.png" style={{width : 'max-content'}}/>
                            <Grid item container direction="column"style={{width : 'max-content'}} className={classes.nameparent}>
                                <Typography className={classes.profname} direction="ltr">
                                    {event.username}
                                </Typography>
                                <Typography className={classes.profid} direction="ltr">
                                    {event.userid}
                                </Typography>
                            </Grid>
                            </ButtonBase>
                        </Grid>
                        </Link>
                        )}
                </div>
                <Divider style={{marginTop:".5rem"}}/>
            </Grid>
        </>}
        </div>
    );
}

export default Leftsidebar;