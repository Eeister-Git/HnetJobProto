import React from 'react'
import { Dropdown } from 'semantic-ui-react'
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
  Pagination: {
    position: 'absolute', 
    left: '50%', top: '50%',
    transform: 'translate(-50%, -50%)'
  },
  
}));

const options = [
  { key: 1, text: 'Choice 1', value: 1 },
  { key: 2, text: 'Choice 2', value: 2 },
  { key: 3, text: 'Choice 3', value: 3 },
]

function DropdownExampleClearable() {
  const classes = useStyles();

  return (
    <main className={classes.fullWidth}>
            <Dropdown
        placeholder='State'
        fluid
        multiple
        search
        selection
        options={options}
      />
    </main>
  );
}

export default DropdownExampleClearable