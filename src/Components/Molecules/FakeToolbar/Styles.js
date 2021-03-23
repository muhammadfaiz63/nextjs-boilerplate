import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  pageTitleContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(1),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
  },
  typo: {
    color: "#4f4f4f",
    marginTop:15,
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
}));
