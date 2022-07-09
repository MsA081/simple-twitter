import { Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "../home/styles";

const Header = ({hashtag}) => {
    const classes = useStyles()
    return (
        <div>
            <Grid item container direction="row" className={classes.header}>
                <img src="/images/logoo.png"/>
                <Typography style={{marginRight:".5rem"}}>
                {hashtag}
                </Typography>
            </Grid>
        </div>
    );
}

export default Header;