import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
  root : {
    backgroundColor : 'white',
    width : '25%',
    padding : "1.7rem 1rem ",
  },
  proftext : {
    margin : ".5rem",
    direction : "ltr"
  },
  profname : {
    flex : 1,
    color:"unset"
  },
  profid : {
    flex : 1,
    color:'rgba(0,0,0,.38)',
    fontSize : ".75rem"
  },
  twitter:{
    backgroundColor : "#f5f8fa",
    marginTop : "3rem",
    margin : 'auto',
    borderRadius : "2.5rem",
    padding : "11px 24px"
  },
  twittertitle : {
    fontSize : '1.5rem !important',
    fontWeight : '600 !important',
    marginBottom : "11px !important"
  },
  nameparent : {
    margin : ".5rem",
    width : "max-content"
  }
  });
export default useStyles;