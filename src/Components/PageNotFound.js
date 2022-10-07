import { Link } from "react-router-dom"

export default function PageNotFound (){
  return (
    <div className="not-found">
      <h2>Error</h2>
      <h1 >404</h1>
      <p>Page not Found</p>
      <h4> <Link to="/">Back to the homepage...</Link> </h4>
    </div>
  );
};
 
