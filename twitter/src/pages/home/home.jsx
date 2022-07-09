import React, { useEffect, useState } from "react";
import useStyle from "./styles"
import Header from "./components/header"
import Newtwite from "./components/newtwite"
import Twite from "./components/twite"
import { Divider, Grid } from "@material-ui/core";
import axios from "axios";
import Cookies from 'js-cookie'

const Home = () => {
    const classes = useStyle();
    const [user1,setuser1] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:3001/homeuser")
        .then((respons)=>{
            setuser1(respons.data)
        })
    },[])
    return (
        <div className={classes.root}>
            <Header/>
            <Divider style={{color:'#7EBAFF',filter:"opacity(.18)"}}/>
            <div>{Cookies.get("user") && <>
            <Newtwite/>
            <Twite user={user1}/>
            </>}</div>
        </div>
    );
}

export default Home;