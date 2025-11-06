import {test} from '@playwright/test';
import { LoginPage } from '#pages/login.spec.js';
import users from '#test_data/users.json' assert { type: 'json' };
import messages from '#test_data/messages.json' assert { type: 'json'}


test('Validate title present', async ({page}) => {
    const Login = new LoginPage(page);
    await Login.goto()
    await Login.expectTitle('Ingresar trámites básicos en línea')
});

test('Invalid login', async ({page}) => {
    const Login = new LoginPage(page);
    await Login.goto()
    await Login.login(users.invalidUser.curp, users.invalidUser.email)
    await Login.expectErrorMessge(messages.requiredDataMessageError)
});