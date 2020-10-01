import * as React from 'react';
import ErrorPage from './ErrorPage';
import { connect } from 'react-redux';
import { AppState } from '../../reducer';

interface StateFromProps {
    isError: boolean;
    errorCode?: number;
}

interface OwnStateProps {
    error?: any;
    info?: React.ErrorInfo;
}

class ErrorBoundary extends React.Component<StateFromProps, OwnStateProps> {
    constructor(props: any) {
        super(props);
        this.state = {
            error: undefined,
            info: undefined
        };
    }

    componentDidUpdate(prevProps: StateFromProps) {
        if (prevProps.isError && !this.props.isError) {
            this.setState({
                error: undefined,
                info: undefined
            });
        }
    }

    componentDidCatch(error: Error, info: React.ErrorInfo) {
        this.setState({
            error: error,
            info: info
        });

        if (process.env.NODE_ENV && process.env.NODE_ENV !== 'production') {
             /* tslint:disable:no-console */
            console.log(`Error:${error}`);
            console.log(`ErrorInfor:${info}`);
             /* tslint:enable:no-console */
        }
    }

    render() {
        return this.props.isError && !this.props.errorCode ? <ErrorPage /> : this.props.children;
    }
}

const mapStateToProps = (state: AppState): StateFromProps => {
    return {
        isError: state.error.isError,
        errorCode: state.error.errorCode
    };
};

export default connect<StateFromProps, any, any, AppState>(mapStateToProps)(ErrorBoundary);