
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TopMenu from '../components/TopMenu';
import MainContent from '../components/HomeMainContent';
import NewFooter from '../components/NewFooter';


const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
  }));


function Home() {
    const classes = useStyles();

    return (
      <main>
        <div className={classes.root}>
          <TopMenu />
          <MainContent />
          <NewFooter/>
        </div>
      </main>
      );
}

export default Home;