import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const AppBar_cdlu = () => {

    return (
        <div className= "AppBar">
        <AppBar position="static">
        <Toolbar>
        
          <Typography variant="h6" color="inherit" noWrap>
            CDLU 4th Year
          </Typography>
        </Toolbar>
      </AppBar>
      </div>
    )
}

export default AppBar_cdlu