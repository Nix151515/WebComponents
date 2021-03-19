import { LitElement, html, css, property } from 'lit-element';
import '@lion/form/define';
import '@lion/input/define';

import { Required, EqualsLength } from '@lion/form-core';

export class WcLoginPage extends LitElement {
    @property({ type: String }) welcomeMessage = 'Welcome to the page, hope you like it 👀';
    @property({ type: String }) loginMessage = 'You have to login to see more content';
    @property({ type: String }) requiredValidatorMessage = 'This field is required';
    @property({ type: String }) equals4ValidatorMessage = 'This field should have exactly 4 characters';


    static styles = css`
        h3 {
            margin-bottom: 40px;
            text-align: center;
        }

        h5 {
            text-align: center;
        }

        form {
            width: 25%;
            margin: auto;
        }

        lion-input {
            margin-top: 20px
        }
    `;

    setCustomMessage(msg: string) {
        return {
            getMessage: () => msg
        }
    }

    render() {

        return html`
        <h3> ${this.welcomeMessage} </h3>
        <h5> ${this.loginMessage} </h5>

        <lion-form>
            <form>
                <lion-input id="phoneNumber" name="phoneNumber" label="Phone Number" placeholder="+04xx-xxx-xxx"
                    .modelValue=${''}
                    .validators=${[
                        new Required('', this.setCustomMessage(this.requiredValidatorMessage))
                    ]}
                >
                </lion-input>

                <lion-input id="userId" name="userId" label="User ID" placeholder="xxxx" help-text="The last 4 digits of the card number"
                    .modelValue=${''} 
                    .validators=${[
                        new Required('', this.setCustomMessage(this.requiredValidatorMessage)),
                        new EqualsLength(4, this.setCustomMessage(this.equals4ValidatorMessage))
                    ]}
                >
                </lion-input>

            </form>
        </lion-form>
    `;
    }
}
