import { faDev } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from './resumepage-navbar.module.css';
import Link from 'next/link';

function Resumepagenavbar(){
    return(
            <nav className="navbar navbar-expand-lg navbar-dark sticky-top" id={styles.all}>
                <div className="container-fluid">
                    <div className="navbar-brand" id={styles.two}>
                        
                    <Link href="/" passHref><span className="text-center" id={styles.three}><FontAwesomeIcon icon={faDev} style={{ width:'30px',height:'30px', marginTop:'-5px'}}/> Rohit Katbamna</span></Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link href="/" passHref><div className="nav-link" aria-current="page" >Home</div></Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/projectnews" passHref><div className="nav-link">Projects</div></Link>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link">Certificates</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        
    );
}
export default Resumepagenavbar;
