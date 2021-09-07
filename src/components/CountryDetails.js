import React from 'react';
import { Link } from 'react-router-dom'
import countries from '../countries.json';

class CountryDetails extends React.Component {
  state = {
    name: '',
    capital: '',
    area: 0,
    borders: [],
    };
  
  componentDidUpdate = (prevProps) => {
    const foundIt = countries.find((country) => {
      return country.cca3 === this.props.match.params.cca3;
    });

    if (prevProps.match.params.cca3 !== this.props.match.params.cca3) {
      this.setState ({
        name: foundIt.name.common,
        capital: foundIt.capital,
        area: foundIt.area,
        borders: [...foundIt.borders],
      })
    }
  }

  borderNameRendering = (cca3) => {
    const foundIt = countries.find((country) => {
      return country.cca3 === cca3;
    });

    if (foundIt) {
      return foundIt.name.common;
    } else {
      return 'No country name found!'
    }
  };

  render () {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <table>
          <tbody>
            <tr>
              <td>{this.state.capital}</td>
            </tr>
            <tr>
              <td>Area:</td>
              <td> {this.state.area} km </td>
              <tr>
                <td>Borders:</td>
                <td>
                  <ul>
                    {this.state.borders.map((border) => {
                      return (
                        <li key={border}>
                          <Link to={`/$border`}>
                            {this.borderNameRendering(border)}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </td>
              </tr>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

//   render() {
//     return (
//       <div>
//         {this.state.country.map((element) => {
//           return <h1>{element.name.common}</h1>;
//         })}
//       </div>
//     );
//   }
// }

export default CountryDetails;
