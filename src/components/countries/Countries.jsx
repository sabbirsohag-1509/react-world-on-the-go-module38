import React, { use, useState } from 'react';
import Country from '../Country/Country';

const Countries = ({countriesPromise}) => {

    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    const handleVisitedCountry = (country) => {
        console.log('handle visited country clicked', country)
        const newVisitedCountry = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountry);
    }

    const handleVisitedFlags = (flag) =>{
        const newVisitedFlags = [...visitedFlags, flag]
        setVisitedFlags(newVisitedFlags)
    }

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    return (
        <div className=''>
            <h2 className='text-3xl py-3'>In the Countries: {countries.length}</h2>
            <h3>Total Country Visited: {visitedCountries.length}</h3>
            <h3>Total Visited Flags: {visitedFlags.length}</h3>
            <ol> 
                {
                    visitedCountries.map((country)  => (
                        <li key={country.cca3.cca3}>{country.name.common}</li>))
                }
            </ol>
            <div className='grid grid-cols-3 gap-5 mt-14'> 
                {
                    countries.map(country => 
                    <Country
                     key={country.cca3.cca3} country={country}
                    handleVisitedCountry = {handleVisitedCountry}
                    handleVisitedFlags = {handleVisitedFlags}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;