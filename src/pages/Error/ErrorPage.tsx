import * as React from 'react';
import Container from '../../components/Header/Container';

export default class ErrorPage extends React.Component {
    render() {
        return (
            <Container>
                <p>Something went wrong</p>
            </Container>
        );
    }
}