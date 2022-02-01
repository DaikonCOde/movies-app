import { useState, useEffect } from "react";
import axios from "axios";

import config from "../config"

export const useGetComingSoonMovies = () => {

  const [ data, setData ] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [ error, setError] = useState(null);
  
  const getComingSoonMovies = async () => {
    setIsLoading(true);
    try {
      // fetch with axios 
      const { data } = await axios.get(`${config.BASE_URL}movie/upcoming?api_key=${config.API_KEY}`);
      // slice data
      const sliceListMovies = data.results.slice(0, 1)
      // set data
      setData(...sliceListMovies);
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  }

  useEffect( () => {
    getComingSoonMovies()

  }, [])

  return [ data, isLoading, error ]

}

