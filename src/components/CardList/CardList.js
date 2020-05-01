import React from 'react';

import Card from '../Card/Card';
import './CardList.css';


function CardList({ cardData, deleteItem }) {
    return ( 
        <div className="card-list-swimlane">
            {cardData.map( (props) => 
                <Card key={props.id} deleteItem={deleteItem} {...props} /> )}
        </div>
    );
}

export default CardList;