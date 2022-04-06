// Styles and imports were ommited

import React, {useState} from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { MenuItem } from '@material-ui/core';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import {SidebarData} from './SideMenu';
import './TopMenu.css';



const drawerWidth = 0;

const useStyles = makeStyles(theme => ({
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    background: '#09503a',
  },
  test: {
    marginLeft: "auto",
    marginRight: theme.spacing(2),
    display: 'inline-flex',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title1: {
    flexGrow: 1,
  },
}));


function TopMenu() {
    const classes = useStyles();
    const [sidebar, setSideBar] = useState(false);
  
    const showSideBar = () => setSideBar(!sidebar);

    return (
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
        <Link to='#' className = 'menu-bars'> 
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
              <FaIcons.FaBars onClick={showSideBar} color= "white"/>
          </IconButton>
        </Link>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} onClick={showSideBar}>
            <ul className ='nav-menu-items'>
              <li className="navbar-toggle">
                <Link to="#" className = "menu-bars">
                  <AiIcons.AiOutlineClose color = 'white'/ >
                  </Link>  
              </li>
              {SidebarData.map((item,index) => {
                return(
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>  
          </nav>

          <img src = 'hwhitelogo.png' id="hnetlogo" alt = "hnet logo"></img>

          <Typography variant='h6' className={classes.title1}>
            Humanities and Social Sciences
          </Typography>

          <section className = {classes.test}>
          <MenuItem>
            <Typography variant='h6' className={classes.title1}>
              <a href = 'https://twitter.com/hnetjobguide' target="_blank" rel="noreferrer">
              <IoIcons.IoLogoTwitter color='#00acee' size={32}></IoIcons.IoLogoTwitter>
              </a>
            </Typography>
          </MenuItem>
            {/* <MenuItem>
              <Typography variant='h6' className={classes.title1}>
                <a href = 'https://www.facebook.com/humanities.socialsciences.online/' target="_blank">
                <IoIcons.IoLogoFacebook color = "#3b5998" size={32}></IoIcons.IoLogoFacebook>
                </a>
              </Typography>
            </MenuItem> */}
            {/* <MenuItem>
              <Typography variant='h6' className={classes.title1}>
                <Link to='/jobs'>
                  About
                </Link>
              </Typography>
            </MenuItem> */}
            <MenuItem>
              <form className = {classes.MenuButton}>
              <input type="text" id="fname" name="fname"></input>
              </form>
            </MenuItem>
          </section>
        </Toolbar>
      </AppBar>
    );
  }
  
  export default TopMenu;

  TopMenu.propTypes = {
    classes: PropTypes.object.isRequired
  };
  
  