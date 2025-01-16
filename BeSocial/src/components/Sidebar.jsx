import { Link } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {

  const [selectedtab, setselectedtab] = useState("Home");
return(
<div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar" style={{width: "280px"}}>
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
      <span className="fs-4">Be Social</span>
    </a>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item"
    onClick={() =>{
       setselectedtab("Home")
    }}
      >
        <Link to="/" className= {`nav-link text-white 
            ${selectedtab == 'Home' && 'active'}
        `}
             aria-current="page">         
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
          Home
        </Link>
      </li>
      <li
        onClick={() =>{
     setselectedtab("Create Post")
    }}
    >
        <Link to="/create-post" className={`nav-link text-white 
             ${selectedtab == 'Create Post' && 'active'}
         `} >
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
          Create Post
        </Link>
      </li>
    </ul>
    <hr/>
  </div>
)
}
  export default Sidebar;