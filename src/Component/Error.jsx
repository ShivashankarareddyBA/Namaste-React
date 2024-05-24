import {useRouteError} from "react-router-dom"
const Error =()=>{
  const err = useRouteError();
  console.log(err);
  return (
    <div className="my-50px flex flex-col items-center justify-center text-center">
      <h2>🤖OOPs.!!</h2>
      <h2>{err.status} : {err.statusText}..!</h2>
      
      <h2> Something went wrong....!</h2>
    </div>
  
  )
}
export default Error;