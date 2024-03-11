import { useState, useEffect } from 'react';
import axios_instance from '../config/axios_config';
import { toast } from 'react-toastify';

const useData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const {data,status} = await axios_instance.get(url);
        if(url === "/categories" && status === 200){
           toast.success("Catagories Fetched Successfully")
        }

        if(url.includes("/random")&& status === 200){
          toast.success("Jokes fetched Successfully")
       }
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useData;
