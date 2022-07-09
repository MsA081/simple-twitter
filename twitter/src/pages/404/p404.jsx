import React from "react";
import useStyles from "../home/styles";
const Pagenotfound = () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <h1 style={{textAlign:"center"}}>Error 404</h1>
            <p style={{textAlign:"center"}}>page is not found</p>
        </div>
    );
}

export default Pagenotfound;