
// Styles and imports were ommited

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from './Card';
import {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import * as IoIcons from 'react-icons/io';
import * as FaIcons from 'react-icons/fa';



import './HomeMainContent.css'


const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
    title: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
    fullWidth: {
      width: '100%',
    },
    cardContent: {
      display: 'flex',
      flexWrap: "wrap",
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: "2%",
    },
    row: {
      display: "table",
    },

    Button: {
      display: 'inline-flex',
      alignItems: 'left',
    }
  }));


function MainContent() {
    const classes = useStyles();

    const [users, setUsers] = useState([]);

    useEffect(() => {
      (async () => {
        let userData;
        try {
          const response = await fetch("https://randomuser.me/api/?results=3");
          userData = await response.json();
        } catch (error) {
          console.log(error);
          userData = [];
        }
        setUsers(userData.results);
      })();
    }, []);

    return (
      <main className={classes.fullWidth}>
          <div className={classes.toolbar} />
          <div className = "extra">
  {/* Stack the columns on mobile by making one full-width and the other half-width */}
  <Row>
    <Col xs={12} md={3} id = "two">
      <img src = "JobGuideLogoSqaure-03.png" id = "logosquare" alt = "logo"></img>
      <img src = "JobGuideMockUpGetStarted-03.png" alt="job guide mockup"></img>
      <div className="d-grid gap-1">
        <button class="button button4">
            <IoIcons.IoMdContact color = 'black' size={32}></IoIcons.IoMdContact>
          <div class = "buttontext">
            Create a Profile
          </div>
          <div class="hiddenItem"> </div>
        </button>
        <button class="button button4">
          <FaIcons.FaSuitcase color= "black" size={32}/>
          <div class = "buttontext">
              Submit a Job
          </div>
        </button>
        <button class="button button4">
          <IoIcons.IoMdAlbums color = 'black' size={32} className = "Icon"></IoIcons.IoMdAlbums>
          <div class = "buttontext">
              Manage your Posts
          </div>
        </button>
      </div>

    </Col>
    <Col xs={12} md={9} id = "one">
      <p>
      "I heard about my new job on H-Net" has been a familiar expression for over twenty years since H-Net began distributing position announcements to its 
      global audience of 180,000 scholars, teachers, and administrators at academic and nonprofit institutions.

      <br></br>
      <br></br>

      The Job Guide is the premier source of information about academic job postings in the US and abroad. 
      Increasingly, the Job Guide serves the non-academic world of non-profits, government, and NGOs, 
      as well as for-profit companies seeking high quality candidates with specialized training and experience. T
      he active community of researchers, teachers, and scholarly professionals already collaborating through H-Net's 180+ 
      public networks is a highly motivated, self-selecting audience with established networks within and outside of the academy. 
      The Job Guide is a simple, effective way for employers to connect with H-Net’s audience to find the right candidate for the job. 
      Revenue from the H-Net Job Guide recovers the cost of all H-Net's services to the public while it supports the work of hundreds of volunteer editors.

      <br></br>
      <br></br>

      All Job Guide announcements are freely, publicly available.
      
      <br></br>
      <br></br>

      For $300 employers and agencies can:
      </p>

      <ul>
        <li>Write and format the text of their own notices, with no word limit.</li>
        <li>Post several positions in one announcement.</li>
        <li>Make changes at will with no extra cost.</li>
        <li>Keep any number of announcements active for up to nine months from the posting date.</li>
        <li>Pay by check or credit card via an encrypted, secure site.</li>
        <li>Distribute their announcement through H-Net's powerful communication channels:
           H-Announce, our Job Guide weekly digest for editors, and individual networks targeted by field or discipline.</li>
        <li>Support H-Net's nonprofit mission to the academic community.</li>
        <li>Get a 15% discount for ad agencies.</li>
      </ul>

      <p>Distinguish your posting by adding a logo and making it a featured notice (additional fees apply).</p>
      <p>Learn more about these features, plus policies concerning content, fee waivers, discounts, and other details.</p>

      <div className = {classes.cardContent}>
        {users.map((user, index) => (
            <Card userData={user} key={index}/>
          ))}
      </div>

    </Col>
  </Row>
  </div>
      </main>
    );
  }
  
  export default MainContent;