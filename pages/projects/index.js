import React from "react";
import Image from "next/image";
import Resumepagenavbar from "../../components/resumepage-navbar/resumepage-navbar";
import Head from 'next/head';


function Projects(){
    return(
        <div>
            <Head>
                <title>Projects</title>
                <meta name="description" content="Rohit Katbamna Resume" />
                <link rel="icon" href="dev-brands.svg" />
            </Head>
            <Resumepagenavbar />
        </div>
    );
}
export default Projects;