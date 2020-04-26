import React from 'react';

class ResultScreen extends React.Component {
    render() {
        return (
            <div className="result-screen"
            id = "display">
               {this.props.currentValue}
            </div>
        );
    }
}


export default ResultScreen;