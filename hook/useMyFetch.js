import axios from 'axios';
import { useEffect, useState } from 'react';
import { RAPID_API_KEY } from '../.env';

const rapidApiKey = RAPID_API_KEY;
const url = 'https://job-search-cc3e.onrender.com';
// const url = 'http://localhost:3000';

const useMyFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // console.log(data);

  const options = {
    method: 'GET',
    url: `${url}/${endpoint}`,
    params: {
      ...query
    },
    headers: {
      'X-RapidAPI-Key': rapidApiKey,
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    }
  };
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      if (Array.isArray(response.data)) setData(response.data);
      else setData([response.data]);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert('There is an error');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (query.query) {
      fetchData();
    }
  }, []);

  const refetch = () => {
    fetchData();
  };
  return { data, isLoading, error, refetch };
};

export default useMyFetch;
