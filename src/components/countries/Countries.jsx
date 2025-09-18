import React, { use } from 'react';
import Country from '../Country/Country';

const Countries = ({countriesPromise}) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    return (
        <div className=''>
            <h2 className='text-5xl mb-20'>In the Countries: {countries.length}</h2>

            <div className='grid grid-cols-3 gap-5'> 
                {
                    countries.map(country => <Country key={country.cca3.cca3} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;