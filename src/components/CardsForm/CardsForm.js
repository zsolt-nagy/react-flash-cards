import React from 'react';
import './CardsForm.css';

function CardsForm(props) {
    const [frontSide, setFrontSide] = React.useState('');
    const [backSide, setBackSide] = React.useState('');
    function handleFrontSideChange(e) {
        setFrontSide(e.target.value);
    }
    function handleBackSideChange(e) {
        setBackSide(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault(); 
        alert( `${frontSide} ${backSide}` );
    }
    return (
        <form action="#" onSubmit={handleSubmit} className="form-container">
            <label className="textfield-container">
                Front side:
                <input type="text"  
                       onChange={handleFrontSideChange}
                       value={frontSide}
                       required
                       placeholder="Front side" 
                       className="js-front-side textfield-input" />
            </label>
            <label className="textfield-container">
                Back side:
                <input type="text" 
                       onChange={handleBackSideChange}
                       value={backSide}
                       required
                       placeholder="Back side" 
                       className="js-back-side textfield-input" />
            </label>
            
            <input type="submit" value="Submit Card" className="submit-button" />
        </form>

    );
}

export default CardsForm;