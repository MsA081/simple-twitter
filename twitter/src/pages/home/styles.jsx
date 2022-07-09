import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
  root : {
    backgroundColor : "#e6e6e6",
    flex : 1,
    overflow:'auto'
  },
  header : {
    padding:"18px",
    backgroundColor:"white",
    display:'flex',
    fontSize:"1.2rem",
    fontWeight : 600
  },
  newtwite : {
    padding:"18px",
    backgroundColor:"white",
    display:'flex',
    fontSize:"1.2rem",
  },
  input:{
    margin:"1rem",
    border:'none',
    flex:1,
    "&:focus":{
      outline : 'unset'
    }
  },
  twite:{
    paddingRight:"3rem",
    backgroundColor:"white",
    display:'flex',
    fontSize:"1.2rem",
  }
  });
  
export default useStyles;