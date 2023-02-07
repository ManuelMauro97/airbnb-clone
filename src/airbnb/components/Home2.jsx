import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { locations as cardLocations } from '../constants/locations';
import { Cards } from './Cards';


export const Home2 = () => {
  const [cards] = useState(cardLocations);
  if (!cards.length) {
    return null;
  }
  return (
    <Box sx={{ mx: 2, padding: 5 }}>
      <Grid container rowSpacing={3} columnSpacing={3}>
        {cards.map((location) => {
          return (
            <Grid key={location.id} item xs={12} sm={4} md={4} lg={3}>
              <Cards location={location} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

