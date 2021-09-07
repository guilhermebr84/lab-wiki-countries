import React  from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

function CountriesList() {
  return (
    <div className="col-5" style={{ maxHeight: '85vh', overflow: 'scroll' }}>
      <div className="list-group">
        {countries.map((nameCountry) => {
          return (
            <Link activeClassname="active" className="list-group-item list-group-item-action"
              to={`/${nameCountry.cca3}`}
              key={nameCountry.cca3}
              >
              {nameCountry.flag} {nameCountry.name.common}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CountriesList;

/* // <div className="row">
    //     <h1>Find the Country</h1>
    //     {countries.map((countryObj) => */
/* //     return <div className="col-4"> 
    //     <div className="border">
    //     <h2>{countryObj.name}</h2>
    //     </div>
    //     <Link className="btn btn-primary" */
/* //     to={`/country/${countryObj.name}`}>See All</Link>
    //     </div>})
    //     }
    // </div> */
