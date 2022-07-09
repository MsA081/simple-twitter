import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import { ButtonBase, Grid, Link, Typography } from "@material-ui/core";
import axios from "axios"
import Cookies from 'js-cookie'

const Rightsidebar = ({hashtagtitle}) => {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            {Cookies.get("user") && <>
            <Grid container direction="row" alignItems="center">
                <Grid>
                <a href="/">
                <img src="/images/logo.png"/>
                </a>
                </Grid>
                <Grid>
                <Link href="/">
                <Typography className={classes.logotype}>
                    توییتر فارسی
                </Typography>
                </Link>
                </Grid>
                
                <Typography className={classes.hashtagtitle}>
                    داغ ترین هشتگ ها
                </Typography>
                <Grid container direction="column" alignItems="center">
                    {hashtagtitle.map(title => 
                    <ButtonBase className={classes.hash}>
                    <Link style={{width:'100%',color:"unset"}} href={"/hashtag/"+title}>
                    <Grid item container>
                        <img src="/images/logoo.png"/>
                        <Typography className={classes.hashtag}>
                            {title}
                        </Typography>
                    </Grid>
                    </Link>
                    </ButtonBase>)}
                </Grid>
            </Grid>
            </>}
            </div>
    );
};

export default Rightsidebar;