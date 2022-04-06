import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


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
    FullPagination: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
  }));

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];
    const classes = useStyles();


    for(let i = 1; i<= Math.ceil(totalPosts / postsPerPage); i++){
        if (pageNumbers.length > 10)
        {
            continue;
        }
        pageNumbers.push(i)
    }

    return (
        <nav className = {classes.FullPagination}>
            <ul className = "pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={() => paginate(number)} href='jobs' className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;