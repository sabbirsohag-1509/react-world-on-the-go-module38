
import { Suspense } from 'react'
import './App.css'
import Countries from './components/countries/Countries'



const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json())
function App() {


  return (
    <>
      
    <Suspense fallback={<p>Nadir On the Goooo........</p>}> 
      <Countries countriesPromise={countriesPromise}> </Countries>
    </Suspense>

    </>
  )
}

export default App
