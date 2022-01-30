import React from "react"
import { faFilm, faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Mobilesidebarproject(){
    return(
        <ul className="d-flex flex-wrap" style={{backgroundColor:'black',listStyle:'none'}}>
            <li className="fs-3"><FontAwesomeIcon icon={faNewspaper} style={{ width:'30px',height:'30px', marginTop:'-5px'}} /> News</li>
            <li className="fs-3 ms-5"><FontAwesomeIcon icon={faFilm} style={{ width:'30px',height:'30px', marginTop:'-5px'}}/> Movies</li>
        </ul>
    );
} 
export default Mobilesidebarproject;