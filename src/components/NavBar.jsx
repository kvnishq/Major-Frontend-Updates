import { AppBar, Toolbar, Typography, styled} from '@mui/material' ;
import {NavLink} from 'react-router-dom'


    const Header = styled(AppBar)`
    background: #111111;
`;
        
const Tabs = styled(NavLink)`
    color: #FFFFFF;
    margin-right: 200px;
    text-decoration: none;
    font-size: 20px;
`;

const NavBar = () => {
    
    return (

        <Header position = 'static'>
            <Toolbar>
                <Tabs to = 'album'>Know Your Batch</Tabs>
                <Tabs to = 'students'>All Users</Tabs>
                <Tabs to = 'Student'>Add User</Tabs>
                <Tabs to = 'cards'>Cards</Tabs>
            </Toolbar>
        </Header>
    )
}

export default NavBar;