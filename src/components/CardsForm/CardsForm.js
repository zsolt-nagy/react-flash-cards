import React from 'react';
import './CardsForm.css';

function CardsForm(props) {
    function handleSubmit(e) {
        e.preventDefault();
    }
    return (
        <form action="#" onSubmit={handleSubmit} className="form-container">
            <label className="textfield-container">
                Front side:
                <input type="text" 
                       placeholder="Front side" 
                       className="js-front-side textfield-input" />
            </label>
            <label className="textfield-container">
                Back side:
                <input type="text" 
                       placeholder="Back side" 
                       className="js-back-side textfield-input" />
            </label>
            
            <input type="submit" value="Submit Card" className="submit-button" />
        </form>

    );
}

export default CardsForm;