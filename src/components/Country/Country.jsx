import React, { useState } from 'react';

const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    // console.log(country?.languages?.languages?.due)
    console.log(handleVisitedCountry)
    const [visited, setVisited] = useState(false);

    const handleVisited = () =>{
        setVisited(!visited)
        handleVisitedCountry(country)
    }
    return (
        <div className= {`border border-cyan-300 p-5 rounded-xl ${visited && 'country-visited'}`} >
            <img className='w-64 h-40 flex flex-col' src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h2 className='text-3xl font-semibold mt-3'>Name: {country.name.common}</h2>
            <p className='text-xl font-semibold mt-1'>Population: {country.population.population}</p>
            <p className='text-xl font-semibold mt-1'>Area: {country.area.area} <br /> Type: {
                country.area.area > 1000000 ? 'Big Country':'Small Country'
                }</p>
            <p className='text-xl font-semibold mt-1'>Capital: {country.capital.capital}</p>
            <p className='text-xl font-semibold mt-1'>Language: {}</p>
            <p className='text-xl font-semibold mt-1'>Region: {country.region.region}</p>
            <button className='mt-3' onClick={handleVisited} > 
                {visited ? 'Visited' : 'Not Visited'} </button>

            <button onClick={() => {handleVisitedFlags(country.flags.flags.png)}}>Add Visited Flag</button>
        </div>
    );
};

export default Country;