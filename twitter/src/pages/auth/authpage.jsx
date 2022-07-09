import React, { createContext, useContext, useEffect, useState } from "react";
import { Typography , Tab , Tabs, Grid, ButtonBase, Button, Divider } from "@material-ui/core";
import useStyle from "./styles"
import { Paper } from "@material-ui/core";
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'
import Leftsidebar from "../../component/leftsidebar/leftsidebar"

const login_tab_value = 1
const register_tab_value = 2

const Authpage = () => {
    const classes = useStyle()
    const [tab , settab] = useState()
    const handleChange = (e,newvalue) => {
        settab(newvalue)
    }
    const navigate = useNavigate();
    const [user1 , setuser1] = useState()
    const [user2,setuser2] = useState()
    var [usernamelogin,setusernamelogin] = useState()
    var [passwordlogin,setpasswordlogin] = useState()
    var [fullnamelogin,setfullnamelogin] = useState()
    var [usernamereg,setusernamereg] = useState()
    const [passwordreg,setpasswordreg] = useState()
    const [repasswordreg,setrepasswordreg] = useState()

    const handellogin = () => {
            axios.get("http://localhost:3001/validation")
            .then((respons)=>{
                setuser1(respons.data)
            })
            var user = {
                'username' : usernamelogin,
                'password' : passwordlogin
            }
            var username = user1.map((e)=>{return e.data.username}).join().split(",")
            var password = user1.map((e)=>{return e.data.password}).join().split(",")
            for(let i = 0 ;i<=1000;i++){
                const username1 = username[i]
                const password1 = password[i]
                if((username1 === user.username) && (password1 === user.password)){
                    navigate("/")
                    Cookies.set("user","2")
                    
                }else{
                    alert("نام کاربری یا رمز عبور شما اشتباه است")
                }
            }
    }
    const handelreg = () => {
        axios.get("http://localhost:3001/validation")
        .then((respons)=>{
            setuser2(respons.data)
        })
        const user = {
            'username' : usernamereg,
            'password' : passwordreg
        }
        const mainuser = {
            'username' : fullnamelogin,
            'userid' : usernamereg
        }
        var username = user2.map((e)=>{return e.data.username}).join().split(",")
        for(let k = 0;k<=1000;k++){
            if(usernamereg !== username[k]){
                if(passwordreg === repasswordreg){
                    axios.post("http://localhost:3001/validation",{data:user})
                    axios.post("http://localhost:3001/mainuser",{data:mainuser})
                    axios.post("http://localhost:3001/lurol",{data:usernamereg})
                    Cookies.set("user","2")
                    return navigate("/")}
                else{
                    alert("پسورد به درستی تکرار نشده یا نام کاربری تکراری است")
                }
            }
        } 
    }
    return (
        <Paper className={classes.container}>
            <Typography className={classes.headertext}>سلام به توییتر خوش آمدید</Typography>
            <Tabs value={tab} indicatorColor="primary" textColor="primary" onChange={handleChange} aria-label="disabled tabs example">
            <Tab label="ورود" value={login_tab_value} className={classes.tab}/>
            <Tab label="ثبت نام"  value={register_tab_value} className={classes.tab}/>
            </Tabs>
            {
                tab === login_tab_value  && 
                <div style={{padding:"1rem .8rem",display:"flex",flexDirection:"column"}}>
                    <div style={{marginTop:".5rem",marginBottom:".5rem"}}>
                    <label >نام کاربری</label>
                    </div>
                    <input value={usernamelogin} onChange={e=>setusernamelogin(e.target.value)}/>
                    <div style={{marginTop:".5rem",marginBottom:".5rem"}}>
                    <label >رمز عبور</label>
                    </div>
                    <input value={passwordlogin} onChange={e=>setpasswordlogin(e.target.value)}/>
                    <div style={{marginTop:".8rem",marginBottom:".5rem" ,alignSelf:"center"}}>
                    <ButtonBase>
                        <Button variant="contained" color="primary" onClick={handellogin}>ورود</Button>
                    </ButtonBase>
                    </div>
                </div>
            }
            {
                tab === register_tab_value  && 
                <div style={{padding:"1rem .8rem",display:"flex",flexDirection:"column"}}>
                    <div style={{marginTop:".5rem",marginBottom:".5rem"}}>
                    <label >نام کامل</label>
                    </div>
                    <input value={fullnamelogin} onChange={e=>setfullnamelogin(e.target.value)} required/>
                    <div style={{marginTop:".5rem",marginBottom:".5rem"}}>
                    <label >نام کاربری</label>
                    </div>
                    <input value={usernamereg} onChange={e=>setusernamereg(e.target.value)} required/>
                    <div style={{marginTop:".5rem",marginBottom:".5rem"}}>
                    <label >رمز عبور</label>
                    </div>
                    <input value={passwordreg} onChange={e=>setpasswordreg(e.target.value)} required/>
                    <div style={{marginTop:".5rem",marginBottom:".5rem"}}>
                    <label >تکرار رمز عبور</label>
                    </div>
                    <input value={repasswordreg} onChange={e=>setrepasswordreg(e.target.value)} required/>
                    <div style={{marginTop:".8rem",marginBottom:".5rem" ,alignSelf:"center"}}>
                    <ButtonBase>
                        <Button variant="contained" color="primary" onClick={handelreg}>ثبت نام</Button>
                    </ButtonBase>
                    </div>
                </div>
            }
        </Paper>
    );
}

export default Authpage;