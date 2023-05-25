import {useState, useEffect} from 'react';
import axios from 'axios';



export const useFetch = (url, query) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${url}`,
    headers: {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': '21b4c9853emshdf9bc0eead1a265p1d71e7jsne7e2aca335d6',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    },
    params: {...query},
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.request(options);
      console.log(response);
      setData(response.data.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      alert('There is an error, please try again later');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setLoading(true);
    fetchData();
  };

  return {data, error, loading, refetch};
};

