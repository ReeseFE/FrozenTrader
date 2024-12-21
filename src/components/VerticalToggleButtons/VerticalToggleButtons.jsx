import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ToggleButton from '@mui/material/ToggleButton';
import { styled } from '@mui/system';
import styles from './VerticalToggleButtons.module.css';
import { menuData } from '@/constant/homePage';
import { Box, Typography } from '@mui/material';

const CustomToggleButton = styled(ToggleButton)(({ theme }) => ({
  color: 'rgb(170, 170, 170)',
  backgroundColor: 'rgba(255, 255, 255, 0.0)',
  position: 'fixed', // 固定在屏幕上
  top: '10px', // 距离顶部的距离
  right: '10px', // 距离右边的距离
  zIndex: 1100, // 确保在菜单之上
  '&.Mui-selected': {
    color: 'black',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  fontSize: '1rem',
}));

export default function VerticalToggleButtons() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [subMenuOpen, setSubMenuOpen] = React.useState({});

  const handleToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleSubMenuToggle = (category) => {
    setSubMenuOpen((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <div>
      <CustomToggleButton value='list' aria-label='list' onClick={handleToggle}>
        {menuOpen ? <CloseIcon fontSize='medium' /> : <MenuIcon fontSize='medium' />}
      </CustomToggleButton>
      {menuOpen && (
        <div className={styles.fullScreenMenu}>
          <ul>
            {Object.entries(menuData).map(([category, items]) => (
              <li key={category}>
                <div
                  onClick={() => handleSubMenuToggle(category)}
                  className={styles.category}
                >
                  <strong>{category}</strong>
                </div>
                {subMenuOpen[category] && (
                  <ul className={styles.subMenu}>
                    {items.map((item, index) => (
                      <li key={index}>
                        <Box
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
                            sx={{ fontWeight: 'bold', whiteSpace: 'nowrap' }}
                          >
                            {item.title}
                          </Typography>
                          <Typography
                            variant='body2'
                            sx={{ color: 'gray', whiteSpace: 'nowrap' }}
                          >
                            {item.description}
                          </Typography>
                        </Box>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
