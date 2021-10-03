import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    container:{
        width: 1200,
        marginTop: 0,
        marginBottom:0,
        marginRight: "auto",
        marginLeft:"auto",
    },
    main:{
        marginTop:70,
        width: 1200,
        marginBottom:0,
        marginRight: "auto",
        marginLeft:"auto",
    },
    iconhome:{
        display:"flex",
        alignItems:"center",
    },
    href:{
        textDecoration:"none",
        color:"#000",
    },
    containercontato:{
        maxHeight:"85vh",
        height:"70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        lineHeight:"0",
    },
    center:{
        display:"flex",
        textAlign:"center",
        justifyContent:"center",
    }
}));