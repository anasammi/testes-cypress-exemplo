import { useEffect, useState } from 'react';
import GlobalContext from './GlobalContext';
import axios from 'axios';
import { BASE_URL } from '../constants/url';
import { createDogObjectFromUrl } from '../utils/utils';

const GlobalState = ({ children }) => {
  const [ dogs, setDogs ] = useState([])
  const [ favorites, setFavorites ] = useState([])

  useEffect(() => {
    fetchDogs()
  }, [])

  const fetchDogs = () => {
    axios.get(BASE_URL + "/10") // gera 10 dogs aleatórios
    .then((res) => {
      const urls = res.data.message // retorna lista de urls em string
  
      // modelamos em objetos a partir das urls (veja a pasta /utils)
      const dogs = urls.map(url => {
        return createDogObjectFromUrl(url)
      })

      setDogs(dogs)
    })
    .catch((err) => {
      console.log("Erro ao buscar a lista de dogs")
      console.log(err)
    })
  }

  const addToFavorites = (dog) => {
    const newFavorites = [...favorites]
    newFavorites.push(dog)

    setFavorites(newFavorites)
  }

  const removeFromFavorites = (dogToRemove) => {
    const filteredFavorites = favorites.filter((dog) => {
      return dog.id !== dogToRemove.id
    })

    setFavorites(filteredFavorites)
  }

  const data = {
    dogs: dogs,
    favorites,
    fetchDogs,
    addToFavorites,
    removeFromFavorites
  }

  return (
    <GlobalContext.Provider value={data}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;