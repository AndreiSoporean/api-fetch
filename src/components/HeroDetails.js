import React from 'react';

class HeroDetails extends React.Component {
    render(){
        return(
            <div className="hero__info">
                { 
                    this.props.image && <img className="hero__thumbnail" src={this.props.image} alt=''></img> 
                }
                { 
                    this.props.name && <p className="hero__key">Name: 
                        <span className="hero__value"> {this.props.name}</span>
                    </p> 
                }
                { 
                    this.props.comics && <p className="hero__key">Comics: 
                        <span className="hero__value"> {this.props.comics}</span>
                    </p> 

                } 
                { 
                    this.props.comics && <p className="hero__key">Marvel Wiki: 
                        <span className="hero__value"><a href={this.props.details} target="blank"> {this.props.name}</a></span>
                    </p> 

                } 
                { 
                    this.props.description && <p className="hero__key">Description: 
                        <span className="hero__value"> {this.props.description}</span>
                    </p> 
                } 
                
                { 
                    this.props.copy && <p>{this.props.copy}</p> 
                }
                { 
                    this.props.error && <p className="hero__error">{this.props.error}</p> 
                }
            </div>
        );
    };
}

export default HeroDetails;