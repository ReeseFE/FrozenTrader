'use client';
import Image from 'next/image';
import { AppBar, Toolbar, Button, Menu,MenuItem } from '@mui/material';
import { styled } from '@mui/system';
import { useState } from 'react';

const BarContainer = styled(AppBar)`
  background-color: transparent;
  box-shadow: none;
`;

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuIndex, setMenuIndex] = useState(null);

  const handleMenuClick = (event, index) => {
    setAnchorEl(event.currentTarget);
    setMenuIndex(index);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuIndex(null);
  };

  const menuItems = [
    { label: 'Solutions', items: ['Solution 1', 'Solution 2', 'Solution 3'] },
    { label: 'Resources', items: ['Demo', 'Docs', 'Resource 3'] },
    { label: 'About Frozen', items: ['Our Story', 'Team', 'Careers'] },
    { label: 'Get Started', items: ['Sign Up', 'Pricing', 'Demo'] },
  ];

  return (
    <BarContainer>
      <Toolbar style={{ paddingLeft: '100px', display: 'flex', justifyContent: 'space-between'  }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <a href='/'>
            <Image
              alt='FrozenTrader-logo'
              width='47'
              height='35'
              src='/logo_white.svg'
              style={{ color: 'transparent', marginTop: '7px' }}
            />
          </a>
          <div style={{ margin: '0 2px' }} />
          <a href='/'>
            <Image
              alt='FrozenTrader-text-logo'
              width='100'
              height='20'
              src='text_light.svg'
              style={{ color: 'transparent', marginTop: '12px' }}
            />
          </a>
          {/* <IconButton edge='end' color='inherit' aria-label='menu'>
            <MenuIcon />
          </IconButton> */}
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {menuItems.map((menu, index) => (
            <div key={index}>
              <Button
                aria-controls={`menu-${index}`}
                aria-haspopup="true"
                onClick={(event) => handleMenuClick(event, index)}
                style={{ color: 'grey', margin: '0 10px' }}
              >
                {menu.label}
              </Button>
              <Menu
                id={`menu-${index}`}
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl) && menuIndex === index}
                onClose={handleMenuClose}
              >
                {menu.items.map((item, idx) => (
                  <MenuItem key={idx} onClick={handleMenuClose}>
                    {item}
                  </MenuItem>
                ))}
              </Menu>
            </div>
          ))}
        </div>
      </Toolbar>
    </BarContainer>
  );
};

export default Navbar;
