import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default props => {

  const navigate = useNavigate();
  return (
    <Menu>
      <Button className="menu-item" onClick={()=>{navigate('/Student')}}>
        Add Student
      </Button>
      <Button className="menu-item" onClick={()=>{navigate('/dropdown')}}>
        Know Your Batch
      </Button>
      <Button className="menu-item" onClick={()=>{navigate('/students')}}>
        All Students
      </Button>
      <Button className="menu-item" onClick={()=>{navigate('/')}}>
        About Us
      </Button>
      <Button className="menu-item" onClick={()=>{navigate('/')}}>
        Contact Us
      </Button>
    </Menu>
  );
};