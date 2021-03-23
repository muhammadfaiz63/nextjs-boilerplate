import { makeStyles } from "@material-ui/styles";
import { Colors } from 'Themes'

const drawerWidth = 250;

export default makeStyles(theme => ({
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor:"transparent",
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    backgroundColor:Colors.background,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    backgroundColor:Colors.background,
    // width: theme.spacing(7) + 40,
    // [theme.breakpoints.down("sm")]: {
    //   width: drawerWidth,
    // },
  },
  toolbar: {
    ...theme.mixins.toolbar,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  mobileBackButton: {
    marginTop: theme.spacing(0.5),
    marginLeft: theme.spacing(3),
    [theme.breakpoints.only("sm")]: {
      marginTop: theme.spacing(0.625),
    },
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  link: {
    textDecoration: "none",
    borderBottom: `1px solid ${Colors.hover}`,
    paddingTop:8,
    paddingBottom:8,
    "&:hover, &:focus": {
      backgroundColor: Colors.hover,
    },
  },
  linkActive: {
    backgroundColor: Colors.hover,
  },
  linkNested: {
    paddingLeft: 0,
    "&:hover, &:focus": {
      backgroundColor: Colors.background,
    },
  },
  linkIcon: {
    marginRight: theme.spacing(1),
    color: "#fff",
    transition: theme.transitions.create("color"),
    width: 23,
    display: "flex",
    justifyContent: "center",
  },
  linkIconActive: {
    color: "#fff",
  },
  sidebarList:{
    paddingTop:3
  },
  linkText: {
    padding: 0,
    color: "#fff",
    transition: theme.transitions.create(["opacity", "color"]),
    fontSize: 13,
    fontWeight:600,
  },
  linkTextActive: {
    color: "#fff",
  },
  linkTextHidden: {
    opacity: 0,
  },
  nestedList: {
    paddingLeft: theme.spacing(2) + 30,
  },
  sectionTitle: {
    marginLeft: theme.spacing(4.5),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
    height: 1,
    backgroundColor: Colors.hover,
  },
  headerSidebar:{
    height:220,
    paddingTop:10,
    textTransform:"none",
    boxShadow:"0 1px 3px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.24)"
  },

  footerSidebar:{
    marginTop:20,
    [theme.breakpoints.down("md")]: {
      marginTop:10,
    },
    display:"flex",
    justifyContent:"center",
    flexDirection:"column"
  }
}));
