import { Grid, Typography } from "@material-ui/core";
import { Person } from "@material-ui/icons";
import React from "react";
import useStyles from "../home/styles";
const Header = ({user}) => {
    const classes = useStyles()
    return (
        <div>
            <Grid item container direction="row" className={classes.header} alignItems>
                <Person/>
                <Typography style={{marginRight:".5rem"}}>
                {user}
                </Typography>
            </Grid>
        </div>
    );
}

export default Header;