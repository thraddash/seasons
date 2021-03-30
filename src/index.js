import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
    // 2nd method of initializing state, same as constructor function and this.state
    state = { late: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message }) 
        );
    }    

    // Require render by React
    render() {   
        if (this.state.errorMessage && !this.state.lat){
            return <div> Error: {this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>
        }

        return <div>Loading!</div>
    }
}

ReactDom.render(
    <App />,
    document.querySelector('#root')
);