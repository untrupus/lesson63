import React, {Component} from 'react';
import axiosOrders from "../../axiosOrders";

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    };

    componentDidCatch = async (error, errorInfo) => {
        this.setState({hasError: true, errorMessage: error});
        const errorText = {error: errorInfo.componentStack};
        await axiosOrders.post('/errors.json', errorText);
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