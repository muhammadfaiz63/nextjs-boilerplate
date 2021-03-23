import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  container: {
      flex:1
  },
  typo: {
    color: "#4f4f4f",
    marginTop:25,
    fontWeight:400
  },
  button: {
    boxShadow: '2px 2px 5px #888888',
    textTransform: "none",
    "&:active": {
      boxShadow: theme.customShadows.widgetWide,
    },
  },
  statustxt:{
    color:'#4f4f4f'
  },
  cardStyle:{
      flex:1,
      flexDirection:"column",
      backgroundColor:"#F2F2F2",
      height:120,
      boxShadow:"0px 0px 10px rgba(0, 0, 0, 0.15)",
      borderRadius:4
  }
}));
