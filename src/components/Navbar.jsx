'use client';
import Image from 'next/image';
import { useState } from 'react';
import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { menuData } from '@/constant/homePage';

const BarContainer = styled(AppBar)`
  max-width: 1280px;
  left: 50%;
  transform: translateX(-50%);
  background-color: transparent;
  box-shadow: none;
`;

const CustomPopoverContent = styled('div')(({ openMenu, menu }) => ({
  padding: '10px',
  opacity: openMenu === menu ? 1 : 0,
  flexDirection: 'column',
  position: 'absolute',
  backgroundColor: 'white',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  zIndex: 1,
  visibility: openMenu === menu ? 'visible' : 'hidden',
  transition: 'opacity 0.3s',
}));

const MenuItem = styled('div')`
  position: relative;
  &:hover .popover-content {
    opacity: 1;
  }
`;

const RightMenu = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const handleMouseEnter = (menu) => {
    setOpenMenu(menu);
  };

  const handleMouseLeave = () => {
    setOpenMenu(null);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {Object.keys(menuData).map((menu) => (
        <MenuItem
          key={menu}
          onMouseEnter={() => handleMouseEnter(menu)}
          onMouseLeave={handleMouseLeave}
        >
          <Button
            aria-haspopup='true'
            sx={{
              color: openMenu === menu ? 'white' : 'grey',
              margin: '0 10px',
              marginTop: '12px',
              textTransform: 'none',
              fontSize: '1.2rem',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '2px',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-2px',
                  left: '-2px',
                  width: '100%',
                  height: '2px',
                  backgroundColor:
                    openMenu === menu ? 'rgb(102, 190, 225)' : 'transparent',
                  transition: 'background-color 0.3s',
                },
              }}
            >
              {menu}
              <ExpandMoreIcon
                style={{
                  color: openMenu === menu ? 'white' : 'grey',
                  transform:
                    openMenu === menu ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s, color 0.3s',
                }}
              />
            </Box>
          </Button>
          <CustomPopoverContent
            className='popover-content'
            openMenu={openMenu}
            menu={menu}
          >
            {menuData[menu].map((item, index) => (
              <div key={index}>
                <Typography variant='body1' style={{ fontWeight: 'bold' }}>
                  {item.title}
                </Typography>
                <Typography variant='body2' style={{ color: 'gray' }}>
                  {item.description}
                </Typography>
              </div>
            ))}
          </CustomPopoverContent>
        </MenuItem>
      ))}
    </div>
  );
};

const Navbar = () => {
  return (
    <BarContainer>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Image
            alt='FrozenTrader-logo'
            width='47'
            height='35'
            src='/logo_white.svg'
            style={{ color: 'transparent', marginTop: '7px' }}
          />
          <div style={{ margin: '0 2px' }} />
          <Image
            alt='FrozenTrader-text-logo'
            width='100'
            height='20'
            src='text_light.svg'
            style={{ color: 'transparent', marginTop: '12px' }}
          />
        </div>
        <RightMenu />
      </Toolbar>
    </BarContainer>
  );
};

export default Navbar;
