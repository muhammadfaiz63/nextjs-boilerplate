import React, { useState, useEffect } from "react";
import clsx from 'clsx';

import { withRouter, Link } from "react-router-dom";
import classNames from "classnames";

import { makeStyles, useTheme } from '@material-ui/core/styles';

// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from "Contexts/Layout";

import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  Divider,
  IconButton,
  Hidden,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button
} from '@material-ui/core'

import {
  ArrowBack as ArrowBackIcon,
  AccountCircle as AccountCircleIcon,
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Inbox as InboxIcon,
  Mail as MailIcon
} from "@material-ui/icons";

import Navigation from "../Sidebar/Navigation"
import { Images, Colors } from "Themes"
import AppInfo from "AppInfo"
import { useAuth } from "Contexts/Auth";
import { useLocation } from 'react-router-dom';
import { useNavigation } from 'Contexts/Navigation';
import { useHistory } from 'react-router';
import useStyles from "./Styles"

export default ({ open, setOpen }) => {
  const classes = useStyles();
  const theme = useTheme();
  const { user, signOut } = useAuth();
  const { navigationData: { currentName, headerTitle, headerBackButton, headerLogo } } = useNavigation();
  const history = useHistory();
  const [pathname, setPathname] = useState("");

  const name = user ? user.displayName : JSON.parse(localStorage.user).displayName
  const email = user ? user.email : JSON.parse(localStorage.user).email

  const handleGoBack = () => {
    history.goBack();
  }

  // global
  var { isSidebarOpened } = useLayoutState();
  var layoutDispatch = useLayoutDispatch();

  return (
    <>
      <Hidden smUp>
        <AppBar
          position="fixed"
          className={clsx(classes.appBar)}
        >
          <Toolbar>
            <IconButton style={{padding:0, color: Colors.snow}} onClick={()=> headerBackButton ? handleGoBack() : toggleSidebar(layoutDispatch)}>
              {headerBackButton ? <ChevronLeftIcon /> : <MenuIcon />}
            </IconButton>
            {
              headerLogo ? <img src={Images.hoodaMerchantlogo} alt="img" style={{ marginLeft: 10, width: 50, height: 40, marginRight: 10 }} /> : null
            }
            <Typography
              style={{
                marginLeft: headerLogo ? 0 : 8,
                fontSize: 13,
                letterSpacing: 3,
                color: "#fff",
                textTransform: "none"
              }}
            >
              {headerTitle ? currentName : 'Food Team'}
            </Typography>
          </Toolbar>
        </AppBar>
      </Hidden>
    </>
  )
}


