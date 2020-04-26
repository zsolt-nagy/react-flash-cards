import React from 'react';

function CardsForm(props) {
    function handleSubmit(e) {
        e.preventDefault();
    }
    return (
        <form action="#" onSubmit={handleSubmit}>
            <input type="text" placeholder="Front side" className="js-front-side" />
            <input type="text" placeholder="Back side" className="js-back-side" />
            <button>Submit Card</button>
        </form>

    );
}

export default CardsForm;