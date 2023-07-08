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
      'X-RapidAPI-Key': '016a142e8dmsh3d1fead2cddff98p151922jsn077769793157',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    },
    params: {...query},
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.request(options);
    //   console.log(response);
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

