import React from 'react';

import Title from './components/Title';
import TitleSearch from './components/TitleSearch';
import HeroDetails from './components/HeroDetails';

const md5 = require('md5');

const publicKey = '9818e7857d45284622161693afb0a68b';
const privateKey = '9d6fb8a1b684b16dd68d5b7b07a2256e233a103e';
const ts = '1';

class App extends React.Component {
  
  state = {
    name: undefined,
    description: undefined,
    image: undefined,
    comics: undefined,
    details: undefined,
    error: undefined
  }
  
  render() {
    return(
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Title />
                </div>
                <div className="col-xs-7 results-container">
                  <TitleSearch nameSearch={this.getSuperHero}/>
                  <HeroDetails 
                    name={this.state.name}
                    description={this.state.description}
                    image={this.state.image}
                    comics={this.state.comics}
                    details={this.state.details}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }


  getSuperHero = async (e) => {
    e.preventDefault();
    const superHero = e.target.elements.superhero.value;
    const hash = md5(ts+privateKey+publicKey);
    const url = 'https://gateway.marvel.com:443/v1/public/characters?name='+superHero+'&apikey='+publicKey;
    const call = url+'&ts=1&hash='+hash;
    const API_CALL = await fetch(call);
    const data = await API_CALL.json();

    // checking for input data and a valid response
    if(superHero && data.data.results[0]) {
      // compose the image URL using thumbnail and extension from the API 
      var  composedImage = data.data.results[0].thumbnail.path + '.'+ data.data.results[0].thumbnail.extension;
      this.setState({
        name: data.data.results[0].name,
        description: data.data.results[0].description,
        image: composedImage,
        comics: data.data.results[0].comics.available,
        details: data.data.results[0].urls[1].url,
        error: ""
      });
    } else {
      this.setState({
        name: undefined,
        description: undefined,
        image: undefined,
        comics: undefined,
        details: undefined,
        error: 'Hero name is misspelled or blank...'
      });
    }
    
   
  }
}

export default App;