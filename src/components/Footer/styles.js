import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  footer: {
    fontSize: 14,
    textDecoration: "none",
    color: "#000",
  },
  Container:{
      width: "100%",
      background: "#fff",
      boxShadow: "-1em 0 0.4em #8b8b8b7a",
  },
  MxW:{
    maxWidth:1200,
    marginTop: 0,
    marginRight: "auto",
    marginLeft:"auto",
    marginBottom: 25,
    display:"flex",
    justifyContent: "space-between",
  },
  footerCart:{
      listStyle: "none",
      display: "grid",
      padding: 0,
      gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
      gap: 5,
  },
  footerAtendimento:{
    padding: 0,
    listStyle: "none",
    width: "min-content",
  },
  footerinstitucional:{
    padding: 0,
    listStyle: "none",
  },
  footerAjuda:{
    padding: 0,
    listStyle: "none",
  },
  footertTell:{
    width: "max-content",
  }
}));