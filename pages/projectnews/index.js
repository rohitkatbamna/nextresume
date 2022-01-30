import React from "react";
import Image from "next/image";
import Resumepagenavbar from "../../components/resumepage-navbar/resumepage-navbar";
import Head from 'next/head';
import Projectsidebar from "../../components/project-details-page-sidebar/project-details-page-sidebar";


function Projects(){
    return(
        <div>
            <Head>
                <title>Projects</title>
                <meta name="description" content="Rohit Katbamna Resume" />
                <link rel="icon" href="dev-brands.svg" />
            </Head>
            <Resumepagenavbar />
            <Projectsidebar />

        </div>
    );
}
export default Projects;