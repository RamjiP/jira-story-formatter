import React from 'react';

function MultiLineText(props) {
    return (
        <div>
            <h4>{props.title}</h4>
            <textarea id={props.id} rows="8" cols="50" onChange={(e) => props.changed(e.target.value)}></textarea>
        </div>
    )
}

export default MultiLineText;