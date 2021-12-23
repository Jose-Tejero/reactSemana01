import React from 'react';

const Author = ({author, changeQuote, color}) => {

    const styles = {
        background: color,
        boxShadow: `10px 10px 15px #000`
    }

    return (
        <div>
            <h4 style={{color}} >{author}</h4>
            <button onClick={changeQuote} style={styles} >
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevrons-right" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <polyline points="7 7 12 12 7 17" />
                    <polyline points="13 7 18 12 13 17" />
                </svg>
            </button>
        </div>
    );
};

export default Author;