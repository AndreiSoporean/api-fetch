import React from 'react';

class Title extends React.Component{
    render() {
        return(
            <div>
                <h1 className="title-container__title">Find your Marvel Super Hero</h1>
                <h3 className="title-container__subtitle">Using an open source API to fetch data and display it</h3>
                <a className="title-container__copyright" href="http://marvel.com" target="blank">Data provided by Marvel. © 2018 MARVEL</a>
            </div>
        );
    };
  
}

export default Title;