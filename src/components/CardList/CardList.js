import React from 'react';

import Card from '../Card/Card';
import './CardList.css';


function CardList({ cardData }) {
    return ( 
        <div className="card-list-swimlane">
            {cardData.map( (props) => 
                <Card key={props.id} {...props} /> )}
        </div>
    );
}

export default CardList;