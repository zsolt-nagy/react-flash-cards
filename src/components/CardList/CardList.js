import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import Card from '../Card/Card';
import './CardList.css';


function CardList({ cardData }) {
    return ( 
        <div className="card-list-swimlane">
            {cardData.map( (props) => <Card key={uuidv4()} {...props} /> )}
        </div>
    );
}

export default CardList;