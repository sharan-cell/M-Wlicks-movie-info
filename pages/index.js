
import Image from 'next/image'
import Header from '../components/Header'
import Nav from '../components/Nav'
import requests from '../utils/requests';
import Results from '../components/Results';
import Head from 'next/head';



export default function Home({results}) {


  return (
    <div className="select-none" >
     <Head>
        <title>M-Wlikcs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  
      <Header/>
    
      <Nav/>

      <Results results={results} />
    </div>
      
      
      
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3/${requests[genre]?.url || requests.fetchTopRated.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
}
