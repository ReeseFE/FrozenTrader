'use client';
import Image from 'next/image';
import { AppBar, Toolbar } from '@mui/material';
import { styled } from '@mui/system';

const BarContainer = styled(AppBar)`
  background-color: transparent;
  box-shadow: none;
`;

const Navbar = () => {
  return (
    <BarContainer>
      <Toolbar>
        <a href='/'>
          <Image
            alt='FrozenTrader-logo'
            width='35'
            height='35'
            src='/logo.svg'
            style={{ color: 'transparent' }}
          />
        </a>
        <a href='/'>
          <Image
            alt='FrozenTrader-text-logo'
            width='100'
            height='20'
            src='/light.svg'
            style={{ color: 'transparent' }}
          />
        </a>
        {/* <IconButton edge='end' color='inherit' aria-label='menu'>
          <MenuIcon />
        </IconButton> */}
      </Toolbar>
    </BarContainer>
  );
};

export default Navbar;
