import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    container:{
        width: 1200,
        marginTop: 10,
        marginBottom:40,
        marginRight: "auto",
        marginLeft:"auto",
    },
    instagram:{
        textAlign:"center",
        fontStyle:"italic",
        alignItems: "center",
        justifyContent:"center",
        display: "flex",
    },
    InstaGrid:{
        display: "grid",
        gridTemplateAreas: "'a a a a b b c c' 'a a a a b b c c' 'a a a a d d e f' 'a a a a d d e f'",
    },
    a:{
        height:500,
        gridArea: "a",
    },
    b:{
        height:250,
        gridArea:"b",
    },
    c:{
        height:250,
        gridArea:"c",
    },
    d:{
        height:250,
        gridArea: "d",
    },
    e:{
        height:250,
        gridArea:"e",
    },
    f:{
        gridArea:"f",
    },
}));