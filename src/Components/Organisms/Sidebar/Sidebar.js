import React, { useState, useEffect, useContext } from "react";
import { Drawer, IconButton, Button, List, Typography,ClickAwayListener, Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import { withRouter, Link } from "react-router-dom";
import classNames from "classnames";
// styles
import useStyles from "./Styles";

// components
import SidebarLink from "./Link";

// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from "Contexts/Layout";

import { MerchantContext } from "Contexts/Merchant"

// icons
import {
  ArrowBack as ArrowBackIcon,
  AccountCircle as AccountCircleIcon,
  ExitToApp as ExitToAppIcon,
  Edit as EditIcon,
} from "@material-ui/icons";

import Navigation from "./Navigation"
import { Images, Colors } from "Themes"
import AppInfo from "AppInfo"
import { useAuth } from "Contexts/Auth";

function Sidebar({ location }) {
  var classes = useStyles();
  var theme = useTheme();

  // global
  let { isSidebarOpened } = useLayoutState();
  let layoutDispatch = useLayoutDispatch();
  const { dataMerchant,dataProduct,filterProduct, getDataMerchant, searchDataProduct, updateDataProduct } = useContext(MerchantContext);

  // local
  let [isPermanent, setPermanent] = useState(true);
  let [listNavigate, setListNavigate] = useState([]);

  const setMenuNavigation = async () =>{
    const resultgetMerchant = await getDataMerchant() 
    if(resultgetMerchant.status === "Failed"){
      // signout()
    }   
    else{
      let typemerchant = resultgetMerchant.result.dataMerchant.merchantParent !== "" ? "cabang" : "pusat"
      let navigateFilter = Navigation.filter(item=>item.type === typemerchant || item.type === "pusat dan cabang")
      var menuFiltered = navigateFilter.map(obj => obj.id === 5 ? { ...obj, link: `/app/menu/list/${typemerchant}/0` } : obj);
      setListNavigate(menuFiltered)
    }

  }

  useEffect(()=>{
    setMenuNavigation()
  },[])

  useEffect(function () {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();

    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };

  });


  const { user, signOut } = useAuth();

  const name = user ? user.displayName : JSON.parse(localStorage.user).displayName
  const email = user ? user.email : JSON.parse(localStorage.user).email

  return (
    <Drawer
      variant={isPermanent ? "permanent" : "temporary"}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpened,
        [classes.drawerClose]: !isSidebarOpened,
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: isSidebarOpened,
          [classes.drawerClose]: !isSidebarOpened,
        }),
      }}
      onClose={()=>toggleSidebar(layoutDispatch)}
      open={isSidebarOpened}
    >
      <Button component={Link} to="/app" className={classes.headerSidebar}>
        <div>
          <img src={Images.hoodaMerchantlogo} alt="img" style={{ width: "100%", height: 120, color: "#fff" }} />
          <div style={{ fontSize: 13, marginTop: 5, color: "#fff", textDecoration: "none", marginBottom: 10, textAlign: "center" }}>
            Food Team </div>
          <center><small style={{ textAlign: "center", textDecoration: "none", color: "#fff" }}>Versi {AppInfo.versi}</small></center>
        </div>
      </Button>
      <List className={classes.sidebarList}>
        {
          listNavigate.map((link, index) => (
            <SidebarLink
              key={index}
              location={location}
              isSidebarOpened={isSidebarOpened}
              {...link}
            />
          ))
        }
      </List>
      <div className={classes.footerSidebar}>
        <div style={{flexDirection:"row",flexWrap:"wrap",paddingLeft:20,paddingRight:20,paddingBottom:20,paddingTop:5, border: `1px solid ${Colors.snow}`,width: 200,alignSelf:"center",borderRadius:5}}>
      
        <IconButton component={Link} to="/app/profile" style={{border: `1px solid ${Colors.snow}`,width:30,height:30,position:"absolute",right:30}}>
        <EditIcon style={{fontSize:18,color: Colors.snow}}/>
        </IconButton>

        <center><AccountCircleIcon style={{ marginTop:20,color: Colors.snow, fontSize: 35, alignSelf: "center" }} /></center>
        
        <div style={{ wordWrap:"break-word",fontSize: "1.8vh", color: "#fff",textAlign:"center", marginTop: 10 }}>{name}</div>
          
        <div style={{ fontSize: "1.4vh", color: "#fff",textAlign:"center", top: -10, marginTop: 5 }}>{email}</div>
        </div>

        <Button variant="contained" onClick={signOut} style={{ padding: 4, backgroundColor: Colors.background, width: 200, 
                                          alignSelf: "center", marginTop: 15, textTransform: "none", color: Colors.snow, 
                                          fontSize: 13 }}>
          Keluar <ExitToAppIcon style={{color:Colors.snow,fontSize:22,marginLeft:5}}/></Button>
      </div>
    </Drawer>
  );

  // ##################################################################
  function handleWindowWidthChange() {
    var windowWidth = window.innerWidth;
    var breakpointWidth = theme.breakpoints.values.md;
    var isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && isPermanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
    }
  }
}

export default withRouter(Sidebar);
