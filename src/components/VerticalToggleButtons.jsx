import * as React from 'react';
import ViewListIcon from '@mui/icons-material/ViewList';
import ToggleButton from '@mui/material/ToggleButton';

export default function VerticalToggleButtons() {
  const [view, setView] = React.useState('list');

  const handleChange = (event, nextView) => {
    setView(nextView);
  };

  return (
    <ToggleButton value="list" aria-label="list">
      <ViewListIcon />
    </ToggleButton>
  );
} 