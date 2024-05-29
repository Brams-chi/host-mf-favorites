import { useState, useEffect } from 'react';
import { Paper, Typography } from '@mui/material';
import ListFavoritesHeroes from './ListFavoriteHeroes';
import EmptyState from './EmptyStates';


const FavoriteHeroes = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const handleAddFavoriteHero = (event) => {
      setFavorites((prevFavorites) => [...prevFavorites, event.detail]);
    };

    window.addEventListener('add-favorite-hero', handleAddFavoriteHero);

    return () => {
      window.removeEventListener('add-favorite-hero', handleAddFavoriteHero);
    };
  }, []);

  return (
    <Paper
      elevation={0}
      sx={{
        padding: '20px 0px',
        minWidth: '100vw'
      }}
    >
      <Typography
        sx={{
          marginLeft: '20px'
        }}
        variant="h4"
        color="text.primary"
      >
        Tus Comics Marvel Favoritos
      </Typography>
      {favorites.length >= 1 ? (
        <ListFavoritesHeroes favorites={favorites} />
      ) : (
        <EmptyState />
      )}
    </Paper>
  );
};

export default FavoriteHeroes