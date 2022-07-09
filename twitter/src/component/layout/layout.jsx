import React, { useEffect, useState } from "react";
import useStyles from "./styles"
import Rightsidebar from "../rightsidebar/rightsidebar";
import Leftsidebar from "../leftsidebar/leftsidebar";
import axios from "axios"
import { BrowserRouter, Route, Routes} from "react-router-dom";
import  Home  from "../../pages/home/home"
import Twitebyuser from "../../pages/twitebyuser/twitebyuser"
import Twitebyhashtag from "../../pages/twitebyhashtag/twitebyhashtag"
import Pagenotfound from "../../pages/404/p404"
import Authpage from "../../pages/auth/authpage"
import { Divider } from "@material-ui/core";

const Layout = () => {
    const classes = useStyles();
    const [user,setuser] = useState([])
    const [hashtag,sethashtag] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:3001/leftuser")
        .then((respons)=>{
            setuser(respons.data)
        })
        axios.get("http://localhost:3001/righthashtag")
        .then((respons)=>{
            sethashtag(respons.data)
        })
    },[])
    return (
        <div className={classes.root}>
            <BrowserRouter>
            <Routes>
                <Route exact path="/" element={
                <>
                <Rightsidebar hashtagtitle={hashtag}/>
                <Divider orientation="vertical" className="classes.divider"/>
                <Home/>
                <Divider orientation="vertical" className="classes.divider"/>
                <Leftsidebar user={user}/>
                </>}/>
                <Route selected exact path="/login" element={
                <>
                <Authpage/>
                </>}/>
                <Route exact path="/user/:user"  element={
                <>
                <Rightsidebar hashtagtitle={hashtag}/>
                <Divider orientation="vertical" className="classes.divider"/>
                <Twitebyuser/>
                <Divider orientation="vertical" className="classes.divider"/>
                <Leftsidebar user={user}/>
                </>}/>
                <Route exact path="/hashtag/:hashtag" element={
                <>
                <Rightsidebar hashtagtitle={hashtag}/>
                <Divider orientation="vertical" className="classes.divider"/>
                <Twitebyhashtag/>
                <Divider orientation="vertical" className="classes.divider"/>
                <Leftsidebar user={user}/>
                </>}/>
                <Route path="/*" element={
                <>
                <Rightsidebar hashtagtitle={hashtag}/>
                <Divider orientation="vertical" className="classes.divider"/>
                <Pagenotfound/>
                <Divider orientation="vertical" className="classes.divider"/>
                <Leftsidebar user={user}/>
                </>}/>
            </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Layout;