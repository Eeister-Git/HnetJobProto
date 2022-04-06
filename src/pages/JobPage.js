import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TopMenu from '../components/TopMenu';
import NewFooter from '../components/NewFooter';
import JobMainContent from '../components/JobMainContent';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
    title: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
  }));


function JobPage() {
    const classes = useStyles();

    return (
      <main>
          <div className={classes.root}>
            <TopMenu />
            <JobMainContent />
            <NewFooter />
          </div>
        </main>
      );
}

export default JobPage;