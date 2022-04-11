
// Styles and imports were ommited

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {useState, useEffect} from 'react';
import Posts from '../components/Posts.js';
import Pagination from '../components/Pagination.js';
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 1, text: 'Choice 1', value: 1 },
  { key: 2, text: 'Choice 2', value: 2 },
  { key: 3, text: 'Choice 3', value: 3 },
]

const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      position: 'flex',
      transform: 'translate(6%, -2100%)',
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
    Pagination: {
      position: 'absolute', 
      left: '50%', top: '50%',
      transform: 'translate(-50%, -50%)'
    },
    
  }));

function JobMainContent() {
    const classes = useStyles();

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(12);

    useEffect(() => {
      const fetchPosts = async () =>
      {
        setLoading(true);
        const response = await fetch("https://randomuser.me/api/?results=1200");
        const postData = await response.json();
        setPosts(postData.results);
        setLoading(false);
      }

      fetchPosts();
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
      <main className={classes.fullWidth}>
        <div className={classes.toolbar}>
        </div>
        <div className={classes.toolbar}>
        </div>
          <Posts posts={currentPosts} 
          loading = {loading}/>
          <Pagination className={classes.Pagination} 
          postsPerPage={postsPerPage} 
          totalPosts={posts.length} 
          paginate={paginate}/>
        <div className= {classes.content}>
          <Dropdown
          multiple
          search
          selection
          clearable
          options={options}
          scrolling
          />
          <Dropdown
          multiple
          search
          selection
          options={options}
          scrolling
          />
          <Dropdown
          multiple
          search
          selection
          options={options}
          scrolling
          />
        </div>
      </main>
    );
  }
  
  export default JobMainContent;