import { useContext, useEffect, useState } from 'react';
import useData from '../hooks/useData';
import { jokeContext } from '../context/JokesContext';

export const Catagories = () => {
  const {data} = useData("/categories");
  const [categories,setCategories] = useState([]);
  const {getToken} = useContext(jokeContext);

  useEffect(()=>{
    setCategories(data)
  },[data])

  const setCategory = (data)=>{
    getToken(data);
    localStorage.setItem("category",data)
  }

  return (
    <div className='catagories_container'>
      {
        categories?.map((data,index)=> (<button onClick={()=>setCategory(data)} className='catagories' key={index}>{data}</button>))
      }
    </div>
  )
}
