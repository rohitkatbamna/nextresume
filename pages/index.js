import Head from 'next/head'
import Resumepagemaindetails from '../components/resumepage-main-details/resumepage-main-details'
import Resumepagenavbar from '../components/resumepage-navbar/resumepage-navbar'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Rohit Katbamna</title>
        <meta name="description" content="Rohit Katbamna Resume" />
        <link rel="icon" href="dev-brands.svg" />
      </Head>
      <header>
        <Resumepagenavbar />
      </header>
      <main>
        <Resumepagemaindetails />
      </main>
      <footer>
      </footer>
    </div>
  )
}
