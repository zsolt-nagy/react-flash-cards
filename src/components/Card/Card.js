import React from 'react';
import './Card.css';


// State change ---> React renders the DOM ---> User event (click)
//   ^                                               |
//   ------------event handler------------------------

class Card_ClassBased extends React.Component { 
    state = {
        isFront: true
    }
    handleClick = () => {
        this.setState(function(oldState) {
            return {
                isFront: !oldState.isFront
            }
        });
    }

    componentDidMount() {
        // called when the component first mounts to the DOM 
        // - data loading, e.g. from APIs (Application Programming Interfaces)
        // Do not load data inside the constructor! Load data in the componentDidMount
        console.log('componentDidMount', this.props.frontSide);
    }

    componentDidUpdate( previousProps, previousState ) {
        // Data loading (updates)
        console.log('componentDidUpdate', this.props.frontSide);
    }

    render() {
        const isFront = this.state.isFront;
        const frontClassList = `card__front ${(isFront ? "" : "hidden")}`;
        const backClassList = `card__back ${isFront ? "hidden" : ""}`;
        return ( 
            <div className="card" onClick={this.handleClick}>
                <div className={frontClassList}>{this.props.frontSide}</div>
                <div className={backClassList}>{this.props.backSide}</div>
            </div>  
        );
    }
}


const Card_Functional = function({ frontSide, backSide }) {
    // State variables
    const [isFront, changeFace] = React.useState(true);
    // Event handlers
    function handleClick() {
        changeFace(oldValue => !oldValue);
    }
    const frontClassList = `card__text ${(isFront ? "" : "hidden")}`;
    const backClassList = `card__text ${isFront ? "hidden" : ""}`;
    const cardClassList = `card  ${isFront ? 'card__front' : 'card__back'}`;
    return ( 
        <div className={cardClassList} onClick={handleClick}>
            <div className={frontClassList}>
                {frontSide}
            </div>
            <div className={backClassList}>
                {backSide}
            </div>
        </div>  
    );
}

export default Card_Functional;