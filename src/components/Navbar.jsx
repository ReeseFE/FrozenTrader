'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { menuData } from '@/constant/homePage';
import VerticalToggleButtons from '@/components/VerticalToggleButtons/VerticalToggleButtons.jsx';
import styles from '../app/page.module.css';

const BarContainer = styled(AppBar)`
    max-width: 1280px;
    left: 50%;
    transform: translateX(-50%);
    background-color: transparent;
    box-shadow: none;
    transition: transform 0.3s ease;
`;

const CustomPopoverContent = styled('div')(({ openMenu, menu }) => ({
    position: 'absolute',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
    width: 'fit-content',
    gap: '0.3rem',
    fontSize: '1rem',
    opacity: openMenu === menu ? 1 : 0,
    zIndex: 1,
    visibility: openMenu === menu ? 'visible' : 'hidden',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    boxShadow: '0 10px 10px rgba(0, 0, 0, 0.5)',
    borderRadius: '15px',
    border: '1px solid #2D2930',
    padding: '10px',
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
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                flexGrow: 1,
            }}
        >
            <div className={styles.menuContainer}>
                {Object.keys(menuData).map((menu) => (
                    <MenuItem
                        key={menu}
                        onMouseEnter={() => handleMouseEnter(menu)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Button
                            aria-haspopup='true'
                            sx={{
                                color:
                                    openMenu === menu
                                        ? 'white'
                                        : 'rgb(170, 170, 170)',
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
                                            openMenu === menu
                                                ? 'rgb(102, 190, 225)'
                                                : 'transparent',
                                        transition: 'background-color 0.3s',
                                    },
                                }}
                            >
                                {menu}
                                <ExpandMoreIcon
                                    style={{
                                        color:
                                            openMenu === menu
                                                ? 'white'
                                                : 'rgb(170, 170, 170)',
                                        transform:
                                            openMenu === menu
                                                ? 'rotate(180deg)'
                                                : 'rotate(0deg)',
                                        transition:
                                            'transform 0.3s, color 0.3s',
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
                                <Box
                                    key={index}
                                    sx={{
                                        borderRadius: '12px',
                                        width: '100%',
                                        padding: '0.7rem',
                                        border: '1px solid transparent',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease',
                                        '&:hover': {
                                            backgroundColor: '#1B1B1D',
                                            border: '1px solid #2D2930',
                                        },
                                    }}
                                    onClick={() => {
                                        if (item.url) {
                                            window.open(item.url, '_blank');
                                        }
                                    }}
                                >
                                    <Typography
                                        variant='body1'
                                        sx={{
                                            fontWeight: 'bold',
                                            whiteSpace: 'nowrap',
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        variant='body2'
                                        sx={{
                                            color: 'gray',
                                            whiteSpace: 'nowrap',
                                        }}
                                    >
                                        {item.description}
                                    </Typography>
                                </Box>
                            ))}
                        </CustomPopoverContent>
                    </MenuItem>
                ))}
            </div>
            <div className={styles.toggleButtonContainer}>
                <VerticalToggleButtons />
            </div>
        </div>
    );
};

const Navbar = () => {
    const [visible, setVisible] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            if (currentScrollTop + windowHeight >= documentHeight) {
                // At the bottom of the page
                setVisible(false);
            } else if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
                // Scrolling down and not at the top
                setVisible(false);
            } else {
                // Scrolling up or at the top
                setVisible(true);
            }

            setLastScrollTop(currentScrollTop);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop]);

    return (
        <BarContainer
            className={styles.navBar}
            style={{
                transform: visible
                ? 'translate(-50%, 0)'
                : 'translate(-50%, -100px)',
            }}
        >
            <Toolbar
                style={{ display: 'flex', justifyContent: 'space-between' }}
            >
                <Link href='/' passHref>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            cursor: 'pointer',
                        }}
                    >
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
                </Link>
                <RightMenu />
            </Toolbar>
        </BarContainer>
    );
};

export default Navbar;
