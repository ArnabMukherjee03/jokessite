import { useContext, useEffect, useState } from 'react';
import useData from '../hooks/useData';
import { jokeContext } from '../context/JokesContext';

export const Catagories = () => {
  const {data,loading} = useData("/categories");
  const [categories,setCategories] = useState([]);
  const {token,getToken} = useContext(jokeContext);

  useEffect(()=>{
    setCategories(data)
  },[data])

  const setCategory = (data)=>{
    getToken(data);
    localStorage.setItem("category",data)
  }

  if(loading){
    return <div className='loading'>
      <h1>Chuck Norris Joke Genarator</h1>
      <div className="loading-line">

      </div>
    </div>
  }

  return (
    <div className='catagories_container'>
      {
        categories?.map((data,index)=> (<button disabled={token === data} onClick={()=>setCategory(data)} className='catagories' key={index}>{data}</button>))
      }
    </div>
  )
}
