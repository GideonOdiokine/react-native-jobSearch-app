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
      'X-RapidAPI-Key': '047f813d36msh5162c2cd0894432p1a120djsna7d80332f036',
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

