import { Button, Grid, IconButton } from "@material-ui/core";
import { useEffect, useRef, useState } from "react";
import useStyles from "../styles";
import axios from "axios"
const Newtwite = () => {
    const [info,setinfo] = useState()
    const newtwiteclick = () => {
        const twitetext = document.getElementById("1").value;
        axios.get("http://localhost:3001/mainuser")
        .then(respons=>{
            setinfo(respons.data)
        })
        if(!twitetext)return
        var newuser = 
        {
                'img': "/images/logooo.png",
                'name': info.map(e=>{return e.data.username}).join(),
                'id': info.map(e=>{return e.data.userid}).join(),
                'twite': twitetext,
                'number': 0
        }
        axios.post(
            "http://localhost:3001/homeuser",{data:newuser}
          )
        // axios.post("http://localhost:3001/homeuser",{})
        //     .then(response=>
        //         alert('hi')
        //         )
        //     .catch(error=>
        //         alert('bye'))
    }
    const [twite,settwite]=useState()
    const input1 = useRef()
    useEffect(()=>
    {
        input1.current.addEventListener("input",function(e)
        {console.log(e.target.innerText);},false);
    },
    [])

    const classes = useStyles();
    return (
        <div style={{backgroundColor:"white"}}>
            <Grid container alignItems="" className={classes.newtwite}>
                <img src="/images/logooo.png"/>
                <input className={classes.input} id="1" placeholder="توییت کن ..." ref={input1}/>
            </Grid>
            <Grid container direction="row-reverse">
                <Grid style={{margin:".5rem",borderRadius:".5rem"}}>
                <Button variant="contained" color="primary" onClick={newtwiteclick}>توییت</Button>
                </Grid>
                <IconButton>
                <img src="/images/logoooo.png" />
                </IconButton>
            </Grid>
        </div>
    );
}

export default Newtwite;