import React from "react"
import { faFilm, faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Mobilesidebarproject(){
    return(
        <ul className="d-flex flex-wrap" style={{backgroundColor:'black',listStyle:'none'}}>
            <li className="fs-3"><Link to='/projects/news' style={{textDecoration:'none',color:'white'}}><FontAwesomeIcon icon={faNewspaper} /> News</Link></li>
            <li className="fs-3 ms-5"><Link to='/projects/movies' style={{textDecoration:'none',color:'white'}}><FontAwesomeIcon icon={faFilm} /> Movies</Link></li>
        </ul>
    );
} 
export default Mobilesidebarproject;