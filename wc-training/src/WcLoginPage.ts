import { LitElement, html, css, property } from 'lit-element';
import '@lion/form/define';
import '@lion/input/define';
import '@lion/button/define'
import '@lion/checkbox-group/define';

import { Required, EqualsLength, Pattern, Validator } from '@lion/form-core';
import { LionCheckboxGroup } from '@lion/checkbox-group';
import { LionInput } from '@lion/input';
import { LionButton } from '@lion/button';


interface LoginPayload {
    orangeBankId: string,
    cardNumber: string,
    saveSession?: boolean
}

/* TODO: Might create a custom validator */
// class AlphanumericValidator extends Validator {

// }

export class WcLoginPage extends LitElement {
    @property({ type: String }) welcomeMessage = 'Welcome to the page, hope you like it 👀';
    @property({ type: String }) loginMessage = 'You have to login to see more content';
    @property({ type: String }) requiredValidatorMessage = 'This field is required';
    @property({ type: String }) equals16ValidatorMessage = 'This field should have exactly 16 characters';
    @property({ type: String }) alphanumericValidatorMessage = 'Please insert only alphanumeric characters';
    static styles = css`

        h3 {
            margin-bottom: 70px;
            text-align: center;
        }

        h5 {
            text-align: center;
        }

        form {
            width: fit-content;
            margin: auto;
        }

        lion-input {
            margin-top: 20px;
        }

        input.form-control {
            height: 20px;
            border-width: 1px;
            border-radius: 5px;
            padding: 5px;
        }

        lion-checkbox-group {
            margin-top: 10px;
        }

        lion-checkbox {
            display: flex;
            align-items: center;
        }

        [data-tag-name="lion-validation-feedback"] {
            font-style: italic;
            font-size: 0.9em;
            color: red;
        }

        // #doggo {
        //     height: 250px;
        //     display: block;
        //     margin: auto;
        // }

        #loginButton {
            margin-top: 10px;
            display: block;
            background: #fd7e14
        }

        #loginButton[disabled] {
            color: #767676d9;
            background: lightgray
        }

    `;

    /* Might use these callbacks later */
    connectedCallback() {
        super.connectedCallback();
        console.log('in')
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        console.log('out')
    }

    setCustomMessage(msg: string) {
        return {
            getMessage: () => msg
        }
    }

    login() {
        const checkboxGr = <LionCheckboxGroup>this.shadowRoot?.querySelector("#loginCheckbox");
        const orangeBankInput = <LionInput>this.shadowRoot?.querySelector('#orangeBankId');
        const cardNumberInput = <LionInput>this.shadowRoot?.querySelector('#cardNumber');

        /* Safety check, the button should be disabled if the form is invalid */
        if (!this.isFormValid()) {
            return
        }

        let payload: LoginPayload = {
            orangeBankId: <string>orangeBankInput.modelValue,
            cardNumber: <string>cardNumberInput.modelValue,
            saveSession: checkboxGr.modelValue.includes("Yes")
        };

        console.log(payload)

        /* Send */
    }

    isFormValid() {
        /* TODO : Maybe a spinner? Mm, not now */

        const orangeBankInput = <LionInput>this.shadowRoot?.querySelector('#orangeBankId');
        const cardNumberInput = <LionInput>this.shadowRoot?.querySelector('#cardNumber');

        return orangeBankInput.hasFeedbackFor.includes('error') ||
            cardNumberInput.hasFeedbackFor.includes('error') ? false : true;
    }

    checkFormValidation() {
        const loginButton = <LionButton>this.shadowRoot?.querySelector('#loginButton');
        this.isFormValid() ? loginButton.removeAttribute('disabled') : loginButton.setAttribute('disabled', 'true')
    }

    render() {
        return html`
        <h3> ${this.welcomeMessage} </h3>
        <h5> ${this.loginMessage} </h5>

        <lion-form>
            <form>
                <lion-input id="orangeBankId" name="orangeBankId" label="Orange Bank ID" placeholder="xxxx"
                    .modelValue=${''}
                    @model-value-changed=${() => this.checkFormValidation()}
                    .validators=${[
                new Required('', this.setCustomMessage(this.requiredValidatorMessage)),
                new Pattern(/^[a-z0-9]+$/i, this.setCustomMessage(this.alphanumericValidatorMessage))
            ]}
                >
                </lion-input>

                <lion-input id="cardNumber" name="cardNumber" label="Card Number" placeholder="xxxx-xxxx-xxxx-xxxx"
                    .modelValue=${''}
                    @model-value-changed=${() => this.checkFormValidation()}
                    .validators=${[
                new Required('', this.setCustomMessage(this.requiredValidatorMessage)),
                new EqualsLength(16, this.setCustomMessage(this.equals16ValidatorMessage)),
                new Pattern(/^[a-z0-9]+$/i, this.setCustomMessage(this.alphanumericValidatorMessage))
            ]}
                >
                </lion-input>

                <lion-checkbox-group name="saveSession" id="loginCheckbox">
                    <lion-checkbox label="Save session" .choiceValue=${'Yes'}></lion-checkbox>
                </lion-checkbox-group>

                <lion-button id="loginButton" disabled @click="${() => this.login()}">Login</lion-button>
            </form>
        </lion-form>

    `;
    }
}


// <img id="doggo" src='../assets/doggo-of-security.jpg'>
