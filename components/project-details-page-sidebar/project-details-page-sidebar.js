import { faFilm, faNewspaper} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

function Projectsidebar(){
    return(
        <>
        <div style={{borderRadius:'none',fontFamily:'Roboto, sans-serif'}}>
            <div>
                <div className="card shadow" style={{width:'195px',height:'1920px',backgroundColor:"#000000"}}>
                    <div className="card-body position-fixed" style={{backgroundColor:"#000000",width:'195px',color:'white',height:'1920px'}}>
                        <div>
                            <h6 style={{color:'#E7E7E7'}}>Navigation</h6>
                            <ul style={{listStyle:'none',lineHeight:'2.5em',cursor:'pointer',fontSize:'17px',fontWeight:'900'}}>
                                <li>
                                    <Link href="/projectnews" passHref>
                                        <div>    
                                            <FontAwesomeIcon icon={faNewspaper} style={{ width:'30px',height:'30px', marginTop:'-5px'}}/> News
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/projectmovies" passHref>
                                        <div>
                                            <FontAwesomeIcon icon={faFilm} style={{ width:'30px',height:'30px', marginTop:'-5px'}}/> Movies
                                        </div>
                                    </Link>
                                </li>
                            
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Projectsidebar;