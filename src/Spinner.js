import React from 'react';

const Spinner = () => {
    return (
        <div className="ui active dimmer">
            <div classname="ui big text loader">
                Loading...
            </div>
        </div>
    );
};

export default Spinner;