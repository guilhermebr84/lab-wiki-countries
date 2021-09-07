import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'; // roteador e rota
import About from './components/About';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import 'bootstrap/dist/css/bootstrap.css'

class App extends React.Component {
  render() {
  return (
    <BrowserRouter>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
          <div className="container">
            <a className="navbar-brand" href="/">
              WikiCountries by Guilherme Rosa
            </a>
          </div>
          <li className="nav-item active">
          <a className="navbar-brand" href="/">
          <Route exact path="/About" component={About} />
          </a>    
          </li>
        </nav>
        <div className="container">
          <div className="row">
            <div
              className="col-5"
              style={{ maxHeight: '90vh', overflow: 'scroll' }}>

              <Route exact path="/About" component={About} />

              <CountriesList />
            </div>
            <div className="col-7">

              <Route path="/:cca3" component={CountryDetails} />

            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
}




{/* <Link to="/About" className="nav-link">
About
</Link> */}
// function App() {
//   return (
//     <div>
//       <Navbar />
//       {/* definir roteador "BrowserRoute" e dentro define as rotas (as rotas tem um caminho "path" e os componentes que vão renderizar */}
//       <BrowserRouter>
//         {/* passar props para rota - https://reactrouter.com/web/api/Route/route-props - path, exact, strict, location, sensitive*/}
//         {/* Route obrigatoriamente recebe uma props, nesse caso recebe "path" - caminho - para carregar um componente. Path recebe uma string e na string define o caminho*/}
//         <Switch>
        
//           <Route exact path="/About" component={About} />

//           <Route path="/CountriesList" component={CountriesList} />

//           <Route path="/:cca3" component={CountryDetails} />
//         </Switch>
//       </BrowserRouter>
//     </div>
//   );
// }

export default App;
