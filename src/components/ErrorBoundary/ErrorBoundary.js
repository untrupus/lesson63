import React, {Component} from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    };

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true, errorMessage: error});
    }

    render() {
        if (this.state.hasError) {
            return <div>Oops...</div>
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;