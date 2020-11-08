// import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import HomePage from '../components/home-page/HomePage'

export default function Home({data}) {
 
      
  
  return (
    <HomePage data={data}/>
  )
}
export async function getServerSideProps({query}) {
  const {launch,landing,year} =query
  let url = 'https://api.spacexdata.com/v3/launches?limit=100'
  if(launch) {

    url = `${url}&launch_success=${launch}`
   
    
    }
    if(landing) {
    
    url = `${url}&land_success=${landing}`
    
    
    }
    if(year) {
    
    url = `${url}&launch_year=${year}`
   
    
    }
  // Fetch data from external API
  const res = await fetch(url)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}