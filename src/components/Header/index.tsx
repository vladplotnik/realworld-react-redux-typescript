import * as React from 'react'
import { APP_NAME, ROUTE_INDEX, ROUTE_REGISTER } from '../../config'
import Brand from './Brand'
import Container from './Container'
import NavLink from './NavLink'
import NavLinks from './NavLinks'

export default function Header() {
    return (
        <Container>
            <Brand route={ROUTE_INDEX}>{APP_NAME}</Brand>
            <NavLinks>
                <NavLink active route={ROUTE_INDEX}>
                    Home
                </NavLink>
                <NavLink route={ROUTE_REGISTER}>Register</NavLink>
            </NavLinks>
        </Container>
    )
}