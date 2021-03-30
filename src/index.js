import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);

        // Only time we do direct assignment to this.state
        this.state = { lat: null };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // to update state function, use setState
                this.setState({ lat: position.coords.latitude });


            },
            (err) => console.log(err)
        );
    }

    // Require render by React
    render() {   
        return <div>Latitude: {this.state.lat}</div>;
    }
}

ReactDom.render(
    <App />,
    document.querySelector('#root')
);