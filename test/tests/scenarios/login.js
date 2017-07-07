import {Selector} from "testcafe";

import {config} from "../../config";

import loader from "../../selectors/loader";

import helper from "../../helper/getPathname";

console.log(config);
fixture("Login")
  .page `${config.host}/login`;

test("1 Login as admin.",
  async t => {
    const loginForm = await Selector("#loginForm");
    const loginButton = await Selector("#loginForm > button");
    await t
      .expect(loader.isLoaded).eql(true)
      .expect(loginForm.exists).eql(true)
      .typeText("#email", "admin@gmail.com")
      .typeText("#password", "111111")
      .expect(loginButton.exists).eql(true)
      .click(loginButton)
      .expect(getPathname()).eql("/advertisers");
  }
);

test("2 Login with empty Email/Password field.",
  async t => {
    const loginForm = await Selector("#loginForm");
    const loginButton = await Selector("#loginForm > button");
    const email = await Selector('#email');
    const password = await Selector('#password');
    
    await t
      .expect(loader.isLoaded).eql(true)
      .expect(loginForm.exists).eql(true)
      .expect(email.exists).eql(true)
      .expect(email.value).eql("", "email is empty")
      .expect(password.exists).eql(true)
      .expect(password.value).eql("", "password is empty")
      .expect(loginButton.exists).eql(true)
      .click(loginButton)
      .expect(loginButton.getAttribute("disabled")).eql("");
  }
);

test("3 Messages 'required field' is present.",
  async t => {
    const loginForm = await Selector("#loginForm");
    const loginButton = await Selector("#loginForm > button");
    const email = await Selector('#email');
    const password = await Selector('#password');
    const errorAlert = await Selector("#email+span.help-block");
    const errorAlert2 = await Selector("#password+span.help-block");
    await t
      .expect(loader.isLoaded).eql(true)
      .expect(loginForm.exists).eql(true)
      .expect(email.exists).eql(true)
      .click(email)
      .expect(password.exists).eql(true)
      .click(password)
      .expect(loginButton.exists).eql(true)
      .click(loginButton)
      .expect(errorAlert.exists).eql(true)
      .expect(errorAlert.textContent).contains("required field")
      .expect(errorAlert2.exists).eql(true)
      .expect(errorAlert2.textContent).contains("required field");
  }
);