import { useContext } from "react"
import { jokeContext } from "../context/JokesContext"

export const Random_jokes = () => {
  
  const {data,token,getToken} = useContext(jokeContext);

  return (
    <>
    {
    token?
    <div className="joke-card">
      <div className="joke-category">{data?.categories[0]}</div>
       <p className="">{data?.value}</p>
    </div>
    :""
    }
    {/* Reset Btn */}
    <div className="reset" onClick={()=>{localStorage.removeItem("category"); getToken(null)}}>Reset</div>
    </>
  )
}
