import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from './Card';


const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
    title: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(.75),
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
    },
    
  }));

const Posts = ({posts, loading}) => {
    const classes = useStyles();

    if (loading) {
        return <h2> Loading ...</h2>
    }
    console.log(posts)
    return (
        <main className={classes.fullWidth}>
            <div className = {classes.cardContent}>
              {posts.map((post, index) => (
                  <Card userData={post} key={index}/>
                ))}
            </div>
        </main>
      );

}

export default Posts;