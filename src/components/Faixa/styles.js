import { makeStyles } from '@material-ui/core/styles';
import { Autocomplete } from '@material-ui/lab';

export default makeStyles((theme) => ({
    faixa:{
        listStyle: "none",
        display: "flex",
        justifyContent:"space-between",
        width: 1300,
        padding: 0,
        marginTop: 20,
        marginBottom:5,
        marginLeft:"auto",
        marginRight:"auto",
    },
    textfaixa:{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    textfaixachild:{
        display: "flex",
        flexWrap: "wrap",
    },
    svgfaixa:{
        marginRight:5,
        marginLeft: 10,
    }
}));
