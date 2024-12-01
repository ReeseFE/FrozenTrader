'use client';
import Image from 'next/image';
import { AppBar, Toolbar, Button, Menu, MenuItem, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useState } from 'react';

const BarContainer = styled(AppBar)`
  background-color: transparent;
  box-shadow: none;
`;

const CustomMenuItem = styled(MenuItem)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Navbar = () => {
  const [anchorEls, setAnchorEls] = useState({});
  const [menuIndex, setMenuIndex] = useState(null);

  const handleMenuClick = (event, index) => {
    setAnchorEl(event.currentTarget);
    setMenuIndex(index);
  };

  const handleMenuOpen = (event, menu) => {
    setAnchorEls((prev) => ({ ...prev, [menu]: event.currentTarget }));
  };

  const handleMenuClose = (menu) => {
    setAnchorEls((prev) => ({ ...prev, [menu]: null }));
  };

  const menuData = {
    Solutions: [
      { title: 'Open Source', description: 'Explore our open-core GitHub repository.' },
      { title: 'Cloud Platform', description: 'Revolutionize your operations with Nautilus Cloud.' },
      { title: 'Consulting', description: 'Access engineering services and direct support.' }
    ],
    Resources: [
      { title: 'Documentation', description: 'Read our extensive documentation.' },
      { title: 'API Reference', description: 'Explore our API reference.' },
      { title: 'Community', description: 'Join our community discussions.' }
    ],
    'About Frozen': [
      { title: 'About Us', description: 'Learn more about our company.' },
      { title: 'Careers', description: 'Join our team and help shape the future.' },
      { title: 'Contact', description: 'Get in touch with us.' }
    ],
    'Get Started': [
      { title: 'Sign Up', description: 'Create a new account.' },
      { title: 'Pricing', description: 'View our pricing plans.' },
      { title: 'Demo', description: 'Request a demo.' }
    ]
  };

  return (
    <BarContainer>
      <Toolbar
        style={{
          paddingLeft: '100px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
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
          {Object.keys(menuData).map((menu) => (
            <div
              key={menu}
              onMouseEnter={(event) => handleMenuOpen(event, menu)} // 鼠标进入时打开菜单
              onMouseLeave={() => handleMenuClose(menu)} // 鼠标离开时关闭菜单
            >
              <Button
                aria-controls={`${menu}-menu`}
                aria-haspopup="true"
                onClick={(event) => handleMenuOpen(event, menu)}
                sx={{ color: 'grey', margin: '0 10px', marginTop: '12px', textTransform: 'none', fontSize: '1.2rem' }}
                // style={{ color: 'grey', margin: '0 10px', textTransform: 'none' }}
              >
                {menu}
              </Button>
              <Menu
                id={`${menu}-menu`}
                anchorEl={anchorEls[menu]}
                keepMounted
                open={Boolean(anchorEls[menu])}
                onClose={() => handleMenuClose(menu)}
              >
                {menuData[menu].map((item, index) => (
                  <CustomMenuItem key={index} onClick={() => handleMenuClose(menu)}>
                    <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" style={{ color: 'gray' }}>
                      {item.description}
                    </Typography>
                  </CustomMenuItem>
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
