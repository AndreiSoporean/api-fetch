import React from 'react';

class TitleSearch extends React.Component {
    render(){
        return(
            <form  onSubmit={this.props.nameSearch}>
                <input type='text' name='superhero' placeholder='SuperHero...'></input>
                <button>Search Super Hero</button>
            </form>
        );
    };
}

export default TitleSearch;