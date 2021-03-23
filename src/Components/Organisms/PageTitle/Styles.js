import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  pageTitleContainer: {
    display: "flex",
    justifyContent: "space-between",
    // marginBottom: theme.spacing(3),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingTop:theme.spacing(2),
    paddingBottom:theme.spacing(2),
    boxShadow:"0px 0px 8px rgba(0, 0, 0, 0.15)"
  },
  typo: {
    color: "#4f4f4f",
    fontWeight:600,
    fontSize:16,
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
}));
