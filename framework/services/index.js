import Favorites from './favorites.service';

const api = () => ({
  Favorites: () => ({ ...Favorites }),
});

export default api;