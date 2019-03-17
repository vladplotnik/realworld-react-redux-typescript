import * as React from 'react';
import Container from '../../../components/Header/Container';
import Heading from '../../../components/Authorization/Heading';
import SubHeadingLink from '../../../components/Authorization/SubHeadingLink';
import { ROUTE_LOGIN } from '../../../config';
import Fieldset from '../../../components/Fieldset';
import Input from '../../../components/Input';
import Button from '../../../components/Authorization/Button';

export default function Register() {
    return (
        <Container>
            <Heading>Sign up</Heading>
            <SubHeadingLink route={ROUTE_LOGIN}>Have an account?</SubHeadingLink>

            <Fieldset>
                <Input type="text" placeholder="Username" />
            </Fieldset>

            <Fieldset>
                <Input type="text" placeholder="Email" />
            </Fieldset>

            <Fieldset>
                <Input type="password" placeholder="Password" />
            </Fieldset>

            <Button onClick={() => null}>Sign in</Button>
        </Container>
    )
}
