import React from 'react';

const Phrase = ({quote, changeQuote, color}) => {

    return (
        <div>
            <h2 style={{color}} >{quote}</h2>
        </div>
    );
};

export default Phrase;