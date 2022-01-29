import React from "react";
import styles from './resumepage-main-details.module.css';
import Typical from 'react-typical';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBootstrap, faCss3Alt, faHtml5, faJsSquare, faNodeJs, faPython, faReact, faSass } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faLaptop, faMobile } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image'


function Resumepagemaindetails(){
    const d = new Date();
    d.getTime();
    return(
    <div className={styles.everything}>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="card"  style={{borderRadius:'16px',borderTop:'10px solid white',borderBottom:'10px solid white'} }>
                        <div className="card-body" id={styles.typical}>
                            <div className="text-center fw-bold" id={styles.rohit} >
                                <Typical
                                    steps={['Hello World', 3000, 'ハローワールド', 3000 , 'नमस्ते दुनिया', 3000, 'કેમ છો દુનિયા', 3000 , '전 세계 여러분 안녕하세요', 3000 ,' Hej världen',3000, 
                                    'Salut tout le monde', 3000 ,'হ্যালো ওয়ার্ল্ড', 3000 ,'Всем привет', 3000,'Γειά σου Κόσμε', 3000, 'Rytsas vys',3000, 'ሰላም ልዑል', 3000]}
                                    loop={Infinity}
                                    wrapper="p"
                                />
                            </div>
                            <div className="text-center">
                                <h1>I develop react based websites</h1> 
                            </div>
                            <div className="text-center mt-2">
                                <h2 className="fw-bold">Something to say about myself</h2>
                                <h3>Front End Developer with experience in blending art of design with skill 
                                    of programming to deliver engaging user experience through efficient website 
                                    development, proactive feature optimization, and relentless debugging.
                                </h3>
                            </div>
                            <div className="text-center">
                                <p className="fs-2 ms-4 fw-bold">Skills I have</p>
                                <ul id={styles.skills}>
                                    <li><FontAwesomeIcon icon={faHtml5} style={{ width:'30px',height:'30px', marginTop:'-5px'}} /> HTML</li>
                                    <li><FontAwesomeIcon icon={faCss3Alt} style={{ width:'30px',height:'30px', marginTop:'-5px'}} /> CSS</li>
                                    <li><FontAwesomeIcon icon={faJsSquare} style={{ width:'30px',height:'30px', marginTop:'-5px'}} /> JavaScript</li>
                                    <li className="d-flex flex-wrap justify-content-center align-items-center">
                                        <Image                                    
                                        src="/api.png"
                                        alt="api rest picture"
                                        width={40}
                                        height={40}
                                        /> REST API
                                    </li>
                                    <li><FontAwesomeIcon icon={faBootstrap} style={{ width:'30px',height:'30px', marginTop:'-5px'}} /> Bootstrap</li>
                                    <li className="resume-page-main-details-what-skills-i-have-responsive-web-design"><FontAwesomeIcon icon={faMobile} style={{ width:'30px',height:'30px', marginTop:'-5px'}}/> <FontAwesomeIcon icon={faLaptop} style={{ width:'30px',height:'30px', marginTop:'-5px'}}/> <FontAwesomeIcon icon={faDesktop} style={{ width:'30px',height:'30px', marginTop:'-5px'}}/> Responsive Web Design</li>
                                    <li><FontAwesomeIcon icon={faReact} style={{ width:'30px',height:'30px', marginTop:'-5px'}}/> React</li>
                                    <li className="d-flex flex-wrap justify-content-center align-items-center">
                                    <Image                                    
                                        src="/redux.svg"
                                        alt="Redux Logo"
                                        width={40}
                                        height={40}
                                    /> Redux</li>
                                    <li><FontAwesomeIcon icon={faNodeJs} style={{ width:'30px',height:'30px', marginTop:'-5px'}}/> Node.js</li>
                                    <li><FontAwesomeIcon icon={faSass} style={{ width:'30px',height:'30px', marginTop:'-5px'}} /> SASS</li>
                                    <li><FontAwesomeIcon icon={faPython} style={{ width:'30px',height:'30px', marginTop:'-5px'}} /> Python</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12">
                    <div className="card text-white text-center" id={styles.educations} style={{ borderRadius:'16px',borderTop:'10px solid white', borderBottom:'10px solid white'}}>
                        <div className="card-body" style={{backgroundColor:'black'}}>
                            <p className="fs-4">Education I have done</p>
                            <p className="fs-3">Bachelor of Engineering in Electronics and Telecommunication</p>
                            <p className="fs-3">From Sant Gadge Baba Amravati University</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12">
                    <div className="card text-white text-center resume-page-main-details-current-place-of-employment" style={{ borderRadius:'16px',borderTop:'10px solid white', borderBottom:'10px solid white'}}>
                        <div className="card-body" style={{backgroundColor:'black'}}>
                            <p className="fs-4">My Experience</p>
                            <p className="fs-3 fw-bold">React Developer</p>
                            <p className="fs-3">at Ixiono</p>
                            <p className="fs-3">From September 2021 - Present</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <p className="fs-3 text-white mt-3">Check out projects I have done Here</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <p className="fs-3 text-white mt-3">Download my resume <a href="https://drive.google.com/file/d/1Q3i9zdDapLgeKvWSMUB40SENRuLPI_gY/view?usp=sharing" download style={{color:'white'}}>Here</a></p>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Resumepagemaindetails;