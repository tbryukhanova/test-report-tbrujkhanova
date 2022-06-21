import fetch from 'node-fetch';
import urls from '../config/urls';

const Favorites = {
    idFavoritesWithoutApikey: async(id, auth) => {
    if (auth === 'undefined'){
      const r = await fetch(`${urls.airportgap}api/favorites/${id}?`, { method: 'GET',
                                                                         headers:{
                                                                             "Accept": "application/json"}});
      return r; 
    }  
    else{
      const r = await fetch(`${urls.airportgap}api/favorites/${id}?`, { method: 'GET',
                                                                         headers:{
                                                                             "Accept": "application/json", 
                                                                             "Authorization": auth}});
      return r;
    }
  }
}

export default Favorites;