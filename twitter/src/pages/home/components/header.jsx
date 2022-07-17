import { Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "../styles";
import { Home } from "@material-ui/icons";
import Cookies from 'js-cookie'

const Header = (title,icon) => {
    const classes = useStyles()

    const Logout = () => {
        Cookies.remove("user")
    }

    return (
        <div>
            <Grid item container direction="row" className={classes.header}>
            {Cookies.get("user") &&
            <Grid item container>
                <Home/>
                <Typography style={{marginRight:".5rem"}}>
                خانه
                </Typography></Grid>}
                <Grid item container direction="row-reverse">
                    <a href="http://localhost:3000/login">ورود / ثبت نام</a>
                </Grid>
                {Cookies.get("user") &&
                    <Grid item container direction="row">
                    <button onClick={Logout}>
                        <a href="http://localhost:3000/login">خروج</a>
                    </button>
                </Grid>}
            </Grid>
        </div>
    );
}

export default Header;