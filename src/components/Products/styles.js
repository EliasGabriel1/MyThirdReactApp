import { makeStyles } from '@material-ui/core/styles';
import { Autocomplete } from '@material-ui/lab';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
  banner:{
    marginTop: 50,
    marginRight: 'auto',
    marginBottom: 0,
    marginLeft: 'auto',  
    img:{
      width: 1300,
    }
  },
  center:{
    display:"flex",
    justifyContent:"center",
    textAlign:"center",
    fontStyle:"italic",
    alignItems: "center",
    justifyContent:"center",
    display: "flex",
    gap:"10px",
  },
}));
