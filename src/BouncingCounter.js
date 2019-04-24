import React from 'react';

class BouncingCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
    }

    componentDidMount() {
        let interval;
        interval = setInterval(() => {
            this.setState({
                number: this.state.number + 10
            })
        }, 500);

        if (this.state.number === 100) {
            clearInterval(interval);
            interval = setInterval(() => {
                this.setState({
                    number: this.state.number - 10
                })
            }, 500);
        }
        if (this.state.number === 0) {
            clearInterval(interval);
            interval = setInterval(() => {
                this.setState({
                    number: this.state.number + 10
                })
            }, 500);
        }
        
    }

    render() {
        return (
            <h1>{this.state.number}</h1>
        )
    }

}


export default BouncingCounter;