import { getUsers } from '../service/api';
import { useEffect, useState } from 'react';
import CardList from './cardlist';
import AppBar_cdlu from './AppBar_cdlu'
import "../css/cards.styles.css"

import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        KnowYourBatch
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Cards = ()=>{

    const getUsersDetails = async() => {
        let response = await getUsers();
        setUsers(response.data);
    }

    useEffect(()=>{
        getUsersDetails();
    }
    , [])

    const [users, setUsers] = useState([]);

    return(
        <div className='Cards'>
        <AppBar_cdlu />
        <CardList users = {users}  />
        <Copyright />
        </div>
    )
    }

export default Cards